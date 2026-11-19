import { useEffect } from "react";
import { SITE, absoluteUrl, fullTitle } from "../seoData";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: object | object[];
}

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key: "name" | "property", name: string, content: string) =>
  upsert(
    `meta[${key}="${name}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute(key, name);
      return m;
    },
    "content",
    content,
  );

export default function Seo({ title, description, path, image, type = "website", noindex, jsonLd }: SeoProps) {
  useEffect(() => {
    const t = fullTitle(title);
    const url = absoluteUrl(path);
    const img = image?.startsWith("http") ? image : `${SITE.url}${image ?? SITE.defaultImage}`;

    document.title = t;
    meta("name", "description", description);
    meta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    upsert('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), "href", url);
    meta("property", "og:site_name", SITE.name);
    meta("property", "og:type", type);
    meta("property", "og:title", t);
    meta("property", "og:description", description);
    meta("property", "og:url", url);
    meta("property", "og:image", img);
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:title", t);
    meta("name", "twitter:description", description);
    meta("name", "twitter:image", img);

    const old = document.head.querySelectorAll("script[data-seo-jsonld]");
    old.forEach((n) => n.remove());
    const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    blocks.forEach((b) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo-jsonld", "");
      s.text = JSON.stringify(b);
      document.head.appendChild(s);
    });
    return () => document.head.querySelectorAll("script[data-seo-jsonld]").forEach((n) => n.remove());
  }, [title, description, path, image, type, noindex, jsonLd]);

  return null;
}
