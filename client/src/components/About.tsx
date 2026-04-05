import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@assets/generated_images/3d_glassmorphism_digital_shield_icon_on_dark_background.webp";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const benefits = t("about.benefits", { returnObjects: true }) as string[];

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
                loading="lazy"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="decorative-blur absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="decorative-blur absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              {t("about.title")} <span className="text-primary">{t("about.title_accent")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("about.subtitle")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-card/50 rounded-xl border border-white/5 border-l-4 border-l-primary">
              <p className="italic text-muted-foreground">
                "{t("about.quote")}"
              </p>
              <div className="mt-4 font-display font-bold text-white">— {t("about.quote_author")}</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
