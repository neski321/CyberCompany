import Database from "better-sqlite3";
import path from "path";
import { log } from "./index";

const dbPath = path.join(process.cwd(), "data", "submissions.db");
const db = new Database(dbPath);

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS assessment_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL,
    phone TEXT,
    company_size TEXT NOT NULL,
    industry TEXT NOT NULL,
    primary_concern TEXT NOT NULL,
    current_security_measures TEXT,
    timeline TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    email_sent INTEGER DEFAULT 0,
    confirmation_sent INTEGER DEFAULT 0,
    email_error TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS consultation_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL,
    phone TEXT,
    date TEXT NOT NULL,
    time_slot TEXT NOT NULL,
    datetime TEXT NOT NULL,
    timezone TEXT,
    message TEXT,
    status TEXT DEFAULT 'new',
    email_sent INTEGER DEFAULT 0,
    confirmation_sent INTEGER DEFAULT 0,
    email_error TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export interface AssessmentDB {
  id: number;
  name: string;
  email: string;
  company: string;
  phone?: string;
  company_size: string;
  industry: string;
  primary_concern: string;
  current_security_measures?: string;
  timeline: string;
  message: string;
  status: string;
  email_sent: number;
  confirmation_sent: number;
  email_error?: string;
  created_at: string;
}

export interface ConsultationDB {
  id: number;
  name: string;
  email: string;
  company: string;
  phone?: string;
  date: string;
  time_slot: string;
  datetime: string;
  timezone?: string;
  message?: string;
  status: string;
  email_sent: number;
  confirmation_sent: number;
  email_error?: string;
  created_at: string;
}

export const dbHelpers = {
  saveAssessment: (data: any) => {
    const stmt = db.prepare(`
      INSERT INTO assessment_submissions (
        name, email, company, phone, company_size, industry, 
        primary_concern, current_security_measures, timeline, message
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(
      data.name, data.email, data.company, data.phone || null, 
      data.companySize, data.industry, data.primaryConcern, 
      data.currentSecurityMeasures || null, data.timeline, data.message
    );
    return result.lastInsertRowid;
  },

  saveConsultation: (data: any) => {
    const stmt = db.prepare(`
      INSERT INTO consultation_submissions (
        name, email, company, phone, date, time_slot, datetime, timezone, message
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(
      data.name, data.email, data.company, data.phone || null,
      data.date, data.timeSlot, data.datetime, data.timezone || null, 
      data.message || null
    );
    return result.lastInsertRowid;
  },

  getAssessments: () => {
    return db.prepare("SELECT * FROM assessment_submissions ORDER BY created_at DESC").all() as AssessmentDB[];
  },

  getConsultations: () => {
    return db.prepare("SELECT * FROM consultation_submissions ORDER BY created_at DESC").all() as ConsultationDB[];
  },

  updateAssessmentStatus: (id: number, status: string) => {
    return db.prepare("UPDATE assessment_submissions SET status = ? WHERE id = ?").run(status, id);
  },

  updateConsultationStatus: (id: number, status: string) => {
    return db.prepare("UPDATE consultation_submissions SET status = ? WHERE id = ?").run(status, id);
  },

  markAssessmentEmailSent: (id: number | bigint, field: 'email_sent' | 'confirmation_sent', error?: string) => {
    if (error) {
      return db.prepare(`UPDATE assessment_submissions SET email_error = ? WHERE id = ?`).run(error, id);
    }
    return db.prepare(`UPDATE assessment_submissions SET ${field} = 1 WHERE id = ?`).run(id);
  },

  markConsultationEmailSent: (id: number | bigint, field: 'email_sent' | 'confirmation_sent', error?: string) => {
    if (error) {
      return db.prepare(`UPDATE consultation_submissions SET email_error = ? WHERE id = ?`).run(error, id);
    }
    return db.prepare(`UPDATE consultation_submissions SET ${field} = 1 WHERE id = ?`).run(id);
  },

  getStats: () => {
    const assessments = db.prepare("SELECT COUNT(*) as count FROM assessment_submissions").get() as { count: number };
    const consultations = db.prepare("SELECT COUNT(*) as count FROM consultation_submissions").get() as { count: number };
    const newAssessments = db.prepare("SELECT COUNT(*) as count FROM assessment_submissions WHERE status = 'new'").get() as { count: number };
    const newConsultations = db.prepare("SELECT COUNT(*) as count FROM consultation_submissions WHERE status = 'new'").get() as { count: number };

    return {
      total: assessments.count + consultations.count,
      new: newAssessments.count + newConsultations.count,
      assessments: assessments.count,
      consultations: consultations.count
    };
  }
};
