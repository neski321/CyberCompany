import { Resend } from "resend";
import { log } from "./index";

// Initializing Resend client
const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

const getFromEmail = () => {
  return process.env.SMTP_FROM || "onboarding@resend.dev";
};

const getNotificationEmail = () => {
  return process.env.NOTIFICATION_EMAIL || "secure@riskwiseglobalconsulting.com";
};

// Helper to escape HTML for security
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Format concern label
function formatConcern(concern: string): string {
  const concerns: Record<string, string> = {
    "data-breach": "Preventing Data Breaches",
    compliance: "Compliance (GDPR, HIPAA, PCI-DSS)",
    "vulnerability-assessment": "Vulnerability Assessment",
    "incident-response": "Incident Response Planning",
    "network-security": "Network Security",
    "code-security": "Application Code Security",
    other: "Other",
  };
  return concerns[concern] || concern;
}

// Format timeline label
function formatTimeline(timeline: string): string {
  const timelines: Record<string, string> = {
    immediate: "Immediate (within 1 week)",
    "1-3-months": "1-3 months",
    "3-6-months": "3-6 months",
    "6-12-months": "6-12 months",
    exploring: "Just exploring options",
  };
  return timelines[timeline] || timeline;
}

// Format company size label
function formatCompanySize(size: string): string {
  const sizes: Record<string, string> = {
    "1-10": "1-10 employees",
    "11-50": "11-50 employees",
    "51-200": "51-200 employees",
    "201-1000": "201-1000 employees",
    "1000+": "1000+ employees",
  };
  return sizes[size] || size;
}

export interface AssessmentSubmission {
  name: string;
  email: string;
  company: string;
  phone?: string;
  companySize: string;
  industry: string;
  primaryConcern: string;
  currentSecurityMeasures?: string;
  timeline: string;
  message: string;
}

export interface ConsultationSchedule {
  name: string;
  email: string;
  company: string;
  phone?: string;
  date: string;
  timeSlot: string;
  datetime: string;
  timezone?: string;
  message?: string;
}

/**
 * Internal notification for new assessment
 */
