import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Terms of Service"
        description="RiskWise Global Consulting terms of service. Read the terms governing your access to and use of our website and cybersecurity consulting services."
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
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") govern your access to and use of the RiskWise Global Consulting 
                  website and services. By accessing or using our website, you agree to be bound by these Terms. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  RiskWise Global Consulting provides cybersecurity consulting services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Security assessments and penetration testing</li>
                  <li>Compliance audits and consulting</li>
                  <li>Incident response services</li>
                  <li>Network security architecture</li>
                  <li>Application security reviews</li>
                  <li>Security training and awareness programs</li>
                </ul>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Specific services will be detailed in separate service agreements or statements of work.
                </p>
              </CardContent>
            </Card>

            {/* Use of Services */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Use of Services</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Permitted Use</h3>
                    <p className="leading-relaxed">
                      You may use our services only for lawful purposes and in accordance with these Terms. 
                      You agree not to use our services:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                      <li>In any way that violates any applicable law or regulation</li>
                      <li>To transmit any malicious code, viruses, or harmful data</li>
                      <li>To attempt to gain unauthorized access to our systems</li>
                      <li>To interfere with or disrupt our services or servers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, features, and functionality of our website and services, including but not limited 
                  to text, graphics, logos, and software, are owned by RiskWise Global Consulting and are protected 
                  by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You may not reproduce, distribute, modify, or create derivative works of our content without 
                  our express written permission.
                </p>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We understand the sensitive nature of security assessments and will maintain strict confidentiality 
                  regarding your information, systems, and any findings. All engagements are subject to appropriate 
                  non-disclosure agreements and confidentiality provisions as detailed in our service agreements.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, RISKWISE CONSEIL SHALL NOT BE LIABLE FOR ANY 
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS 
                  OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, 
                  OR OTHER INTANGIBLE LOSSES.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our total liability for any claims arising from or related to our services shall not exceed 
                  the amount paid by you to us in the twelve (12) months preceding the claim.
                </p>
              </CardContent>
            </Card>

            {/* Warranties */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Warranties & Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, either 
                  express or implied. We do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Our services will be uninterrupted, secure, or error-free</li>
                  <li>Any defects or errors will be corrected</li>
                  <li>Our services are free of viruses or other harmful components</li>
                </ul>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless RiskWise Global Consulting and its officers, 
                  directors, employees, and agents from and against any claims, liabilities, damages, losses, 
                  and expenses arising out of or in any way connected with your use of our services or violation 
                  of these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice, 
                  for any reason, including breach of these Terms. Upon termination, your right to use our 
                  services will cease immediately.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of 
                  Kansas, United States, without regard to its conflict of law provisions. Any disputes 
                  arising from these Terms shall be subject to the exclusive jurisdiction of the courts in 
                  Kansas City, Kansas.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of any changes 
                  by posting the new Terms on this page and updating the "Last updated" date. Your continued 
                  use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong>{" "}
                    <a href="mailto:legal@riskwiseglobalconsulting.com" className="text-primary hover:underline">
                      legal@riskwiseglobalconsulting.com
                    </a>
                  </p>
                  <p><strong className="text-foreground">Address:</strong> Kansas City, Kansas, United States</p>
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

