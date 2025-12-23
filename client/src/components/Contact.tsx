import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-card/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to <span className="text-primary">Secure Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't wait for a breach to happen. Contact us today for a confidential consultation 
            regarding your security posture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:secure@cyberguard.com" className="flex flex-col items-center gap-4 group p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">secure@cyberguard.com</p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-4 group p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Global HQ</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 group p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Emergency</h3>
                <p className="text-muted-foreground">+1 (888) SECURE-IT</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full md:w-auto min-w-[200px] h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Schedule Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
