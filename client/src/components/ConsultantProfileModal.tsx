import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Languages,
  CheckCircle2,
  GraduationCap,
  Award,
  Briefcase,
  Sparkles,
  X,
  ExternalLink,
  User,
} from "lucide-react";
import type { ConsultantProfile } from "@/lib/consultant-profiles";

interface ConsultantProfileModalProps {
  profile: ConsultantProfile | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultantProfileModal({
  profile,
  open,
  onOpenChange,
}: ConsultantProfileModalProps) {
  if (!profile) return null;

  const hasFullProfile =
    profile.executiveProfile ||
    profile.coreCapabilities?.length ||
    profile.experienceHighlights?.length;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
            onClick={() => onOpenChange(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-4xl sm:max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="decorative-blur absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="decorative-blur absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            </div>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 transition-all group"
              aria-label="Close profile"
            >
              <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>

            <div className="relative h-full max-h-[calc(100dvh-2rem)] sm:max-h-[90vh] overflow-y-auto">
              {/* Hero Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative px-6 sm:px-10 pt-8 sm:pt-12 pb-8 border-b border-white/10 bg-gradient-to-b from-primary/5 to-transparent"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/20">
                      <User className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
                    </div>
                    <div
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </motion.div>

                  {/* Name & Role */}
                  <div className="flex-1 min-w-0">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white text-glow"
                    >
                      {profile.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                      className="text-lg sm:text-xl text-primary font-medium mt-1"
                    >
                      {profile.role}
                    </motion.p>

                    {/* Contact badges */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2 sm:gap-3 mt-4"
                    >
                      {profile.location && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          {profile.location}
                        </span>
                      )}
                      {profile.languages?.length && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
                          <Languages className="w-3.5 h-3.5 text-primary" />
                          {profile.languages.join(" / ")}
                        </span>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Quick contact actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3 mt-6"
                >
                  {profile.contact?.email && (
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  )}
                  {profile.contact?.phone && (
                    <a
                      href={`tel:${profile.contact.phone.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground font-medium text-sm hover:bg-white/10 hover:border-primary/30 transition-all hover:scale-105 active:scale-95"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      {profile.contact.phone}
                    </a>
                  )}
                  {profile.linkedinUrl && (
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground font-medium text-sm hover:bg-white/10 hover:border-primary/30 transition-all hover:scale-105 active:scale-95"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                  )}
                </motion.div>
              </motion.div>

              {/* Content sections */}
              <div className="px-6 sm:px-10 py-8 space-y-8">
                {/* Executive Profile */}
                {profile.executiveProfile && (
                  <ProfileSection
                    icon={Briefcase}
                    title="Executive Profile"
                    delay={0.1}
                  >
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {profile.executiveProfile}
                    </p>
                  </ProfileSection>
                )}

                {/* Core Capabilities */}
                {profile.coreCapabilities?.map((cap, i) => (
                  <ProfileSection
                    key={i}
                    icon={Sparkles}
                    title={cap.title}
                    delay={0.15 + i * 0.05}
                  >
                    <div className="grid sm:grid-cols-2 gap-2">
                      {cap.items.map((item, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + j * 0.05 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/20 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </ProfileSection>
                ))}

                {/* Experience Highlights */}
                {profile.experienceHighlights?.length && (
                  <ProfileSection
                    icon={Briefcase}
                    title="Professional Experience Highlights"
                    delay={0.2}
                  >
                    <div className="space-y-3">
                      {profile.experienceHighlights.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.35 + i * 0.05 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border-l-2 border-primary/50"
                        >
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </ProfileSection>
                )}

                {/* Differentiators */}
                {profile.differentiators?.length && (
                  <ProfileSection
                    icon={CheckCircle2}
                    title="Key Differentiators"
                    delay={0.25}
                  >
                    <div className="flex flex-wrap gap-3">
                      {profile.differentiators.map((item, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </ProfileSection>
                )}

                {/* Education & Certifications Grid */}
                {(profile.education?.length || profile.certifications?.length) && (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {profile.education?.length && (
                      <ProfileSection
                        icon={GraduationCap}
                        title="Education"
                        delay={0.3}
                        compact
                      >
                        <div className="space-y-3">
                          {profile.education.map((edu, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.45 + i * 0.05 }}
                              className="p-3 rounded-lg bg-white/5 border border-white/5"
                            >
                              <div className="font-medium text-foreground text-sm">{edu.degree}</div>
                              <div className="text-xs text-muted-foreground mt-1">{edu.institution}</div>
                            </motion.div>
                          ))}
                        </div>
                      </ProfileSection>
                    )}

                    {profile.certifications?.length && (
                      <ProfileSection
                        icon={Award}
                        title="Certifications"
                        delay={0.35}
                        compact
                      >
                        <div className="space-y-2">
                          {profile.certifications.map((cert, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + i * 0.05 }}
                              className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5"
                            >
                              <Award className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{cert}</span>
                            </motion.div>
                          ))}
                        </div>
                      </ProfileSection>
                    )}
                  </div>
                )}

                {/* Technical Skills */}
                {profile.technical && (
                  <ProfileSection
                    icon={Briefcase}
                    title="Technical Proficiencies"
                    delay={0.4}
                  >
                    <div className="flex flex-wrap gap-2">
                      {profile.technical.split(", ").map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.55 + i * 0.03 }}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-muted-foreground font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </ProfileSection>
                )}

                {/* LinkedIn CTA for profiles without full info */}
                {!hasFullProfile && profile.linkedinUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center pt-4"
                  >
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-105 active:scale-95"
                    >
                      <Linkedin className="w-5 h-5" />
                      View Full Profile on LinkedIn
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Reusable section component
function ProfileSection({
  icon: Icon,
  title,
  children,
  delay = 0,
  compact = false,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  delay?: number;
  compact?: boolean;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className={`flex items-center gap-3 ${compact ? "mb-3" : "mb-4"}`}>
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h4 className="text-sm font-display font-bold text-foreground uppercase tracking-wider">
          {title}
        </h4>
      </div>
      {children}
    </motion.section>
  );
}
