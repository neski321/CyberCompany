/**
 * Site configuration for SEO and meta tags.
 * Set VITE_SITE_URL in your environment or .env for production.
 */
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://yourdomain.com";

export const SITE_CONFIG = {
  name: "RiskWise Global Consulting",
  tagline: "Elite Cybersecurity Consulting",
  baseUrl: typeof window !== "undefined" ? window.location.origin : SITE_URL,
} as const;
