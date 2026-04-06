export interface ConsultantProfile {
  name: string;
  role: Record<string, string>;
  location?: Record<string, string>;
  contact?: {
    phone?: string;
    email?: string;
  };
  linkedinUrl?: string;
  languages?: string[];
  executiveProfile?: Record<string, string>;
  coreCapabilities?: { title: Record<string, string>; items: Record<string, string[]> }[];
  experienceHighlights?: Record<string, string[]>;
  differentiators?: Record<string, string[]>;
  education?: { degree: Record<string, string>; institution: string }[];
  certifications?: string[];
  technical?: string;
}

/** Helper to pick the right localized string */
export function localize(value: Record<string, string> | undefined, lang: string): string {
  if (!value) return "";
  return value[lang] || value["en"] || "";
}

/** Helper to pick the right localized array */
export function localizeArray(value: Record<string, string[]> | undefined, lang: string): string[] {
  if (!value) return [];
  return value[lang] || value["en"] || [];
}

export const consultantProfiles: ConsultantProfile[] = [
  {
    name: "Trixy Otieno",
    role: {
      en: "Principal Security Consultant",
      fr: "Consultante Principale en Sécurité",
    },
    linkedinUrl: "https://www.linkedin.com/in/trixy-otieno-ms-cissp-cisa-ceh-gcih-gsec-pcip-pmp-3a3a98238/",
  },
  {
    name: "Aminata Kasse",
    role: {
      en: "Executive Project Management & Strategic Operations Advisor",
      fr: "Conseillère en Gestion de Projets Exécutifs et Opérations Stratégiques",
    },
    location: {
      en: "Overland Park, Kansas",
      fr: "Overland Park, Kansas",
    },
    contact: {
      phone: "(913) 957-6113",
      email: "amykasse@yahoo.fr",
    },
    languages: ["English", "French"],
    executiveProfile: {
      en: "Executive-level Project Management and Strategic Operations Advisor with experience leading cross-functional initiatives across federal, multinational, and corporate environments. Specialized in aligning project governance, procurement strategy, and financial oversight to deliver structured, compliant, and measurable outcomes. Proven ability to translate strategic objectives into disciplined execution frameworks, optimize capital investments, strengthen vendor accountability, and improve operational performance.",
      fr: "Conseillère en Gestion de Projets et Opérations Stratégiques de niveau exécutif, avec une expérience dans la direction d'initiatives interfonctionnelles au sein d'environnements fédéraux, multinationaux et corporatifs. Spécialisée dans l'alignement de la gouvernance de projet, de la stratégie d'approvisionnement et de la surveillance financière pour fournir des résultats structurés, conformes et mesurables. Capacité avérée à traduire les objectifs stratégiques en cadres d'exécution disciplinés, à optimiser les investissements en capital, à renforcer la responsabilité des fournisseurs et à améliorer la performance opérationnelle.",
    },
    coreCapabilities: [
      {
        title: {
          en: "Enterprise Project Leadership",
          fr: "Leadership de Projets d'Entreprise",
        },
        items: {
          en: [
            "End-to-end project lifecycle management",
            "Governance framework development",
            "Scope, timeline & milestone oversight",
            "Executive reporting & KPI dashboards",
            "Cross-functional stakeholder alignment",
          ],
          fr: [
            "Gestion du cycle de vie complet des projets",
            "Développement de cadres de gouvernance",
            "Supervision de la portée, des délais et des jalons",
            "Rapports exécutifs et tableaux de bord KPI",
            "Alignement des parties prenantes interfonctionnelles",
          ],
        },
      },
      {
        title: {
          en: "Strategic Procurement & Vendor Governance",
          fr: "Approvisionnement Stratégique et Gouvernance des Fournisseurs",
        },
        items: {
          en: [
            "RFP/RFQ/RFI design and facilitation",
            "Vendor evaluation & contract negotiation",
            "Supplier performance management",
            "Cost optimization & spend analysis",
            "Compliance documentation controls",
          ],
          fr: [
            "Conception et facilitation d'AO/DDQ/DDI",
            "Évaluation des fournisseurs et négociation de contrats",
            "Gestion de la performance des fournisseurs",
            "Optimisation des coûts et analyse des dépenses",
            "Contrôles de documentation de conformité",
          ],
        },
      },
      {
        title: {
          en: "Financial & Capital Planning",
          fr: "Planification Financière et en Capital",
        },
        items: {
          en: [
            "Capital budget modeling",
            "Financial forecasting & variance analysis",
            "Cost-benefit & ROI evaluation",
            "Risk-adjusted financial planning",
          ],
          fr: [
            "Modélisation du budget d'investissement",
            "Prévisions financières et analyse des écarts",
            "Évaluation coûts-avantages et ROI",
            "Planification financière ajustée au risque",
          ],
        },
      },
      {
        title: {
          en: "Risk, Compliance & Process Optimization",
          fr: "Risques, Conformité et Optimisation des Processus",
        },
        items: {
          en: [
            "Regulatory and policy alignment",
            "Internal control strengthening",
            "Workflow redesign & efficiency improvement",
            "Performance monitoring systems",
          ],
          fr: [
            "Alignement réglementaire et des politiques",
            "Renforcement des contrôles internes",
            "Refonte des flux de travail et amélioration de l'efficacité",
            "Systèmes de suivi de la performance",
          ],
        },
      },
    ],
    experienceHighlights: {
      en: [
        "Led competitive RFP cycles for capital and operational initiatives, ensuring cost control and vendor accountability.",
        "Managed capital budget planning and financial forecasting for major investment projects.",
        "Coordinated cross-functional teams across finance, procurement, engineering, and executive leadership.",
        "Conducted financial investigations and regulatory compliance analysis within federal systems.",
        "Developed performance dashboards and data validation frameworks to support executive decision-making.",
        "Implemented process improvements that enhanced operational transparency and execution efficiency.",
      ],
      fr: [
        "Dirigé des cycles d'appels d'offres compétitifs pour des initiatives d'investissement et opérationnelles, assurant le contrôle des coûts et la responsabilité des fournisseurs.",
        "Géré la planification du budget d'investissement et les prévisions financières pour des projets d'investissement majeurs.",
        "Coordonné des équipes interfonctionnelles dans les domaines de la finance, de l'approvisionnement, de l'ingénierie et de la direction exécutive.",
        "Mené des enquêtes financières et des analyses de conformité réglementaire au sein de systèmes fédéraux.",
        "Développé des tableaux de bord de performance et des cadres de validation des données pour soutenir la prise de décision exécutive.",
        "Mis en œuvre des améliorations de processus qui ont renforcé la transparence opérationnelle et l'efficacité d'exécution.",
      ],
    },
    differentiators: {
      en: [
        "Bilingual Executive Communication (English/French)",
        "Federal, Corporate & Global Supply Chain Experience",
        "Integrated Finance + Procurement + Project Expertise",
        "Structured Governance & Compliance Discipline",
        "Data-Driven Decision Support",
      ],
      fr: [
        "Communication Exécutive Bilingue (Anglais/Français)",
        "Expérience Fédérale, Corporative et Chaîne d'Approvisionnement Mondiale",
        "Expertise Intégrée Finance + Approvisionnement + Projet",
        "Discipline Structurée de Gouvernance et Conformité",
        "Aide à la Décision Basée sur les Données",
      ],
    },
    education: [
      {
        degree: { en: "MBA", fr: "MBA" },
        institution: "George Washington University – Washington DC",
      },
      {
        degree: {
          en: "B.A., Business Administration",
          fr: "Licence en Administration des Affaires",
        },
        institution: "Strayer University – Washington DC",
      },
      {
        degree: {
          en: "A.S., Computer Science",
          fr: "Diplôme en Informatique",
        },
        institution: "University of Birkhadem – Algiers",
      },
    ],
    certifications: ["Project Management Essentials Certification – Johnson County Community College"],
    technical: "Microsoft Office Suite, SAP, ERP systems, Salesforce, Microsoft Project",
  },
];
