import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { sendAssessmentEmail, sendConsultationScheduleEmail, type AssessmentSubmission, type ConsultationSchedule } from "./email";
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
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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
  });

  app.post("/api/schedule", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = scheduleSchema.parse(req.body);
      
      // Send email notification
      await sendConsultationScheduleEmail(validatedData as ConsultationSchedule);
      
      log(`Consultation scheduled: ${validatedData.name} from ${validatedData.company} for ${validatedData.datetime}`);
      
      res.status(200).json({
        success: true,
        message: "Consultation scheduled successfully. A confirmation email will be sent shortly.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        log(`Schedule validation error: ${JSON.stringify(error.errors)}`);
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors,
        });
      }
      
      log(`Schedule submission error: ${error}`, "error");
      res.status(500).json({
        success: false,
        message: "Failed to schedule consultation. Please try again or contact us directly.",
      });
    }
  });

  // Assessment form submission endpoint
  app.post("/api/assessment", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = assessmentSchema.parse(req.body);
      
      // Send email notification
      await sendAssessmentEmail(validatedData as AssessmentSubmission);
      
      log(`Assessment submitted: ${validatedData.name} from ${validatedData.company}`);
      
      res.status(200).json({
        success: true,
        message: "Assessment request submitted successfully. Our team will contact you within 24 hours.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        log(`Assessment validation error: ${JSON.stringify(error.errors)}`);
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors,
        });
      }
      
      log(`Assessment submission error: ${error}`, "error");
      res.status(500).json({
        success: false,
        message: "Failed to submit assessment request. Please try again or contact us directly.",
      });
    }
  });

  return httpServer;
}
