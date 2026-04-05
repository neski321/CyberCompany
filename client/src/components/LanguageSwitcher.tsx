import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en" || i18n.language.startsWith("en-");

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "fr" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm cursor-pointer overflow-hidden hover:border-primary/50 transition-all duration-300 group"
      aria-label={isEnglish ? "Switch to French" : "Passer en anglais"}
      title={isEnglish ? "Switch to French" : "Passer en anglais"}
    >
      {/* Sliding background indicator */}
      <motion.div
        className="absolute top-[2px] bottom-[2px] w-[46px] rounded-full bg-primary shadow-[0_0_12px_rgba(6,182,212,0.5)]"
        animate={{ left: isEnglish ? "2px" : "calc(100% - 48px)" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* EN label */}
      <span
        className={`relative z-10 flex items-center justify-center w-[46px] h-full text-sm font-bold tracking-wide transition-colors duration-200 ${
          isEnglish ? "text-white" : "text-white/50 group-hover:text-white/70"
        }`}
      >
        EN
      </span>

      {/* Divider */}
      <span className="relative z-10 w-px h-4 bg-white/20" />

      {/* FR label */}
      <span
        className={`relative z-10 flex items-center justify-center w-[46px] h-full text-sm font-bold tracking-wide transition-colors duration-200 ${
          !isEnglish ? "text-white" : "text-white/50 group-hover:text-white/70"
        }`}
      >
        FR
      </span>
    </button>
  );
};
