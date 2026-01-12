import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileCheck, Users, TrendingUp, Search, ChevronDown, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Compliance & Risk Governance",
    description: "Build robust governance frameworks and navigate complex compliance requirements with confidence.",
    details: [
      "Strategic risk management program development",
      "Policy framework design and implementation",
      "Compliance readiness for NIST, ISO 27001, SOC 2, PCI-DSS, HIPAA, and CMMC",
      "Control environment assessment and optimization",
      "Regulatory gap analysis and remediation planning",
      "Ongoing compliance monitoring and reporting",
    ],
    deliverables: "GRC framework documentation, risk register, compliance roadmap, policy templates",
  },
  {
    icon: FileCheck,
    title: "Security Audits & Virtual CISO",
    description: "Independent security assessments and strategic security leadership tailored to your organization.",
    details: [
      "Comprehensive IT security audit and control testing",
      "Security posture evaluation and gap identification",
      "Virtual Chief Information Security Officer (vCISO) leadership",
      "Long-term security program development and maturity",
      "Risk management strategy and execution",
      "Board-level security reporting and communication",
    ],
    deliverables: "Audit findings report, vCISO engagement plan, security roadmap, executive briefings",
  },
  {
    icon: Users,
    title: "Security Training & Operations",
    description: "Strengthen your human and technical defenses through training and proactive vulnerability management.",
    details: [
      "Customized security awareness training programs",
      "Phishing simulation campaigns and education",
      "Vulnerability identification and assessment services",
      "Threat monitoring and remediation guidance",
      "Security culture development initiatives",
      "Ongoing security awareness metrics and reporting",
    ],
    deliverables: "Training curriculum, awareness campaign materials, vulnerability assessment report, progress metrics",
  },
  {
    icon: TrendingUp,
    title: "Cybersecurity Strategy & Advisory",
    description: "Strategic guidance and planning to align technology decisions with your security objectives.",
    details: [
      "Security program strategy and roadmap development",
      "Technology risk assessment and mitigation planning",
      "Security architecture review and recommendations",
      "Strategic planning for security investments",
      "Executive security briefings and decision support",
      "Vendor and technology evaluation guidance",
    ],
    deliverables: "Strategic security plan, technology recommendations, executive reports, decision frameworks",
  },
  {
    icon: Search,
    title: "Security Testing & Assessment",
    description: "Real-world attack simulations that validate your defenses and uncover exploitable weaknesses.",
    details: [
      "Network infrastructure penetration testing",
      "Web and mobile application security testing",
      "Cloud environment security assessments",
      "Social engineering and phishing simulations",
      "Manual exploit validation and impact analysis",
      "Detailed remediation guidance and verification testing",
    ],
    deliverables: "Penetration test report, executive summary, remediation recommendations, retest validation",
  },
];

export function Services() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const handleToggle = (clickedIndex: number) => {
    setOpenCardIndex((currentIndex) => {
      // If clicking the same card that's open, close it
      if (currentIndex === clickedIndex) {
        return null;
      }
      // Otherwise, open ONLY the clicked card
      return clickedIndex;
    });
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Transforming Vulnerabilities into <span className="text-primary">Security</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide comprehensive security solutions designed to strengthen your defenses, 
              manage risk, and achieve compliance while supporting your business objectives.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((service, index) => {
            // Use strict equality check - only this exact index should be open
            // Double-check: ensure openCardIndex is a number and matches this index exactly
            const isOpen = openCardIndex !== null && openCardIndex === index;
            const cardId = `service-card-${index}`;
            
            return (
              <motion.div
                key={cardId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] flex flex-col w-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col">
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>

                    <div className="w-full">
                      <Button
                        variant="ghost"
                        type="button"
                        className="w-full justify-between text-sm text-primary hover:text-primary/80 p-0 h-auto font-medium mb-4"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleToggle(index);
                        }}
                      >
                        <span>{isOpen ? "Hide Details" : "Learn More"}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </Button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            key={`content-${index}-${openCardIndex}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4 overflow-hidden mt-4"
                          >
                            <div>
                              <h4 className="text-sm font-semibold mb-2 text-foreground">
                                What's Included:
                              </h4>
                              <ul className="space-y-2">
                                {service.details.map((detail, i) => (
                                  <li key={`${index}-detail-${i}`} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="pt-2 border-t border-white/5">
                              <p className="text-xs text-muted-foreground">
                                <span className="font-semibold text-foreground">Deliverables: </span>
                                {service.deliverables}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Our experts can tailor a security program to your specific needs.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Get Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
