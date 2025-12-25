import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  // Check if we're on home page - use both wouter location and window.location as fallback
  const isHomePage = location === "/" || window.location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to section after navigation to home page
  useEffect(() => {
    if (isHomePage) {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace("#", "");
        // Small delay to ensure page is rendered
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 200);
      }
    }
  }, [isHomePage, location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const sectionId = href.replace("#", "");
    setIsMobileMenuOpen(false);
    
    // Check current pathname directly (more reliable than state)
    const currentPath = window.location.pathname;
    const onHomePage = currentPath === "/";
    
    if (onHomePage) {
      // If on home page, just scroll to section and update hash
      window.history.pushState(null, "", href);
      scrollToSection(sectionId);
    } else {
      // If on another page, navigate to home first, then set hash and scroll
      setLocation("/");
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        window.history.pushState(null, "", href);
        scrollToSection(sectionId);
      }, 150);
    }
  };

  const handleContactClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsMobileMenuOpen(false);
    
    // Check current pathname directly (more reliable than state)
    const currentPath = window.location.pathname;
    const onHomePage = currentPath === "/";
    
    if (onHomePage) {
      window.history.pushState(null, "", "#contact");
      scrollToSection("contact");
    } else {
      setLocation("/");
      setTimeout(() => {
        window.history.pushState(null, "", "#contact");
        scrollToSection("contact");
      }, 150);
    }
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all" />
            <span className="font-display font-bold text-lg sm:text-xl tracking-wide text-white whitespace-nowrap">CYBERGUARD</span>
          </div>
        </Link>

        {/* Desktop Nav - Show on lg screens and up, with proper spacing */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-end ml-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(link.href, e)}
              className="text-sm font-bold text-white hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={handleContactClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all px-4 xl:px-6 py-2 rounded-lg whitespace-nowrap text-sm xl:text-base"
          >
            Secure Your Assets
          </button>
        </div>

        {/* Mobile/Tablet Toggle - Show on screens smaller than lg */}
        <button
          type="button"
          className="lg:hidden text-white flex-shrink-0 p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMobileMenuOpen((prev) => !prev);
          }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="text-lg font-bold text-white hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleContactClick}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-semibold mt-2"
              >
                Secure Your Assets
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
