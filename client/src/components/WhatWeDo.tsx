import { useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  FileCheck, 
  Users, 
  ShieldCheck,
  Search,
  FileText,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export function WhatWeDo() {
  const { t } = useTranslation();

  const methodologies = useMemo(() => [
    {
      icon: Target,
      title: t("whatwedo.methodologies.risk.title"),
      description: t("whatwedo.methodologies.risk.description"),
    },
    {
      icon: FileCheck,
      title: t("whatwedo.methodologies.auditing.title"),
      description: t("whatwedo.methodologies.auditing.description"),
    },
    {
      icon: Users,
      title: t("whatwedo.methodologies.training.title"),
      description: t("whatwedo.methodologies.training.description"),
    },
    {
      icon: ShieldCheck,
      title: t("whatwedo.methodologies.planning.title"),
      description: t("whatwedo.methodologies.planning.description"),
    },
  ], [t]);

  const approach = useMemo(() => [
    {
      icon: Search,
      title: t("whatwedo.approaches.governance.title"),
      description: t("whatwedo.approaches.governance.description"),
    },
    {
      icon: FileText,
      title: t("whatwedo.approaches.tailored.title"),
      description: t("whatwedo.approaches.tailored.description"),
    },
    {
      icon: CheckCircle2,
      title: t("whatwedo.approaches.evidence.title"),
      description: t("whatwedo.approaches.evidence.description"),
    },
  ], [t]);

  const process = useMemo(() => [
    {
      step: "01",
      title: t("whatwedo.processes.step1.title"),
      description: t("whatwedo.processes.step1.description"),
    },
    {
      step: "02",
      title: t("whatwedo.processes.step2.title"),
      description: t("whatwedo.processes.step2.description"),
    },
    {
      step: "03",
      title: t("whatwedo.processes.step3.title"),
      description: t("whatwedo.processes.step3.description"),
    },
    {
      step: "04",
      title: t("whatwedo.processes.step4.title"),
      description: t("whatwedo.processes.step4.description"),
    },
  ], [t]);

  return (
    <section id="what-we-do" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="decorative-blur absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="decorative-blur absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t("whatwedo.title")} <span className="text-primary">{t("whatwedo.title_accent")}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("whatwedo.subtitle")}
          </p>
        </motion.div>

        {/* Our Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
            {t("whatwedo.methodology_title")} <span className="text-primary">{t("whatwedo.methodology_accent")}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-display">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {method.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
            {t("whatwedo.approach_title")} <span className="text-primary">{t("whatwedo.approach_accent")}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-display">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
            {t("whatwedo.process_title")} <span className="text-primary">{t("whatwedo.process_accent")}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" style={{ width: 'calc(100% - 2rem)' }} />
                )}
                <Card className="bg-card/30 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] relative z-10">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-2xl font-display font-bold text-primary">{step.step}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-display">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold mb-4">
              {t("whatwedo.cta_title")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("whatwedo.cta_subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] px-8 py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {t("whatwedo.cta_button")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


