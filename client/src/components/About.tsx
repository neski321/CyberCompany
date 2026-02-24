import { motion } from "framer-motion";
import { CheckCircle2, Linkedin } from "lucide-react";
import aboutImg from "@assets/generated_images/3d_glassmorphism_digital_shield_icon_on_dark_background.png";

const teamMembers = [
  {
    name: "Trixy Otieno",
    role: "Principal Security Consultant",
    linkedinUrl: "https://www.linkedin.com/in/trixy-otieno-ms-cissp-cisa-ceh-gcih-gsec-pcip-pmp-3a3a98238/",
  },
  {
    name: "Ami",
    role: "Senior Security Consultant",
    linkedinUrl: "https://linkedin.com/in/your-profile",
  },
];

export function About() {
  const benefits = [
    "Certified Ethical Hackers (CEH)",
    "CISSP & OSCP Certified Consultants",
    "ISO 27001 Compliance Experts",
    "24/7 dedicated support channels",
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50">
              <img 
                src={aboutImg} 
                alt="Cybersecurity Shield" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Guardians of the <span className="text-primary">Digital Realm</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are not just consultants; we are your strategic partners in defense. 
              In an era where data is the new currency, protecting your assets is non-negotiable. 
              Our team consists of elite security researchers and industry veterans dedicated to 
              staying one step ahead of cyber threats.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-display font-bold mb-6">Meet Our Consultants</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {teamMembers.map((member, i) => (
                  <motion.a
                    key={i}
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-white/5 hover:border-primary/30 hover:bg-card/70 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-white group-hover:text-primary transition-colors">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.role}</div>
                      <div className="text-xs text-primary mt-1 flex items-center gap-1">
                        View LinkedIn <Linkedin className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-card/50 rounded-xl border border-white/5 border-l-4 border-l-primary">
              <p className="italic text-muted-foreground">
                "Security is not a product, but a process. We build the process that secures your future."
              </p>
              <div className="mt-4 font-display font-bold text-white">— Chief Security Officer</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
