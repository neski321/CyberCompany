export interface ConsultantProfile {
  name: string;
  codename: Record<string, string>;
  role: Record<string, string>;
  location?: Record<string, string>;
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
    name: "Security Consultants",
    codename: {
      en: "Security Consultants",
      fr: "Consultants en Sécurité",
    },
    role: {
      en: "Our Security Consultants have the following qualifications",
      fr: "Nos consultants en sécurité possèdent les qualifications suivantes",
    },
    location: {
      en: "Overland Park, Kansas",
      fr: "Overland Park, Kansas",
    },
    languages: ["English"],
    executiveProfile: {
      en: "Seasoned cybersecurity and GRC team with over 9 years of experience designing, implementing, and managing enterprise security programs across global organizations. Specialized in building and maturing security programs from the ground up, establishing risk management frameworks, and driving audit readiness across complex, multi-entity environments. Delivers practical, scalable solutions that align deep technical security with strategic business objectives.",
      fr: "Équipe expérimentée de la cybersécurité et de la GRC avec plus de 9 ans d'expérience dans la conception, la mise en œuvre et la gestion de programmes de sécurité d'entreprise au sein d'organisations mondiales. Spécialisée dans la création et la maturation de programmes de sécurité à partir de zéro, l'établissement de cadres de gestion des risques et la préparation aux audits dans des environnements multi-entités complexes.",
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
    codename: {
      en: "Aminata Kasse",
      fr: "Aminata Kasse",
    },
    role: {
      en: "Cybersecurity Governance, Business Resilience & Digital Risk Advisor",
      fr: "Conseillère en Gouvernance Cyber, Résilience et Risques Numériques",
    },
    location: {
      en: "Overland Park, Kansas",
      fr: "Overland Park, Kansas",
    },
    languages: ["English", "French"],
    executiveProfile: {
      en: "Cybersecurity Governance. Business Resilience. Global Perspective.\n\nHelping organizations across the U.S. and Africa manage cyber risk, strengthen governance, and protect what matters most.\n\nAminata Kasse is a strategic business and cybersecurity risk professional with experience spanning federal, multinational, and corporate environments. She brings a multidisciplinary background in project management, financial oversight, procurement, compliance, vendor governance, and operational risk to the evolving challenges of cybersecurity.\n\nRecognizing that cybersecurity is not only a technology issue but a business imperative, Aminata focuses on helping organizations build stronger governance structures, identify and manage cyber and third-party risks, improve compliance readiness, and integrate cybersecurity into broader business strategy.\n\nHer approach is particularly valuable to organizations operating in or expanding between the United States and Africa, where navigating different regulatory environments, business practices, technologies, and risk landscapes requires both strategic perspective and disciplined execution.",
      fr: "Gouvernance de la cybersécurité. Résilience des entreprises. Perspective mondiale.\n\nAide les organisations aux États-Unis et en Afrique à gérer les risques cybernétiques, à renforcer la gouvernance et à protéger ce qui compte le plus.\n\nAminata Kasse est une professionnelle stratégique de la gestion des risques d'entreprise et de la cybersécurité, possédant une expérience dans des environnements fédéraux, multinationaux et d'entreprise. Elle apporte un parcours multidisciplinaire en gestion de projet, surveillance financière, approvisionnement, conformité, gouvernance des fournisseurs et risque opérationnel aux défis évolutifs de la cybersécurité.\n\nReconnaissant que la cybersécurité n'est pas seulement un problème technologique mais un impératif d'entreprise, Aminata aide les organisations à renforcer leurs structures de gouvernance, à identifier et gérer les risques cybernétiques et des tiers, à améliorer la préparation à la conformité et à intégrer la cybersécurité dans leur stratégie globale.\n\nSon approche est particulièrement précieuse pour les organisations opérant entre les États-Unis et l'Afrique ou s'y développant, où la navigation dans différents environnements réglementaires, pratiques commerciales, technologies et paysages de risques exige à la fois une perspective stratégique et une exécution disciplinée.",
    },
    coreCapabilities: [
      {
        title: {
          en: "Cybersecurity Governance & Risk Advisory",
          fr: "Gouvernance Cyber et Conseil en Risques",
        },
        items: {
          en: [
            "Cybersecurity Governance & GRC: Establishing policies, governance structures, controls, accountability, and risk-management practices aligned with business objectives.",
            "Cyber Risk Assessments: Identifying organizational vulnerabilities and business risks to help leadership prioritize practical risk-reduction strategies.",
            "Executive Cyber Risk Advisory: Translating complex cybersecurity and operational risks into clear business priorities that executives and decision-makers can act upon.",
          ],
          fr: [
            "Gouvernance Cyber & GRC : Établissement de politiques, structures de gouvernance, contrôles et pratiques de gestion des risques alignés sur les objectifs commerciaux.",
            "Évaluations des risques cyber : Identification des vulnérabilités et risques commerciaux pour prioriser des stratégies pratiques de réduction des risques.",
            "Conseil exécutive en risques cyber : Traduction des risques complexes en priorités commerciales claires pour la prise de décision.",
          ],
        },
      },
      {
        title: {
          en: "Vendor Risk & Compliance Readiness",
          fr: "Risques Fournisseurs et Conformité",
        },
        items: {
          en: [
            "Third-Party & Vendor Cyber Risk: Evaluating cybersecurity and operational risks associated with suppliers, contractors, technology providers, and third parties.",
            "Compliance Readiness: Supporting organizations in strengthening documentation, internal controls, policies, and processes for regulatory, contractual, or industry requirements.",
          ],
          fr: [
            "Risques cybernétiques liés aux tiers et fournisseurs : Évaluation des risques associés aux fournisseurs, sous-traitants et prestataires technologiques.",
            "Préparation à la conformité : Renforcement de la documentation, des contrôles internes, des politiques et processus pour les exigences réglementaires ou contractuelles.",
          ],
        },
      },
      {
        title: {
          en: "Program Leadership & Operational Resilience",
          fr: "Gestion de Programme et Résilience Opérationnelle",
        },
        items: {
          en: [
            "Cybersecurity Program & Project Management: Providing structured leadership for cybersecurity initiatives, from planning and stakeholder coordination to implementation oversight, risk tracking, and executive reporting.",
            "Business Continuity & Operational Resilience: Helping organizations strengthen processes and preparedness to maintain critical operations and respond effectively to disruptions.",
          ],
          fr: [
            "Gestion de projets et programmes de cybersécurité : Leadership structuré de la planification aux rapports exécutifs et au suivi des risques.",
            "Continuité d'activité et résilience opérationnelle : Renforcement des processus et de la préparation pour maintenir les opérations critiques.",
          ],
        },
      },
    ],
    experienceHighlights: {
      en: [
        "U.S.–Africa Cybersecurity & Digital Risk Advisory: Helping businesses, institutions, NGOs, and organizations operating across the U.S.–Africa corridor strengthen cybersecurity governance while supporting responsible digital growth.",
        "Goal-Driven Execution: Making cybersecurity understandable, actionable, and aligned with business objectives.",
        "Integrated Expertise: Combining strategic thinking, governance, financial discipline, vendor oversight, and project execution to transition organizations from risk identification to effective management.",
        "Strategic Risk Advisory across federal, multinational, and corporate environments.",
      ],
      fr: [
        "Conseil en cybersécurité et risques numériques US-Afrique : Accompagnement des entreprises, institutions et ONG opérant sur le corridor US-Afrique pour renforcer la gouvernance cyber tout en soutenant une croissance numérique responsable.",
        "Exécution axée sur les objectifs : Rendre la cybersécurité compréhensible, actionnable et alignée sur la stratégie d'entreprise.",
        "Expertise intégrée : Combinaison de la pensée stratégique, de la gouvernance, de la discipline financière, de la surveillance des fournisseurs et de l'exécution des projets.",
        "Conseil stratégique en risques dans des environnements fédéraux, multinationaux et d'entreprise.",
      ],
    },
    differentiators: {
      en: [
        "U.S.–Africa Cybersecurity & Digital Risk Advisory",
        "Multidisciplinary Background: Project Management, Finance, Procurement & GRC",
        "Business-Aligned Risk Management Approach",
        "Third-Party & Vendor Cyber Risk Expertise",
        "Bilingual Executive Communication (English/French)",
      ],
      fr: [
        "Conseil en cybersécurité et risques numériques US-Afrique",
        "Parcours multidisciplinaire : Gestion de projet, finance, approvisionnement et GRC",
        "Approche de gestion des risques alignée sur l'entreprise",
        "Expertise des risques cybernétiques liés aux tiers et fournisseurs",
        "Communication exécutive bilingue (Anglais/Français)",
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
    technical: "GRC Frameworks, Third-Party Risk Management (TPRM), Cyber Risk Assessments, Compliance Readiness, Microsoft Office Suite, SAP, ERP systems, Salesforce, Microsoft Project",
  },
];
