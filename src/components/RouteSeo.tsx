import { useLocation } from "react-router-dom";
import Seo from "./Seo";
import { PAGES, absoluteUrl } from "../seoData";

const labelFor = (seg: string) => seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// Sets per-route title, description, canonical, social tags and breadcrumbs.
// Blog posts and 404 render their own <Seo>, so they are skipped here.
export default function RouteSeo() {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const page = PAGES.find((p) => p.path === path);
  if (!page || path.startsWith("/about/blog/") || path === "/about/faq") return null;

  const segs = path.split("/").filter(Boolean);
  const crumbs = [{ name: "Home", url: absoluteUrl("/") }].concat(
    segs.map((seg, i) => {
      const p = "/" + segs.slice(0, i + 1).join("/");
      const known = PAGES.find((x) => x.path === p);
      return { name: known ? known.title.split(/ in | & |: /)[0] : labelFor(seg), url: absoluteUrl(p) };
    }),
  );
  const breadcrumb =
    segs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url })),
        }
      : undefined;

  return <Seo title={page.title} description={page.description} path={path} jsonLd={breadcrumb} />;
}
