import { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Shield } from "lucide-react";
import { StaggeredMenu, type StaggeredMenuItem } from "@/components/StaggeredMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleHashNav = useCallback((href: string) => {
    const sectionId = href.replace("#", "");
    const currentPath = window.location.pathname;
    const onHomePage = currentPath === "/";

    if (onHomePage) {
      window.history.pushState(null, "", href);
      scrollToSection(sectionId);
    } else {
      setLocation("/");
      setTimeout(() => {
        window.history.pushState(null, "", href);
        scrollToSection(sectionId);
      }, 150);
    }
  }, [setLocation, scrollToSection]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const staggeredMenuItems: StaggeredMenuItem[] = useMemo(
    () => [
      ...navLinks.map((link) => ({
        label: link.name,
        ariaLabel: `Go to ${link.name}`,
        link: link.href,
        onClick: () => handleHashNav(link.href),
      })),
      {
        label: "Secure Your Assets",
        ariaLabel: "Contact us",
        link: "#contact",
        onClick: () => handleHashNav("#contact"),
      },
    ],
    [navLinks, handleHashNav]
  );

  const logoComponent = (
    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
      <Shield className="w-7 h-7 text-primary group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all" />
      <span className="font-display font-bold text-lg tracking-wide text-white whitespace-nowrap">
        RISKWISE GLOBAL CONSULTING
      </span>
    </Link>
  );

  return (
    <>
      {/* Desktop Nav - lg and up */}
      <nav
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all" />
              <span className="font-display font-bold text-lg sm:text-xl tracking-wide text-white whitespace-nowrap">
                RISKWISE GLOBAL CONSULTING
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-6 xl:gap-8 flex-1 justify-end ml-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleHashNav(link.href);
                }}
                className="text-sm font-bold text-white hover:text-primary transition-colors whitespace-nowrap cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => handleHashNav("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all px-4 xl:px-6 py-2 rounded-lg whitespace-nowrap text-sm xl:text-base"
            >
              Secure Your Assets
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile - StaggeredMenu */}
      <div className="lg:hidden">
        <StaggeredMenu
          position="right"
          items={staggeredMenuItems}
          displayItemNumbering={false}
          logoComponent={logoComponent}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen={false}
          colors={["#0f172a", "#1e293b", "#334155"]}
          accentColor="#06b6d4"
          isFixed={true}
          closeOnClickAway={true}
        />
      </div>
    </>
  );
}