export async function sendAssessmentEmail(data: AssessmentSubmission): Promise<void> {
  const notificationEmail = getNotificationEmail();
  const fromEmail = getFromEmail();

  const sanitized = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    company: escapeHtml(data.company),
    phone: data.phone ? escapeHtml(data.phone) : "",
    industry: escapeHtml(data.industry),
    measures: data.currentSecurityMeasures ? escapeHtml(data.currentSecurityMeasures) : "",
    message: escapeHtml(data.message),
  };

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .container { background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .header { border-bottom: 3px solid #06b6d4; padding-bottom: 10px; margin-bottom: 20px; }
    .header h1 { color: #06b6d4; margin: 0; font-size: 20px; }
    .section-title { font-weight: bold; border-bottom: 1px solid #eee; margin: 15px 0 10px; padding-bottom: 5px; }
    .field { margin-bottom: 10px; }
    .label { color: #666; font-size: 12px; font-weight: bold; text-transform: uppercase; }
    .value { background: #f9f9f9; padding: 8px; border-left: 3px solid #06b6d4; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h1>🛡️ New Security Assessment Request</h1></div>
    <div class="section-title">Contact</div>
    <div class="field"><div class="label">Name</div><div class="value">${sanitized.name}</div></div>
    <div class="field"><div class="label">Email</div><div class="value">${sanitized.email}</div></div>
    <div class="field"><div class="label">Company</div><div class="value">${sanitized.company}</div></div>
    ${sanitized.phone ? `<div class="field"><div class="label">Phone</div><div class="value">${sanitized.phone}</div></div>` : ""}
    
    <div class="section-title">Requirements</div>
    <div class="field"><div class="label">Concern</div><div class="value">${formatConcern(data.primaryConcern)}</div></div>
    <div class="field"><div class="label">Timeline</div><div class="value">${formatTimeline(data.timeline)}</div></div>
    
    <div class="section-title">Message</div>
    <div style="white-space: pre-wrap; font-size: 14px;">${sanitized.message}</div>
  </div>
</body>
</html>`;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      reply_to: data.email,
      subject: `[ASSESSMENT] ${sanitized.name} - ${sanitized.company}`,
      html: htmlContent,
    });
  } catch (error) {
    log(`Internal email error: ${error}`, "email");
    throw error;
  }
}

/**
 * Internal notification for new consultation
 */
export async function sendConsultationScheduleEmail(data: ConsultationSchedule): Promise<void> {
  const notificationEmail = getNotificationEmail();
  const fromEmail = getFromEmail();

  const sanitized = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    company: escapeHtml(data.company),
    datetime: escapeHtml(data.datetime),
    timeSlot: escapeHtml(data.timeSlot),
    message: data.message ? escapeHtml(data.message) : "",
  };

  const htmlContent = `
<div style="font-family: sans-serif; color: #333;">
  <h2 style="color: #06b6d4;">📅 New Consultation Scheduled</h2>
  <p><strong>Client:</strong> ${sanitized.name} (${sanitized.company})</p>
  <p><strong>Date/Time:</strong> ${sanitized.datetime}</p>
  <p><strong>Slot:</strong> ${sanitized.timeSlot}</p>
  <p><strong>Email:</strong> ${sanitized.email}</p>
  ${sanitized.message ? `<p><strong>Notes:</strong><br/>${sanitized.message}</p>` : ""}
</div>`;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: notificationEmail,
      reply_to: data.email,
      subject: `[SCHEDULE] ${sanitized.name} - ${sanitized.datetime}`,
      html: htmlContent,
    });
  } catch (error) {
    log(`Internal schedule email error: ${error}`, "email");
    throw error;
  }
}

/**
 * Outlook/Gmail compatible confirmation email (Table-based)
 */
function getBrandedConfirmationLayout(title: string, body: string, summaryHtml: string): string {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7f9; font-family: Arial, Helvetica, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="padding: 20px 0 30px 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse; background-color: #ffffff;">
          <!-- Header -->
          <tr>
            <td align="center" bgcolor="#0f172a" style="padding: 30px 0 30px 0; color: #ffffff; font-size: 24px; font-weight: bold;">
              <span style="color: #06b6d4;">🛡️</span> RISKWISE GLOBAL CONSULTING
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="color: #1a202c; font-family: Arial, sans-serif; font-size: 20px; font-weight: bold;">
                    ${title}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 0 10px 0; color: #4a5568; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                    ${body}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0 30px 0;">
                    <table border="0" cellpadding="20" cellspacing="0" width="100%" style="background-color: #f8fafc; border-left: 4px solid #06b6d4; border-radius: 4px;">
                      <tr>
                        <td style="color: #2d3748; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
                          ${summaryHtml}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="color: #4a5568; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                    Our team will review your information and reach out within 24 hours. If you have immediate questions, feel free to reply to this email.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td bgcolor="#f8fafc" style="padding: 30px 30px 30px 30px; border-top: 1px solid #edf2f7;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="color: #718096; font-family: Arial, sans-serif; font-size: 12px; width: 75%;">
                    &copy; 2026 RiskWise Global Consulting. All rights reserved.<br/>
                    Kansas City, Kansas, United States
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendAssessmentConfirmation(data: AssessmentSubmission): Promise<void> {
  const fromEmail = getFromEmail();
  const sanitizedName = escapeHtml(data.name);
  
  const title = "We've Received Your Assessment Request";
  const body = `Hello ${sanitizedName},<br/><br/>Thank you for reaching out to RiskWise Global Consulting. We have received your request for a security assessment for <b>${escapeHtml(data.company)}</b>.`;
  
  const summaryHtml = `
    <strong style="color: #06b6d4; text-transform: uppercase; font-size: 11px;">Request Summary</strong><br/><br/>
    <b>Primary Concern:</b> ${formatConcern(data.primaryConcern)}<br/>
    <b>Timeline:</b> ${formatTimeline(data.timeline)}<br/>
    <b>Company Size:</b> ${formatCompanySize(data.companySize)}
  `;

  const html = getBrandedConfirmationLayout(title, body, summaryHtml);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: "Security Assessment Request Received - RiskWise",
      html: html,
    });
  } catch (error) {
    log(`Assessment confirmation error: ${error}`, "email");
  }
}

export async function sendConsultationConfirmation(data: ConsultationSchedule): Promise<void> {
  const fromEmail = getFromEmail();
  const sanitizedName = escapeHtml(data.name);
  
  const title = "Your Consultation is Scheduled";
  const body = `Hello ${sanitizedName},<br/><br/>Your security consultation with RiskWise Global Consulting has been successfully scheduled. We look forward to speaking with you.`;
  
  const summaryHtml = `
    <strong style="color: #06b6d4; text-transform: uppercase; font-size: 11px;">Appointment Details</strong><br/><br/>
    <b>Date & Time:</b> ${escapeHtml(data.datetime)}<br/>
    <b>Company:</b> ${escapeHtml(data.company)}<br/>
    <b>Status:</b> Confirmed
  `;

  const html = getBrandedConfirmationLayout(title, body, summaryHtml);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: "Consultation Confirmed - RiskWise Global Consulting",
      html: html,
    });
  } catch (error) {
    log(`Consultation confirmation error: ${error}`, "email");
  }
}

