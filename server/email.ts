import nodemailer from "nodemailer";
import { log } from "./index";

// Email configuration - uses environment variables
// For production, set these in your environment:
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, NOTIFICATION_EMAIL
const getEmailConfig = () => {
  // Default to a test configuration if not set
  // For development, you can use services like Mailtrap, Ethereal, or Gmail
  return {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  };
};

const getFromEmail = () => {
  return process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@riskwiseglobalconsulting.com";
};

const getNotificationEmail = () => {
  return process.env.NOTIFICATION_EMAIL || "secure@riskwiseglobalconsulting.com";
};

// Create reusable transporter
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    const config = getEmailConfig();
    transporter = nodemailer.createTransport(config);
  }
  return transporter;
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

export async function sendAssessmentEmail(data: AssessmentSubmission): Promise<void> {
  const notificationEmail = getNotificationEmail();
  const fromEmail = getFromEmail();

  // HTML email template
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Security Assessment Request</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      border-bottom: 3px solid #06b6d4;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #06b6d4;
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }
    .header p {
      color: #666;
      margin: 5px 0 0 0;
      font-size: 14px;
    }
    .section {
      margin-bottom: 25px;
    }
    .section-title {
      color: #1a1a1a;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #e5e5e5;
    }
    .field {
      margin-bottom: 15px;
    }
    .field-label {
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
      font-weight: 600;
    }
    .field-value {
      color: #1a1a1a;
      font-size: 15px;
      padding: 8px 12px;
      background-color: #f9f9f9;
      border-left: 3px solid #06b6d4;
      border-radius: 4px;
    }
    .message-box {
      background-color: #f9f9f9;
      border-left: 3px solid #06b6d4;
      padding: 15px;
      border-radius: 4px;
      margin-top: 10px;
    }
    .message-box p {
      margin: 0;
      color: #1a1a1a;
      white-space: pre-wrap;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
      text-align: center;
      color: #666;
      font-size: 12px;
    }
    .badge {
      display: inline-block;
      padding: 4px 8px;
      background-color: #06b6d4;
      color: white;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🛡️ New Security Assessment Request</h1>
      <p>Submitted: ${new Date().toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short",
      })}</p>
    </div>

    <div class="section">
      <div class="section-title">Contact Information</div>
      <div class="grid">
        <div class="field">
          <div class="field-label">Full Name</div>
          <div class="field-value">${data.name}</div>
        </div>
        <div class="field">
          <div class="field-label">Email Address</div>
          <div class="field-value">${data.email}</div>
        </div>
        <div class="field">
          <div class="field-label">Company</div>
          <div class="field-value">${data.company}</div>
        </div>
        ${data.phone ? `
        <div class="field">
          <div class="field-label">Phone Number</div>
          <div class="field-value">${data.phone}</div>
        </div>
        ` : ""}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Company Details</div>
      <div class="grid">
        <div class="field">
          <div class="field-label">Company Size</div>
          <div class="field-value">${formatCompanySize(data.companySize)}</div>
        </div>
        <div class="field">
          <div class="field-label">Industry</div>
          <div class="field-value">${data.industry}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Security Requirements</div>
      <div class="field">
        <div class="field-label">Primary Concern</div>
        <div class="field-value">
          <span class="badge">${formatConcern(data.primaryConcern)}</span>
        </div>
      </div>
      <div class="field">
        <div class="field-label">Timeline</div>
        <div class="field-value">${formatTimeline(data.timeline)}</div>
      </div>
      ${data.currentSecurityMeasures ? `
      <div class="field">
        <div class="field-label">Current Security Measures</div>
        <div class="field-value">${data.currentSecurityMeasures}</div>
      </div>
      ` : ""}
    </div>

    <div class="section">
      <div class="section-title">Additional Details</div>
      <div class="message-box">
        <p>${data.message}</p>
      </div>
    </div>

    <div class="footer">
      <p>This assessment request was submitted through the RiskWise Global Consulting website.</p>
      <p>Please respond to: <a href="mailto:${data.email}">${data.email}</a></p>
    </div>
  </div>
</body>
</html>
  `;

  // Plain text version for email clients that don't support HTML
  const textContent = `
NEW SECURITY ASSESSMENT REQUEST
===============================

Submitted: ${new Date().toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  })}

CONTACT INFORMATION
------------------
Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
${data.phone ? `Phone: ${data.phone}` : ""}

COMPANY DETAILS
---------------
Company Size: ${formatCompanySize(data.companySize)}
Industry: ${data.industry}

SECURITY REQUIREMENTS
---------------------
Primary Concern: ${formatConcern(data.primaryConcern)}
Timeline: ${formatTimeline(data.timeline)}
${data.currentSecurityMeasures ? `Current Security Measures: ${data.currentSecurityMeasures}` : ""}

ADDITIONAL DETAILS
------------------
${data.message}

