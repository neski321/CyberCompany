import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Search, Server, FileCode, Users, ChevronDown, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Rigorous ethical hacking to identify vulnerabilities before malicious actors do.",
    details: [
      "External and internal network penetration testing",
      "Web application security assessment",
      "Mobile application security testing",
      "Social engineering simulations",
      "Physical security assessments",
      "Detailed vulnerability reports with remediation guidance",
    ],
    deliverables: "Comprehensive penetration test report, executive summary, remediation roadmap",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive review of your infrastructure, compliance, and security policies.",
    details: [
      "ISO 27001 compliance assessment",
      "GDPR, HIPAA, PCI-DSS compliance reviews",
      "Security policy and procedure evaluation",
      "Access control and identity management audit",
      "Data protection and privacy assessment",
      "Third-party vendor security evaluation",
    ],
    deliverables: "Audit report, compliance gap analysis, policy recommendations",
  },
  {
    icon: Lock,
    title: "Incident Response",
    description: "24/7 rapid response team to contain and mitigate security breaches effectively.",
    details: [
      "24/7 Security Operations Center (SOC) monitoring",
      "Real-time threat detection and analysis",
      "Rapid containment and eradication procedures",
      "Forensic investigation and root cause analysis",
      "Business continuity planning",
      "Post-incident review and lessons learned",
    ],
    deliverables: "Incident response plan, forensic report, security hardening recommendations",
  },
  {
    icon: Server,
    title: "Network Defense",
    description: "Architecture design and implementation of fortified network perimeters.",
    details: [
      "Network architecture security design",
      "Firewall and intrusion detection system configuration",
      "Network segmentation and micro-segmentation",
      "DDoS protection and mitigation",
      "VPN and secure remote access setup",
      "Network monitoring and SIEM implementation",
    ],
    deliverables: "Network security architecture, implementation guide, monitoring dashboard",
  },
  {
    icon: FileCode,
    title: "Code Review",
    description: "Static and dynamic analysis of your application code to ensure secure development.",
    details: [
      "Static Application Security Testing (SAST)",
      "Dynamic Application Security Testing (DAST)",
      "Interactive Application Security Testing (IAST)",
      "Dependency vulnerability scanning",
      "Secure coding best practices review",
      "CI/CD pipeline security integration",
    ],
    deliverables: "Code review report, vulnerability findings, secure coding guidelines",
  },
  {
    icon: Users,
    title: "Staff Training",
    description: "Empower your team with the knowledge to recognize and prevent social engineering.",
    details: [
      "Phishing simulation and awareness training",
      "Security awareness workshops",
      "Secure coding training for developers",
      "Incident response team training",
      "Executive cybersecurity briefings",
      "Custom training programs tailored to your industry",
    ],
    deliverables: "Training materials, assessment reports, ongoing support resources",
  },
];

export function Services() {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setOpenCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
              Comprehensive <span className="text-primary">Protection</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our suite of cybersecurity services is designed to cover every attack vector, 
              ensuring your organization remains resilient in a hostile digital landscape.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isOpen = openCards.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>

                    <Collapsible open={isOpen} onOpenChange={() => toggleCard(index)}>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-sm text-primary hover:text-primary/80 p-0 h-auto font-medium"
                        >
                          <span>{isOpen ? "Hide Details" : "Learn More"}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 text-foreground">
                            What's Included:
                          </h4>
                          <ul className="space-y-2">
                            {service.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
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
                      </CollapsibleContent>
                    </Collapsible>
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
