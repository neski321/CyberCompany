import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const dateLocale = i18n.language === "fr" ? "fr-FR" : "en-US";
  const formattedDate = new Date().toLocaleDateString(dateLocale, { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={t("privacy_page.seo_title")}
        description={t("privacy_page.seo_description")}
        path="/privacy-policy"
      />
      <Navbar />
      
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t("privacy_page.title")} <span className="text-primary">{t("privacy_page.title_accent")}</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {t("privacy_page.last_updated", { date: formattedDate })}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  {t("privacy_page.intro_title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("privacy_page.intro_text")}
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  {t("privacy_page.info_collect_title")}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t("privacy_page.personal_info_title")}</h3>
                    <p className="leading-relaxed">
                      {t("privacy_page.personal_info_text")}
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      {(t("privacy_page.personal_info_items", { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="mt-3 leading-relaxed">
                      {t("privacy_page.personal_info_extra")}
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t("privacy_page.auto_info_title")}</h3>
                    <p className="leading-relaxed">
                      {t("privacy_page.auto_info_text")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("privacy_page.how_we_use_title")}</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    {t("privacy_page.how_we_use_text")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t("privacy_page.how_we_use_items", { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("privacy_page.data_protection_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("privacy_page.data_protection_text")}
                </p>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("privacy_page.data_sharing_title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("privacy_page.data_sharing_text")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {(t("privacy_page.data_sharing_items", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("privacy_page.your_rights_title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("privacy_page.your_rights_text")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong className="text-foreground">{t("privacy_page.rights_access")}</strong> {t("privacy_page.rights_access_desc")}</li>
                  <li><strong className="text-foreground">{t("privacy_page.rights_correction")}</strong> {t("privacy_page.rights_correction_desc")}</li>
                  <li><strong className="text-foreground">{t("privacy_page.rights_deletion")}</strong> {t("privacy_page.rights_deletion_desc")}</li>
                  <li><strong className="text-foreground">{t("privacy_page.rights_objection")}</strong> {t("privacy_page.rights_objection_desc")}</li>
                  <li><strong className="text-foreground">{t("privacy_page.rights_portability")}</strong> {t("privacy_page.rights_portability_desc")}</li>
                </ul>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t("privacy_page.rights_contact_text")}{" "}
                  <a href="mailto:privacy@riskwiseglobalconsulting.com" className="text-primary hover:underline">
                    privacy@riskwiseglobalconsulting.com
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("privacy_page.cookies_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("privacy_page.cookies_text")}
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("privacy_page.changes_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("privacy_page.changes_text")}
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("privacy_page.contact_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("privacy_page.contact_text")}
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">{t("privacy_page.email_label")}</strong>{" "}
                    <a href="mailto:privacy@riskwiseglobalconsulting.com" className="text-primary hover:underline">
                      privacy@riskwiseglobalconsulting.com
                    </a>
                  </p>
                  <p><strong className="text-foreground">{t("privacy_page.address_label")}</strong> {t("privacy_page.address_value")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
