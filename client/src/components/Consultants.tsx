import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, ArrowRight, Shield, Award, Sparkles, UserCheck, Users } from "lucide-react";
import { consultantProfiles, localize, type ConsultantProfile } from "@/lib/consultant-profiles";
import { ConsultantProfileModal } from "@/components/ConsultantProfileModal";
import { useTranslation } from "react-i18next";

export function Consultants() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const [selectedProfile, setSelectedProfile] = useState<ConsultantProfile | null>(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const amiProfile = consultantProfiles.find((p) => p.name === "Aminata Kasse") || consultantProfiles[1];
  const teamProfile = consultantProfiles.find((p) => p.name === "Security Consultants") || consultantProfiles[0];

  const openProfile = (profile: ConsultantProfile) => {
    setSelectedProfile(profile);
    setProfileModalOpen(true);
  };

  return (
    <section id="consultants" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="decorative-blur absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="decorative-blur absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("consultants.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t("consultants.title")} <span className="text-primary">{t("consultants.title_accent")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("consultants.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* 1. Featured Executive Leadership Card (Aminata Kasse) */}
          {amiProfile && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <button
                type="button"
                onClick={() => openProfile(amiProfile)}
                className="w-full text-left group"
              >
                <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card/80 via-card/60 to-card/90 border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-xl shadow-primary/5">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/30 shadow-inner flex-shrink-0">
                          <UserCheck className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-1.5">
                            <Sparkles className="w-3 h-3" /> {lang === "fr" ? "Conseil Exécutif & Leadership" : "Executive Advisory & Leadership"}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-primary transition-colors">
                            {localize(amiProfile.codename, lang)}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {amiProfile.location && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            {localize(amiProfile.location, lang)}
                          </span>
                        )}
                        {amiProfile.languages?.map((lng, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {lng}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-base text-primary/90 font-medium mb-4">
                      {localize(amiProfile.role, lang)}
                    </p>

                    <p className="text-sm md:text-base text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                      {localize(amiProfile.executiveProfile, lang)}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        {lang === "fr" ? "Cybersécurité & Risque Numérique US-Afrique" : "U.S.–Africa Cybersecurity & Digital Risk"}
                      </span>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        <span>{t("consultants.view_profile")}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          )}

          {/* 2. Team Qualifications & Security Practice Block (Security Consultants) */}
          {teamProfile && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <button
                type="button"
                onClick={() => openProfile(teamProfile)}
                className="w-full text-left group"
              >
                <div className="relative p-8 md:p-10 rounded-3xl bg-card/40 border border-white/10 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 shadow-lg">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors flex-shrink-0">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-muted-foreground mb-1.5">
                            <Award className="w-3 h-3 text-primary" /> {lang === "fr" ? "Pratique de Sécurité & Qualifications" : "Security Practice & Qualifications"}
                          </div>
                          <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                            {localize(teamProfile.codename, lang)}
                          </h3>
                        </div>
                      </div>

                      <div className="text-sm text-primary font-medium bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl">
                        {localize(teamProfile.role, lang)}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {localize(teamProfile.executiveProfile, lang)}
                    </p>

                    {/* Certifications Badge Grid */}
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
                        {lang === "fr" ? "Certifications et Cadres Principaux :" : "Featured Credentials & Frameworks:"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {teamProfile.certifications?.map((cert, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-white/5 text-muted-foreground border border-white/10 group-hover:border-primary/20 transition-colors"
                          >
                            <ShieldCheck className="w-3 h-3 text-primary" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        ISO 27001 • PCI-DSS • CISSP • CISA • GRC
                      </span>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        <span>{lang === "fr" ? "Explorer les Qualifications & Certifications" : "Explore Qualifications & Certifications"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <ConsultantProfileModal
        profile={selectedProfile}
        open={profileModalOpen}
        onOpenChange={setProfileModalOpen}
      />
    </section>
  );
}

