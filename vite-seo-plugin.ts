import type { Plugin } from "vite";
import { PAGES, SITE, absoluteUrl, fullTitle } from "./src/seoData";
import { blogPosts } from "./src/data/blogPosts";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function withHead(html: string, title: string, description: string, path: string, type: string, image?: string) {
  const t = fullTitle(title);
  const url = absoluteUrl(path);
  const img = image ?? `${SITE.url}${SITE.defaultImage}`;
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(t)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(t)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${type}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${img}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(t)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${img}$2`);
}

// Emits a copy of index.html per route with correct title/description/canonical/social tags
// (so crawlers that don't run JS still see them) and generates sitemap.xml from the same data.
export default function seoPlugin(): Plugin {
  return {
    name: "shelbi-seo",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      const index = bundle["index.html"];
      if (!index || index.type !== "asset") return;
      const base = String(index.source);

      const entries: { path: string; title: string; description: string; type: string; image?: string; lastmod?: string; changefreq: string; priority: number; index: boolean }[] = [
        ...PAGES.map((p) => ({ ...p, type: "website", index: !p.noindex })),
        ...blogPosts.map((b) => ({
          path: `/about/blog/${b.slug}`,
          title: b.title,
          description: b.excerpt,
          type: "article",
          image: b.image,
          lastmod: new Date(b.date).toISOString().slice(0, 10),
          changefreq: "monthly",
          priority: 0.6,
          index: true,
        })),
      ];

      for (const e of entries) {
        const html = withHead(base, e.title, e.description, e.path, e.type, e.image);
        if (e.path === "/") index.source = html;
        else this.emitFile({ type: "asset", fileName: `${e.path.slice(1)}/index.html`, source: html });
      }

      const urls = entries
        .filter((e) => e.index)
        .map(
          (e) =>
            `  <url><loc>${absoluteUrl(e.path)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ""}<changefreq>${e.changefreq}</changefreq><priority>${e.priority.toFixed(1)}</priority></url>`,
        )
        .join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
    },
  };
}
