import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t, i18n } = useTranslation();
  const dateLocale = i18n.language === "fr" ? "fr-FR" : "en-US";
  const formattedDate = new Date().toLocaleDateString(dateLocale, { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={t("terms_page.seo_title")}
        description={t("terms_page.seo_description")}
        path="/terms-of-service"
      />
      <Navbar />
      
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t("terms_page.title")} <span className="text-primary">{t("terms_page.title_accent")}</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {t("terms_page.last_updated", { date: formattedDate })}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  {t("terms_page.agreement_title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("terms_page.agreement_text")}
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("terms_page.services_title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("terms_page.services_text")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {(t("terms_page.services_items", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t("terms_page.services_extra")}
                </p>
              </CardContent>
            </Card>

            {/* Use of Services */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("terms_page.use_title")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t("terms_page.permitted_title")}</h3>
                    <p className="leading-relaxed">
                      {t("terms_page.permitted_text")}
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                      {(t("terms_page.permitted_items", { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("terms_page.ip_title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("terms_page.ip_text1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("terms_page.ip_text2")}
                </p>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("terms_page.confidentiality_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("terms_page.confidentiality_text")}
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  {t("terms_page.liability_title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("terms_page.liability_text1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("terms_page.liability_text2")}
                </p>
              </CardContent>
            </Card>

            {/* Warranties */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("terms_page.warranties_title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("terms_page.warranties_text")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {(t("terms_page.warranties_items", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("terms_page.indemnification_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("terms_page.indemnification_text")}
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("terms_page.termination_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("terms_page.termination_text")}
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("terms_page.governing_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("terms_page.governing_text")}
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("terms_page.changes_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("terms_page.changes_text")}
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  {t("terms_page.contact_title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("terms_page.contact_text")}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">{t("terms_page.email_label")}</strong>{" "}
                    <a href="mailto:legal@riskwiseglobalconsulting.com" className="text-primary hover:underline">
                      legal@riskwiseglobalconsulting.com
                    </a>
                  </p>
                  <p><strong className="text-foreground">{t("terms_page.address_label")}</strong> {t("terms_page.address_value")}</p>
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
