import { motion } from "framer-motion";
import { Shield, Lock, Search, Server, FileCode, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Rigorous ethical hacking to identify vulnerabilities before malicious actors do.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive review of your infrastructure, compliance, and security policies.",
  },
  {
    icon: Lock,
    title: "Incident Response",
    description: "24/7 rapid response team to contain and mitigate security breaches effectively.",
  },
  {
    icon: Server,
    title: "Network Defense",
    description: "Architecture design and implementation of fortified network perimeters.",
  },
  {
    icon: FileCode,
    title: "Code Review",
    description: "Static and dynamic analysis of your application code to ensure secure development.",
  },
  {
    icon: Users,
    title: "Staff Training",
    description: "Empower your team with the knowledge to recognize and prevent social engineering.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Comprehensive <span className="text-primary">Protection</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our suite of cybersecurity services is designed to cover every attack vector, 
            ensuring your organization remains resilient in a hostile digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-colors duration-300 h-full group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
