import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/lib/site-config";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function SEO({ title, description, path = "/", noIndex = false }: SEOProps) {
  const fullTitle = path === "/" ? `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}` : `${title} | ${SITE_CONFIG.name}`;
  const canonicalUrl = `${SITE_CONFIG.baseUrl}${path}`;
  const ogImage = `${SITE_CONFIG.baseUrl}/opengraph.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {noIndex && <meta name="robots" content="noindex, follow" />}
    </Helmet>
  );
}
