import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] sm:max-h-[85vh] h-[90dvh] sm:h-auto overflow-hidden flex flex-col bg-card border-white/10 w-[calc(100vw-2rem)] sm:w-full max-w-[calc(100vw-2rem)] sm:max-w-2xl">
        <DialogHeader className="flex-shrink-0 pb-4 border-b border-white/10">
          <DialogTitle className="text-xl sm:text-2xl font-display font-bold text-white pr-8">
            {profile.name}
          </DialogTitle>
          <p className="text-primary font-medium text-sm sm:text-base">{profile.role}</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mt-3 text-sm text-muted-foreground">
            {profile.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                {profile.location}
              </span>
            )}
            {profile.contact?.phone && (
              <a
                href={`tel:${profile.contact.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                {profile.contact.phone}
              </a>
            )}
            {profile.contact?.email && (
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-center gap-1.5 hover:text-primary transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                {profile.contact.email}
              </a>
            )}
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                LinkedIn
              </a>
            )}
            {profile.languages?.length && (
              <span className="flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-primary" />
                {profile.languages.join(" & ")}
              </span>
            )}
          </div>
        </DialogHeader>

        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-2 -mr-2 space-y-5 sm:space-y-6 mt-4 sm:mt-6 overscroll-contain pb-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
          {profile.executiveProfile && (
            <section>
              <h4 className="text-sm font-display font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Executive Profile
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {profile.executiveProfile}
              </p>
            </section>
          )}

          {profile.coreCapabilities?.map((cap, i) => (
            <section key={i}>
              <h4 className="text-sm font-display font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {cap.title}
              </h4>
              <ul className="space-y-2">
                {cap.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {profile.experienceHighlights?.length && (
            <section>
              <h4 className="text-sm font-display font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Professional Experience Highlights
              </h4>
              <ul className="space-y-2">
                {profile.experienceHighlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {profile.differentiators?.length && (
            <section>
              <h4 className="text-sm font-display font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Differentiators
              </h4>
              <ul className="space-y-2">
                {profile.differentiators.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {profile.education?.length && (
            <section>
              <h4 className="text-sm font-display font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h4>
              <ul className="space-y-2">
                {profile.education.map((edu, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{edu.degree}</span>
                    <span className="mx-2">–</span>
                    {edu.institution}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {profile.certifications?.length && (
            <section>
              <h4 className="text-sm font-display font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </h4>
              <ul className="space-y-1">
                {profile.certifications.map((cert, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {cert}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {profile.technical && (
            <section>
              <h4 className="text-sm font-display font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Technical
              </h4>
              <p className="text-sm text-muted-foreground">{profile.technical}</p>
            </section>
          )}

          {!hasFullProfile && profile.linkedinUrl && (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View full profile on LinkedIn
              <Linkedin className="w-4 h-4" />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
