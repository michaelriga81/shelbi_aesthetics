import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const servicesList = [
  { name: "Wrinkle Treatments", href: "/services/wrinkle-treatments" },
  { name: "Dermal Fillers", href: "/services/fillers" },
  { name: "Biostimulators", href: "/services/biostimulators" },
  { name: "Skin Boosters", href: "/services/skin-boosters" },
  { name: "Microneedling", href: "/services/microneedling" },
  { name: "Lasers", href: "/services/lasers" },
  { name: "Vaginal Rejuvenation", href: "/services/vaginal-rejuvenation" },
  { name: "Facials & Peels", href: "/services/facials-peels" },
  { name: "Wellness", href: "/services/wellness" },
  { name: "Exosome Hair Injection", href: "/services/exosome-hair-injection" },
  { name: "PRP Therapy", href: "/services/prp" },
];

const aboutList = [
  { name: "About Us", href: "/about/us" },
  { name: "Locations", href: "/about/locations" },
  { name: "Before & After Galleries", href: "/about/galleries" },
  { name: "Membership", href: "/membership" },
  { name: "Financing", href: "/about/financing" },
  { name: "FAQ", href: "/about/faq" },
  { name: "Blog", href: "/about/blog" },
];

type ShopItem = {
  name: string;
  href?: string;
  url?: string;
};

const shopList: ShopItem[] = [
  { name: "Gift Cards", href: "/shop/gift-cards" },
  { name: "Aura Wellness", url: "https://aurowellness.com/ref/10666843" },
  {
    name: "ZO Skinhealth",
    url: "https://zoskinhealth.com/?practice-ref=75051&practice-name=Shelbi+Aesthetics+and+Wellness",
  },
  { name: "OurSelf", url: "https://www.ourself.com/?provider_acc_id=30199" },
  {
    name: "ColorScience",
    url: "http://www.colorescience.com/shelbi-aesthetics-and-wellness-the-salt-ranch",
  },
  {
    name: "HydroPeptide",
    url: "https://hydropeptide.com/?rfsn=8908020.3b1aea",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const toggleMobileExpand = (menu: string) => {
    setMobileExpanded(mobileExpanded === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm py-4"
          : location.pathname !== "/"
          ? "bg-sand py-6"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center"
            >
              <img 
                src="https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Image%20from%20Michael%20Riga%20Mail.png" 
                alt="Shelbi Aesthetics" 
                className={`h-16 md:h-20 object-contain transition-all duration-300 ${
                  isScrolled || location.pathname !== "/"
                    ? "" 
                    : "brightness-0 invert"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm tracking-widest uppercase hover:text-pink transition-colors ${
                isScrolled || location.pathname !== "/"
                  ? "text-charcoal"
                  : "text-white/90"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`flex items-center text-sm tracking-widest uppercase hover:text-pink transition-colors ${
                  isScrolled || location.pathname !== "/"
                    ? "text-charcoal"
                    : "text-white/90"
                }`}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 border border-blush/30">
                <div className="py-2">
                  {servicesList.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-charcoal hover:bg-sand hover:text-pink transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm tracking-widest uppercase hover:text-pink transition-colors ${
                  isScrolled || location.pathname !== "/"
                    ? "text-charcoal"
                    : "text-white/90"
                }`}
              >
                About <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 border border-blush/30">
                <div className="py-2">
                  {aboutList.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-charcoal hover:bg-sand hover:text-pink transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Shop Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm tracking-widest uppercase hover:text-pink transition-colors ${
                  isScrolled || location.pathname !== "/"
                    ? "text-charcoal"
                    : "text-white/90"
                }`}
              >
                Shop <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 border border-blush/30">
                <div className="py-2">
                  {shopList.map((item) => (
                    item.href ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-sand hover:text-pink transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-sand hover:text-pink transition-colors"
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/monthly-promotions"
              className={`text-sm tracking-widest uppercase hover:text-pink transition-colors ${
                isScrolled || location.pathname !== "/"
                  ? "text-charcoal"
                  : "text-white/90"
              }`}
            >
              Monthly Promotions
            </Link>

            <Link
              to="/contact"
              className={`text-sm tracking-widest uppercase hover:text-pink transition-colors ${
                isScrolled || location.pathname !== "/"
                  ? "text-charcoal"
                  : "text-white/90"
              }`}
            >
              Contact
            </Link>

            <a
              href="https://shelbiaesthetics.myaestheticrecord.com/online-booking"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 border text-sm tracking-widest uppercase transition-all ${
                isScrolled || location.pathname !== "/"
                  ? "border-gold text-gold hover:bg-pink hover:border-pink hover:text-white"
                  : "border-white text-white hover:bg-pink hover:border-pink hover:text-white"
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={
                isScrolled || location.pathname !== "/"
                  ? "text-charcoal"
                  : "text-white"
              }
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-10 px-10 flex flex-col space-y-6 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-charcoal text-sm tracking-widest uppercase hover:text-pink transition-colors"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => toggleMobileExpand("services")}
              className="flex items-center justify-between w-full text-charcoal text-sm tracking-widest uppercase hover:text-pink transition-colors"
            >
              Services{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileExpanded === "services" && (
              <div className="pl-6 mt-3 space-y-3 border-l-2 border-blush">
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-charcoal/80 text-sm py-1 hover:text-pink font-semibold"
                >
                  All Services
                </Link>
                {servicesList.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-charcoal/80 text-sm py-1 hover:text-pink"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleMobileExpand("about")}
              className="flex items-center justify-between w-full text-charcoal text-sm tracking-widest uppercase hover:text-pink transition-colors"
            >
              About{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileExpanded === "about" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileExpanded === "about" && (
              <div className="pl-6 mt-3 space-y-3 border-l-2 border-blush">
                {aboutList.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-charcoal/80 text-sm py-1 hover:text-pink"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleMobileExpand("shop")}
              className="flex items-center justify-between w-full text-charcoal text-sm tracking-widest uppercase hover:text-pink transition-colors"
            >
              Shop{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileExpanded === "shop" ? "rotate-180" : ""}`}
              />
            </button>
            {mobileExpanded === "shop" && (
              <div className="pl-6 mt-3 space-y-3 border-l-2 border-blush">
                {shopList.map((item) => (
                  item.href ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-charcoal/80 text-sm py-1 hover:text-pink"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-charcoal/80 text-sm py-1 hover:text-pink"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
            )}
          </div>

          <Link
            to="/monthly-promotions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-charcoal text-sm tracking-widest uppercase hover:text-pink transition-colors"
          >
            Monthly Promotions
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-charcoal text-sm tracking-widest uppercase hover:text-pink transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://shelbiaesthetics.myaestheticrecord.com/online-booking"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-4 bg-gold text-white text-center text-sm tracking-widest uppercase mt-6 hover:bg-pink transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
