import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, User, MapPin, ArrowRight, Shield } from "lucide-react";
import { consultantProfiles, type ConsultantProfile } from "@/lib/consultant-profiles";
import { ConsultantProfileModal } from "@/components/ConsultantProfileModal";

export function Consultants() {
  const [selectedProfile, setSelectedProfile] = useState<ConsultantProfile | null>(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

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
            <span className="text-sm font-medium text-primary">Expert Team</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Meet Our <span className="text-primary">Consultants</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of certified security professionals brings decades of combined experience 
            in protecting organizations from evolving cyber threats.
          </p>
        </motion.div>

        {/* Consultant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {consultantProfiles.map((consultant, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <button
                type="button"
                onClick={() => openProfile(consultant)}
                className="w-full text-left group"
              >
                <div className="relative p-8 rounded-2xl bg-card/60 border border-white/5 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 h-full">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Avatar and Info */}
                    <div className="flex items-start gap-5 mb-6">
                      {/* Large Avatar */}
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors flex-shrink-0">
                        {(consultant.executiveProfile || consultant.coreCapabilities) ? (
                          <User className="w-10 h-10 text-primary" />
                        ) : (
                          <Linkedin className="w-10 h-10 text-primary" />
                        )}
                      </div>
                      
                      {/* Name and Role */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors mb-1">
                          {consultant.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {consultant.role}
                        </p>
                        {consultant.location && (
                          <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            {consultant.location}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick info tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {consultant.languages?.map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {lang}
                        </span>
                      ))}
                      {consultant.certifications?.slice(0, 2).map((cert, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground border border-white/10"
                        >
                          {cert.length > 30 ? cert.substring(0, 30) + "..." : cert}
                        </span>
                      ))}
                      {consultant.linkedinUrl && !consultant.executiveProfile && (
                        <span className="px-3 py-1 text-xs rounded-full bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20">
                          LinkedIn Profile
                        </span>
                      )}
                    </div>

                    {/* Executive Summary Preview */}
                    {consultant.executiveProfile && (
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                        {consultant.executiveProfile}
                      </p>
                    )}

                    {/* View Profile Link */}
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      <span>View Full Profile</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
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
