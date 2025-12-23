import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Lock } from "lucide-react";
import heroBg from "@assets/generated_images/dark_abstract_cybersecurity_network_background_with_blue_neon_lines.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cybersecurity Network Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Elite Cyber Defense
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 max-w-4xl mx-auto"
        >
          Fortify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300 text-glow">Digital Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We provide enterprise-grade security consulting for businesses that refuse to compromise. 
          Proactive threat hunting, vulnerability assessment, and strategic defense.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[180px] h-12 text-base font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Start Assessment <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 hover:text-primary min-w-[180px] h-12 text-base backdrop-blur-sm">
            View Services
          </Button>
        </motion.div>

        {/* Stats / Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-8 max-w-4xl mx-auto"
        >
          {[
            { label: "Threats Blocked", value: "10k+" },
            { label: "Uptime Secured", value: "99.9%" },
            { label: "Clients Protected", value: "500+" },
            { label: "Global Reach", value: "24/7" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
