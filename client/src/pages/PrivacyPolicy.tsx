import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Privacy <span className="text-primary">Policy</span>
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
                  <Shield className="w-6 h-6 text-primary" />
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  CyberGuard Consulting ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services. Please read this policy carefully to understand 
                  our practices regarding your personal data.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>Request a security assessment or consultation</li>
                      <li>Schedule a consultation</li>
                      <li>Contact us via email or our contact form</li>
                      <li>Subscribe to our newsletter or updates</li>
                    </ul>
                    <p className="mt-3 leading-relaxed">
                      This information may include your name, email address, phone number, company name, 
                      and any other information you choose to provide.
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      When you visit our website, we may automatically collect certain information about 
                      your device, including information about your web browser, IP address, time zone, 
                      and some of the cookies that are installed on your device.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">How We Use Your Information</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Respond to your inquiries and fulfill your requests</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, prevent, and address technical issues and security threats</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Data Protection & Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Data Sharing & Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong className="text-foreground">Access:</strong> Request access to your personal data</li>
                  <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong className="text-foreground">Objection:</strong> Object to processing of your personal data</li>
                  <li><strong className="text-foreground">Portability:</strong> Request transfer of your data</li>
                </ul>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@cyberguard.com" className="text-primary hover:underline">
                    privacy@cyberguard.com
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Cookies & Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and 
                  hold certain information. You can instruct your browser to refuse all cookies or to indicate 
                  when a cookie is being sent. However, if you do not accept cookies, you may not be able 
                  to use some portions of our website.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                  You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong>{" "}
                    <a href="mailto:privacy@cyberguard.com" className="text-primary hover:underline">
                      privacy@cyberguard.com
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