---
This assessment request was submitted through the RiskWise Global Consulting website.
Please respond to: ${data.email}
  `;

  try {
    const mailOptions = {
      from: `RiskWise Global Consulting <${fromEmail}>`,
      to: notificationEmail,
      replyTo: data.email,
      subject: `New Security Assessment Request from ${data.name} at ${data.company}`,
      text: textContent,
      html: htmlContent,
    };

    const transporter = getTransporter();
    await transporter.sendMail(mailOptions);
    
    log(`Assessment email sent successfully to ${notificationEmail} for ${data.name} from ${data.company}`);
  } catch (error) {
    log(`Failed to send assessment email: ${error}`, "email");
    throw new Error("Failed to send email notification");
  }
}

export async function sendConsultationScheduleEmail(data: ConsultationSchedule): Promise<void> {
  const notificationEmail = getNotificationEmail();
  const fromEmail = getFromEmail();

  // Format the date nicely
  const consultationDate = new Date(data.datetime);
  const formattedDate = consultationDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  // HTML email template
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Consultation Scheduled</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      border-bottom: 3px solid #06b6d4;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #06b6d4;
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }
    .header p {
      color: #666;
      margin: 5px 0 0 0;
      font-size: 14px;
    }
    .section {
      margin-bottom: 25px;
    }
    .section-title {
      color: #1a1a1a;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1px solid #e5e5e5;
    }
    .field {
      margin-bottom: 15px;
    }
    .field-label {
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
      font-weight: 600;
    }
    .field-value {
      color: #1a1a1a;
      font-size: 15px;
      padding: 8px 12px;
      background-color: #f9f9f9;
      border-left: 3px solid #06b6d4;
      border-radius: 4px;
    }
    .datetime-box {
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      margin: 20px 0;
    }
    .datetime-box .date {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    .datetime-box .time {
      font-size: 18px;
      opacity: 0.9;
    }
    .message-box {
      background-color: #f9f9f9;
      border-left: 3px solid #06b6d4;
      padding: 15px;
      border-radius: 4px;
      margin-top: 10px;
    }
    .message-box p {
      margin: 0;
      color: #1a1a1a;
      white-space: pre-wrap;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
      text-align: center;
      color: #666;
      font-size: 12px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📅 New Consultation Scheduled</h1>
      <p>Submitted: ${new Date().toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "short",
      })}</p>
    </div>

    <div class="datetime-box">
      <div class="date">${formattedDate}</div>
      <div class="time">${data.timeSlot}${data.timezone ? ` (${data.timezone})` : ""}</div>
    </div>

    <div class="section">
      <div class="section-title">Contact Information</div>
      <div class="grid">
        <div class="field">
          <div class="field-label">Full Name</div>
          <div class="field-value">${data.name}</div>
        </div>
        <div class="field">
          <div class="field-label">Email Address</div>
          <div class="field-value">${data.email}</div>
        </div>
        <div class="field">
          <div class="field-label">Company</div>
          <div class="field-value">${data.company}</div>
        </div>
        ${data.phone ? `
        <div class="field">
          <div class="field-label">Phone Number</div>
          <div class="field-value">${data.phone}</div>
        </div>
        ` : ""}
      </div>
    </div>

    ${data.message ? `
    <div class="section">
      <div class="section-title">Additional Notes</div>
      <div class="message-box">
        <p>${data.message}</p>
      </div>
    </div>
    ` : ""}

    <div class="footer">
      <p>This consultation was scheduled through the RiskWise Global Consulting website.</p>
      <p>Please respond to: <a href="mailto:${data.email}">${data.email}</a></p>
      <p style="margin-top: 10px; color: #06b6d4; font-weight: 600;">Please confirm this appointment in your calendar.</p>
    </div>
  </div>
</body>
</html>
  `;

  // Plain text version
  const textContent = `
NEW CONSULTATION SCHEDULED
==========================

Consultation Date & Time: ${formattedDate}
${data.timezone ? `Timezone: ${data.timezone}` : ""}

CONTACT INFORMATION
------------------
Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
${data.phone ? `Phone: ${data.phone}` : ""}

${data.message ? `
ADDITIONAL NOTES
----------------
${data.message}
` : ""}

---
This consultation was scheduled through the RiskWise Global Consulting website.
Please respond to: ${data.email}
Please confirm this appointment in your calendar.
  `;

  try {
    const mailOptions = {
      from: `RiskWise Global Consulting <${fromEmail}>`,
      to: notificationEmail,
      replyTo: data.email,
      subject: `New Consultation Scheduled: ${data.name} from ${data.company} - ${formattedDate}`,
      text: textContent,
      html: htmlContent,
    };

    const transporter = getTransporter();
    await transporter.sendMail(mailOptions);
    
    log(`Consultation schedule email sent successfully to ${notificationEmail} for ${data.name} from ${data.company}`);
  } catch (error) {
    log(`Failed to send consultation schedule email: ${error}`, "email");
    throw new Error("Failed to send email notification");
  }
}

