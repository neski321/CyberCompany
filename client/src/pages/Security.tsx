import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Server, Eye, CheckCircle2, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function Security() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={t("security_page.seo_title")}
        description={t("security_page.seo_description")}
        path="/security"
      />
      <Navbar />
      
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t("security_page.title")} <span className="text-primary">{t("security_page.title_accent")}</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {t("security_page.subtitle")}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Overview */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("security_page.commitment_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("security_page.commitment_text")}
                </p>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  {t("security_page.data_protection_title")}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t("security_page.encryption_title")}</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {(t("security_page.encryption_items", { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">{t("security_page.access_title")}</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {(t("security_page.access_items", { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure Security */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <Server className="w-6 h-6 text-primary" />
                  {t("security_page.infrastructure_title")}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t("security_page.network_title")}</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {(t("security_page.network_items", { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">{t("security_page.hardening_title")}</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {(t("security_page.hardening_items", { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monitoring & Detection */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  {t("security_page.monitoring_title")}
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t("security_page.monitoring_items", { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Incident Response */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  {t("security_page.incident_title")}
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    {t("security_page.incident_text")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t("security_page.incident_items", { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Compliance & Certifications */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("security_page.compliance_title")}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    {t("security_page.compliance_text")}
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t("security_page.compliance_items", { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Employee Security */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("security_page.employee_title")}</h2>
                <div className="space-y-3 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {(t("security_page.employee_items", { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("security_page.retention_title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("security_page.retention_text")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {(t("security_page.retention_items", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Third-Party Security */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("security_page.third_party_title")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("security_page.third_party_text")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {(t("security_page.third_party_items", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Security Updates */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">{t("security_page.updates_title")}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("security_page.updates_text")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                  {(t("security_page.updates_items", { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Reporting Security Issues */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  {t("security_page.reporting_title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("security_page.reporting_text")}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">{t("security_page.security_email_label")}</strong>{" "}
                    <a href="mailto:security@riskwiseglobalconsulting.com" className="text-primary hover:underline">
                      security@riskwiseglobalconsulting.com
                    </a>
                  </p>
                  <p className="mt-4 leading-relaxed">
                    {t("security_page.reporting_footer")}
                  </p>
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
