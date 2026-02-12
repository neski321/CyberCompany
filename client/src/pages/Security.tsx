import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Server, Eye, CheckCircle2, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Security() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Security Practices"
        description="Learn how CyberGuard Consulting protects your data with industry-leading security practices, encryption, and compliance standards."
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
              Security <span className="text-primary">Practices</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              How we protect your data and maintain the highest security standards
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Overview */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Our Security Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At CyberGuard Consulting, security is not just our business—it's our foundation. We implement 
                  industry-leading security practices to protect your information and maintain the trust you place 
                  in us. This page outlines our security measures and practices.
                </p>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  Data Protection
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Encryption</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>All data in transit is encrypted using TLS 1.3</li>
                      <li>Sensitive data at rest is encrypted using AES-256</li>
                      <li>End-to-end encryption for confidential communications</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Access Controls</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Multi-factor authentication (MFA) required for all staff</li>
                      <li>Role-based access control (RBAC) with principle of least privilege</li>
                      <li>Regular access reviews and audits</li>
                      <li>Secure credential management and rotation</li>
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
                  Infrastructure Security
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Network Security</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Firewall protection and network segmentation</li>
                      <li>Intrusion detection and prevention systems (IDS/IPS)</li>
                      <li>DDoS protection and mitigation</li>
                      <li>Regular security assessments and penetration testing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">System Hardening</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Regular security patches and updates</li>
                      <li>Hardened system configurations</li>
                      <li>Vulnerability scanning and remediation</li>
                      <li>Secure configuration management</li>
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
                  Monitoring & Threat Detection
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>24/7 Security Operations Center (SOC) monitoring</li>
                    <li>Real-time threat detection and analysis</li>
                    <li>Security Information and Event Management (SIEM)</li>
                    <li>Automated alerting and incident response</li>
                    <li>Regular security log reviews and analysis</li>
                    <li>Threat intelligence integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Incident Response */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Incident Response
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    We maintain a comprehensive incident response plan that includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Rapid detection and containment procedures</li>
                    <li>Dedicated incident response team</li>
                    <li>Forensic investigation capabilities</li>
                    <li>Communication protocols for affected parties</li>
                    <li>Post-incident review and improvement processes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Compliance & Certifications */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Compliance & Certifications</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    We adhere to industry standards and best practices:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>ISO 27001 Information Security Management</li>
                    <li>SOC 2 Type II compliance</li>
                    <li>GDPR compliance for data protection</li>
                    <li>Regular third-party security audits</li>
                    <li>Continuous compliance monitoring</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Employee Security */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Employee Security Practices</h2>
                <div className="space-y-3 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Background checks for all employees</li>
                    <li>Regular security awareness training</li>
                    <li>Phishing simulation and testing</li>
                    <li>Clear security policies and procedures</li>
                    <li>Confidentiality agreements and NDAs</li>
                    <li>Secure remote work practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Data Retention & Disposal</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We retain your data only for as long as necessary to provide our services and comply with 
                  legal obligations. When data is no longer needed:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Secure deletion using industry-standard methods</li>
                  <li>Physical destruction of storage media when applicable</li>
                  <li>Documented data disposal procedures</li>
                  <li>Compliance with data retention requirements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third-Party Security */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Third-Party Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We carefully vet all third-party vendors and service providers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Security assessments of vendors</li>
                  <li>Contractual security requirements</li>
                  <li>Regular vendor security reviews</li>
                  <li>Incident notification requirements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security Updates */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4">Security Updates & Improvements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Security is an ongoing process. We continuously:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                  <li>Monitor emerging threats and vulnerabilities</li>
                  <li>Update our security practices and technologies</li>
                  <li>Conduct regular security assessments</li>
                  <li>Implement improvements based on industry best practices</li>
                  <li>Participate in security research and information sharing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Reporting Security Issues */}
            <Card className="bg-card/30 backdrop-blur-sm border-white/5 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Reporting Security Issues
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you discover a security vulnerability or have concerns about our security practices, 
                  please report it to us immediately:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Security Email:</strong>{" "}
                    <a href="mailto:security@cyberguard.com" className="text-primary hover:underline">
                      security@cyberguard.com
                    </a>
                  </p>
                  <p className="mt-4 leading-relaxed">
                    We take all security reports seriously and will investigate promptly. We appreciate 
                    responsible disclosure and will work with security researchers to address any issues.
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

