import { useEffect } from "react";
import { SITE_CONFIG } from "@/lib/site-config";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

function setOrUpdateMeta(
  attrKey: "name" | "property",
  attrValue: string,
  content: string
) {
  let el = document.querySelector(`meta[${attrKey}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrKey, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function SEO({ title, description, path = "/", noIndex = false }: SEOProps) {
  const fullTitle = path === "/" ? `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}` : `${title} | ${SITE_CONFIG.name}`;
  const canonicalUrl = `${SITE_CONFIG.baseUrl}${path}`;
  const ogImage = `${SITE_CONFIG.baseUrl}/opengraph.jpg`;

  useEffect(() => {
    document.title = fullTitle;

    setOrUpdateMeta("name", "description", description);
    setCanonical(canonicalUrl);

    setOrUpdateMeta("property", "og:title", fullTitle);
    setOrUpdateMeta("property", "og:description", description);
    setOrUpdateMeta("property", "og:url", canonicalUrl);
    setOrUpdateMeta("property", "og:image", ogImage);

    setOrUpdateMeta("name", "twitter:title", fullTitle);
    setOrUpdateMeta("name", "twitter:description", description);
    setOrUpdateMeta("name", "twitter:image", ogImage);

    if (noIndex) {
      setOrUpdateMeta("name", "robots", "noindex, follow");
    } else {
      setOrUpdateMeta("name", "robots", "index, follow");
    }
  }, [fullTitle, description, canonicalUrl, ogImage, noIndex]);

  return null;
}
