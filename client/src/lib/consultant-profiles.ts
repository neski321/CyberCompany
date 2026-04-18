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
    location: {
      en: "Overland Park, Kansas",
      fr: "Overland Park, Kansas",
    },
    languages: ["English"],
    linkedinUrl: "https://www.linkedin.com/in/trixy-otieno-ms-cissp-cisa-ceh-gcih-gsec-pcip-pmp-3a3a98238/",
    executiveProfile: {
      en: "Seasoned cybersecurity and GRC professional with over 9 years of experience designing, implementing, and managing enterprise security programs across global organizations. Specialized in building and maturing security programs from the ground up, establishing risk management frameworks, and driving audit readiness across complex, multi-entity environments. Delivers practical, scalable solutions that align deep technical security with strategic business objectives.",
      fr: "Professionnelle chevronnée de la cybersécurité et de la GRC avec plus de 9 ans d'expérience dans la conception, la mise en œuvre et la gestion de programmes de sécurité d'entreprise au sein d'organisations mondiales. Spécialisée dans la création et la maturation de programmes de sécurité à partir de zéro, l'établissement de cadres de gestion des risques et la préparation aux audits dans des environnements multi-entités complexes. Elle propose des solutions pratiques et évolutives qui alignent la sécurité technique approfondie avec les objectifs stratégiques de l'entreprise.",
    },
    coreCapabilities: [
      {
        title: {
          en: "GRC & Security Governance",
          fr: "GRC et Gouvernance de la Sécurité",
        },
        items: {
          en: [
            "Framework design & implementation",
            "Security program maturation",
            "Policy & procedure development",
            "Data governance & privacy",
            "Strategic security alignment",
          ],
          fr: [
            "Conception et mise en œuvre de cadres",
            "Maturation des programmes de sécurité",
            "Développement de politiques et procédures",
            "Gouvernance des données et confidentialité",
            "Alignement stratégique de la sécurité",
          ],
        },
      },
      {
        title: {
          en: "Risk & Compliance Management",
          fr: "Gestion des Risques et Conformité",
        },
        items: {
          en: [
            "Enterprise risk assessments",
            "Third-party risk management (TPRM)",
            "Compliance readiness (ISO, PCI-DSS, etc.)",
            "Control implementation & testing",
            "Regulatory gap analysis",
          ],
          fr: [
            "Évaluations des risques d'entreprise",
            "Gestion des risques liés aux tiers (TPRM)",
            "Préparation à la conformité (ISO, PCI-DSS, etc.)",
            "Mise en œuvre et tests de contrôles",
            "Analyse des écarts réglementaires",
          ],
        },
      },
      {
        title: {
          en: "Audit & Incident Readiness",
          fr: "Préparation aux Audits et Incidents",
        },
        items: {
          en: [
            "Audit readiness & management",
            "Incident handler oversight (GCIH)",
            "Operational security auditing",
            "Ethical hacking (CEH) insights",
            "Audit-ready security documentation",
          ],
          fr: [
            "Préparation et gestion des audits",
            "Supervision de la gestion des incidents (GCIH)",
            "Audit de la sécurité opérationnelle",
            "Aperçus du piratage éthique (CEH)",
            "Documentation de sécurité prête pour l'audit",
          ],
        },
      },
    ],
    experienceHighlights: {
      en: [
        "Led the design and management of global enterprise security programs from inception to maturity.",
        "Established practical risk management frameworks across complex IT and operational environments.",
        "Guided multi-entity organizations through rigorous compliance initiatives and audit preparations.",
        "Directed hands-on GRC activities including policy development and third-party risk oversight.",
        "Integrated security controls that balance technical defense with organizational scalability.",
        "Supported businesses in strengthening security posture through structured, defensible GRC processes.",
      ],
      fr: [
        "A dirigé la conception et la gestion de programmes de sécurité d'entreprise mondiaux, de la création à la maturité.",
        "Établi des cadres de gestion des risques pratiques dans des environnements informatiques et opérationnels complexes.",
        "Guidé des organisations multi-entités à travers des initiatives de conformité rigoureuses et des préparations aux audits.",
        "Dirigé des activités GRC concrètes, y compris le développement de politiques et la surveillance des risques liés aux tiers.",
        "Intégré des contrôles de sécurité qui équilibrent la défense technique avec l'évolutivité organisationnelle.",
        "Accompagné les entreprises dans le renforcement de leur posture de sécurité grâce à des processus GRC structurés et défendables.",
      ],
    },
    differentiators: {
      en: [
        "Practical, Risk-Driven Methodology",
        "Deep Multi-Entity Operational Experience",
        "Comprehensive Audit-Ready Approach",
        "Elite Certifications (CISSP, CISA, PMP)",
        "Bridging Technical Security & Business GRC",
      ],
      fr: [
        "Méthodologie pratique axée sur le risque",
        "Vaste expérience opérationnelle multi-entités",
        "Approche complète prête pour l'audit",
        "Certifications d'élite (CISSP, CISA, PMP)",
        "Lien entre sécurité technique et GRC d'entreprise",
      ],
    },
    education: [
      {
        degree: { en: "M.S.", fr: "M.S." },
        institution: "Information Assurance",
      },
    ],
    certifications: [
      "Certified Information Systems Security Professional (CISSP)",
      "Certified Information Systems Auditor (CISA)",
      "Payment Card Industry Professional (PCIP)",
      "GIAC Certified Incident Handler (GCIH)",
      "GIAC Security Essentials Certification (GSEC)",
      "Certified Ethical Hacker (CEH)",
      "ISO 27001:2013 Internal Auditor (TPECS)",
      "Project Management Professional (PMP)",
    ],
    technical: "GRC Frameworks, ISO 27001, PCI-DSS, Risk Management, Security Auditing, Incident Response",
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
