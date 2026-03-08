export interface ConsultantProfile {
  name: string;
  role: string;
  location?: string;
  contact?: {
    phone?: string;
    email?: string;
  };
  linkedinUrl?: string;
  languages?: string[];
  executiveProfile?: string;
  coreCapabilities?: { title: string; items: string[] }[];
  experienceHighlights?: string[];
  differentiators?: string[];
  education?: { degree: string; institution: string }[];
  certifications?: string[];
  technical?: string;
}

export const consultantProfiles: ConsultantProfile[] = [
  {
    name: "Trixy Otieno",
    role: "Principal Security Consultant",
    linkedinUrl: "https://www.linkedin.com/in/trixy-otieno-ms-cissp-cisa-ceh-gcih-gsec-pcip-pmp-3a3a98238/",
  },
  {
    name: "Aminata Kasse",
    role: "Executive Project Management & Strategic Operations Advisor",
    location: "Overland Park, Kansas",
    contact: {
      phone: "(913) 957-6113",
      email: "amykasse@yahoo.fr",
    },
    languages: ["English", "French"],
    executiveProfile:
      "Executive-level Project Management and Strategic Operations Advisor with experience leading cross-functional initiatives across federal, multinational, and corporate environments. Specialized in aligning project governance, procurement strategy, and financial oversight to deliver structured, compliant, and measurable outcomes. Proven ability to translate strategic objectives into disciplined execution frameworks, optimize capital investments, strengthen vendor accountability, and improve operational performance.",
    coreCapabilities: [
      {
        title: "Enterprise Project Leadership",
        items: [
          "End-to-end project lifecycle management",
          "Governance framework development",
          "Scope, timeline & milestone oversight",
          "Executive reporting & KPI dashboards",
          "Cross-functional stakeholder alignment",
        ],
      },
      {
        title: "Strategic Procurement & Vendor Governance",
        items: [
          "RFP/RFQ/RFI design and facilitation",
          "Vendor evaluation & contract negotiation",
          "Supplier performance management",
          "Cost optimization & spend analysis",
          "Compliance documentation controls",
        ],
      },
      {
        title: "Financial & Capital Planning",
        items: [
          "Capital budget modeling",
          "Financial forecasting & variance analysis",
          "Cost-benefit & ROI evaluation",
          "Risk-adjusted financial planning",
        ],
      },
      {
        title: "Risk, Compliance & Process Optimization",
        items: [
          "Regulatory and policy alignment",
          "Internal control strengthening",
          "Workflow redesign & efficiency improvement",
          "Performance monitoring systems",
        ],
      },
    ],
    experienceHighlights: [
      "Led competitive RFP cycles for capital and operational initiatives, ensuring cost control and vendor accountability.",
      "Managed capital budget planning and financial forecasting for major investment projects.",
      "Coordinated cross-functional teams across finance, procurement, engineering, and executive leadership.",
      "Conducted financial investigations and regulatory compliance analysis within federal systems.",
      "Developed performance dashboards and data validation frameworks to support executive decision-making.",
      "Implemented process improvements that enhanced operational transparency and execution efficiency.",
    ],
    differentiators: [
      "Bilingual Executive Communication (English/French)",
      "Federal, Corporate & Global Supply Chain Experience",
      "Integrated Finance + Procurement + Project Expertise",
      "Structured Governance & Compliance Discipline",
      "Data-Driven Decision Support",
    ],
    education: [
      { degree: "MBA", institution: "George Washington University – Washington DC" },
      { degree: "B.A., Business Administration", institution: "Strayer University – Washington DC" },
      { degree: "A.S., Computer Science", institution: "University of Birkhadem – Algiers" },
    ],
    certifications: ["Project Management Essentials Certification – Johnson County Community College"],
    technical: "Microsoft Office Suite, SAP, ERP systems, Salesforce, Microsoft Project",
  },
];
