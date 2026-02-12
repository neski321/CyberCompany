import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

const PLACEHOLDER = "https://yourdomain.com";

function getSiteUrl(): string {
  return process.env.VITE_SITE_URL || PLACEHOLDER;
}

function replacePlaceholder(content: string, siteUrl: string): string {
  if (siteUrl === PLACEHOLDER) return content;
  return content.replace(new RegExp(PLACEHOLDER.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), siteUrl);
}

export function siteUrlPlugin(): Plugin {
  return {
    name: "vite-plugin-site-url",
    transformIndexHtml(html) {
      return replacePlaceholder(html, getSiteUrl());
    },
    closeBundle() {
      const siteUrl = getSiteUrl();
      if (siteUrl === PLACEHOLDER) return;

      const outDir = path.resolve(process.cwd(), "dist", "public");
      const files = ["robots.txt", "sitemap.xml"];

      for (const file of files) {
        const filePath = path.join(outDir, file);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, "utf-8");
          fs.writeFileSync(filePath, replacePlaceholder(content, siteUrl));
        }
      }
    },
  };
}
