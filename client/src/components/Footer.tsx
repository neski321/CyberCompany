import { Link } from "wouter";
import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-12 bg-background border-t border-white/10 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-lg">RISKWISE GLOBAL CONSULTING</span>
          </div>
          
          <div className="flex gap-6 text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/security" className="hover:text-primary transition-colors">
              {t("footer.security")}
            </Link>
          </div>

          <div className="text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>
        </div>
      </div>
    </footer>
  );
}
