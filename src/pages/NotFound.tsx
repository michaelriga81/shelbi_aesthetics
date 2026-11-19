import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-sand px-4">
      <Seo title="Page Not Found" description="This page could not be found." path="/404" noindex />
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Page Not Found</h1>
        <p className="text-charcoal/70 mb-6">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="text-gold hover:underline uppercase tracking-widest text-sm">Back to Home</Link>
      </div>
    </main>
  );
}
