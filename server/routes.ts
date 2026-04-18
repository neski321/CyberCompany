import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { 
  sendAssessmentEmail, 
  sendConsultationScheduleEmail, 
  sendAssessmentConfirmation,
  sendConsultationConfirmation,
  type AssessmentSubmission, 
  type ConsultationSchedule 
} from "./email";
import { dbHelpers } from "./db";
import { rateLimit } from "./rate-limit";
import { log } from "./index";
import { z } from "zod";

// Validation schema for assessment submission
const assessmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-1000", "1000+"]),
  industry: z.string().min(2, "Industry is required"),
  primaryConcern: z.enum([
    "data-breach",
    "compliance",
    "vulnerability-assessment",
    "incident-response",
    "network-security",
    "code-security",
    "other",
  ]),
  currentSecurityMeasures: z.string().optional(),
  timeline: z.enum(["immediate", "1-3-months", "3-6-months", "6-12-months", "exploring"]),
  message: z.string().min(10, "Please provide more details (at least 10 characters)"),
  // Honeypot field
  confirm_email_field: z.string().optional(),
});

// Admin status update schema
const statusUpdateSchema = z.object({
  status: z.enum(["new", "read", "archived"]),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Admin authentication middleware
  const adminAuth = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers["x-admin-key"];
    const expectedKey = process.env.ADMIN_API_KEY;
    
    if (!expectedKey || apiKey !== expectedKey) {
      log(`Unauthorized admin access attempt from ${req.ip}`, "auth");
      return res.status(401).json({ message: "Unauthorized access" });
    }
    next();
  };

  // Consultation scheduling endpoint
  const scheduleSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().min(2, "Company name is required"),
    phone: z.string().optional(),
    date: z.string(),
    timeSlot: z.string().min(1, "Please select a time slot"),
    datetime: z.string(),
    timezone: z.string().optional(),
    message: z.string().optional(),
    // Honeypot field
    confirm_email_field: z.string().optional(),
  });

  app.post("/api/schedule", rateLimit, async (req: Request, res: Response) => {
    try {
      // Honeypot check
      if (req.body.confirm_email_field) {
        log(`Bot detected in schedule form (Honeypot filled)`, "spam");
        return res.status(200).json({ success: true, message: "Thank you for your submission." });
      }

      const validatedData = scheduleSchema.parse(req.body);
      
      // 1. Persist to DB first
      const submissionId = dbHelpers.saveConsultation(validatedData);
      
      // 2. Send emails asynchronously
      (async () => {
        try {
          await sendConsultationScheduleEmail(validatedData as ConsultationSchedule);
          await dbHelpers.markConsultationEmailSent(submissionId, 'email_sent');
          
          await sendConsultationConfirmation(validatedData as ConsultationSchedule);
          await dbHelpers.markConsultationEmailSent(submissionId, 'confirmation_sent');
        } catch (emailErr) {
          log(`Schedule email error for ID ${submissionId}: ${emailErr}`, "error");
          await dbHelpers.markConsultationEmailSent(submissionId, 'email_sent', String(emailErr));
        }
      })();
      
      log(`Consultation scheduled: ${validatedData.name} (${validatedData.company}) ID: ${submissionId}`);
      
      res.status(200).json({
        success: true,
        message: "Consultation scheduled successfully. A confirmation email will be sent shortly.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: "Invalid data provided", errors: error.errors });
      }
      log(`Schedule submission error: ${error}`, "error");
      res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
  });

  // Assessment form submission endpoint
  app.post("/api/assessment", rateLimit, async (req: Request, res: Response) => {
    try {
      // Honeypot check
      if (req.body.confirm_email_field) {
        log(`Bot detected in assessment form (Honeypot filled)`, "spam");
        return res.status(200).json({ success: true, message: "Thank you for your submission." });
      }

      const validatedData = assessmentSchema.parse(req.body);
      
      // 1. Persist to DB first
      const submissionId = dbHelpers.saveAssessment(validatedData);
      
      // 2. Send emails asynchronously
      (async () => {
        try {
          await sendAssessmentEmail(validatedData as AssessmentSubmission);
          await dbHelpers.markAssessmentEmailSent(submissionId, 'email_sent');
          
          await sendAssessmentConfirmation(validatedData as AssessmentSubmission);
          await dbHelpers.markAssessmentEmailSent(submissionId, 'confirmation_sent');
        } catch (emailErr) {
          log(`Assessment email error for ID ${submissionId}: ${emailErr}`, "error");
          await dbHelpers.markAssessmentEmailSent(submissionId, 'email_sent', String(emailErr));
        }
      })();
      
      log(`Assessment submitted: ${validatedData.name} (${validatedData.company}) ID: ${submissionId}`);
      
      res.status(200).json({
        success: true,
        message: "Assessment request submitted successfully. Our team will contact you within 24 hours.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: "Invalid data provided", errors: error.errors });
      }
      log(`Assessment submission error: ${error}`, "error");
      res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
  });

  // Admin Verification
  app.post("/api/admin/verify-pin", (req: Request, res: Response) => {
    const { pin } = req.body;
    if (pin === process.env.ADMIN_PIN) {
      return res.json({ success: true, key: process.env.ADMIN_API_KEY });
    }
    res.status(401).json({ success: false, message: "Invalid PIN" });
  });

  // Admin Dashboard Data
  app.get("/api/admin/stats", adminAuth, (_req, res) => {
    res.json(dbHelpers.getStats());
  });

  app.get("/api/admin/assessments", adminAuth, (_req, res) => {
    res.json(dbHelpers.getAssessments());
  });

  app.get("/api/admin/consultations", adminAuth, (_req, res) => {
    res.json(dbHelpers.getConsultations());
  });

  app.patch("/api/admin/assessments/:id", adminAuth, (req, res) => {
    const { id } = req.params;
    const { status } = statusUpdateSchema.parse(req.body);
    dbHelpers.updateAssessmentStatus(Number(id), status);
    res.json({ success: true });
  });

  app.patch("/api/admin/consultations/:id", adminAuth, (req, res) => {
    const { id } = req.params;
    const { status } = statusUpdateSchema.parse(req.body);
    dbHelpers.updateConsultationStatus(Number(id), status);
    res.json({ success: true });
  });

  return httpServer;
}
