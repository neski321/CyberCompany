import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-white/10 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-lg">CYBERGUARD</span>
          </div>
          
          <div className="flex gap-6 text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/security" className="hover:text-primary transition-colors">Security</a>
          </div>

          <div className="text-muted-foreground">
            © {new Date().getFullYear()} CyberGuard Consulting. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
