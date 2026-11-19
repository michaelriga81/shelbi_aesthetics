export const SITE = {
  url: "https://shelbiaestheticswellness.com",
  name: "Shelbi Aesthetics",
  defaultImage: "/og-image.jpg",
};

export interface PageSeo {
  path: string;
  title: string; // without site suffix, except home
  description: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  noindex?: boolean;
}

export const PAGES: PageSeo[] = [
  { path: "/", title: "Shelbi Aesthetics | Premier Medspa in Baytown, TX", description: "Shelbi Aesthetics is a premier medspa in Baytown, TX offering Botox, fillers, lasers, facials, peels, PRP, wellness and more. Book your appointment online.", changefreq: "weekly", priority: 1.0 },
  { path: "/services", title: "Medspa Services in Baytown, TX", description: "Explore medspa services at Shelbi Aesthetics in Baytown, TX: injectables, lasers, microneedling, facials, peels, PRP, wellness and vaginal rejuvenation.", changefreq: "monthly", priority: 0.9 },
  { path: "/services/wrinkle-treatments", title: "Wrinkle Treatments & Botox in Baytown, TX", description: "Smooth fine lines and wrinkles with neuromodulator treatments such as Botox at Shelbi Aesthetics in Baytown, TX. Learn what to expect and book a visit.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/fillers", title: "Dermal Fillers in Baytown, TX", description: "Restore volume and contour with dermal fillers at Shelbi Aesthetics in Baytown, TX. Natural-looking results tailored to your face and goals.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/biostimulators", title: "Biostimulators & Collagen Stimulation in Baytown, TX", description: "Stimulate your body's own collagen with biostimulator treatments at Shelbi Aesthetics in Baytown, TX for gradual, natural-looking rejuvenation.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/skin-boosters", title: "Skin Boosters in Baytown, TX", description: "Improve hydration, texture and glow with skin booster treatments at Shelbi Aesthetics, your Baytown, TX medspa. Book a consultation today.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/microneedling", title: "Microneedling in Baytown, TX", description: "Refine texture, scarring and fine lines with microneedling at Shelbi Aesthetics in Baytown, TX. See how it works and book your treatment.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/lasers", title: "Laser Treatments in Baytown, TX", description: "Advanced laser treatments for skin rejuvenation, tightening and more at Shelbi Aesthetics in Baytown, TX. Schedule a consultation online.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/vaginal-rejuvenation", title: "Vaginal Rejuvenation in Baytown, TX", description: "Learn about non-surgical vaginal rejuvenation at Shelbi Aesthetics in Baytown, TX, delivered in a private, professional and caring setting.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/facials-peels", title: "Facials & Chemical Peels in Baytown, TX", description: "Customized facials and chemical peels at Shelbi Aesthetics in Baytown, TX to brighten, clear and renew your skin. Book your appointment.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/wellness", title: "Wellness Treatments in Baytown, TX", description: "Support your health from the inside out with wellness treatments at Shelbi Aesthetics in Baytown, TX. Learn more and book a consultation.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/prp", title: "PRP Treatments in Baytown, TX", description: "Platelet-rich plasma (PRP) treatments at Shelbi Aesthetics in Baytown, TX use your own body's healing power for skin and hair rejuvenation.", changefreq: "monthly", priority: 0.8 },
  { path: "/services/exosome-hair-injection", title: "Exosome Hair Injections in Baytown, TX", description: "Support thicker, healthier-looking hair with exosome hair injections at Shelbi Aesthetics in Baytown, TX. Learn about the treatment and book.", changefreq: "monthly", priority: 0.8 },
  { path: "/monthly-promotions", title: "Monthly Specials & Promotions", description: "See this month's specials and treatment packages at Shelbi Aesthetics in Baytown, TX, including new-patient offers on injectables, lasers and skin care.", changefreq: "weekly", priority: 0.9 },
  { path: "/membership", title: "Inner Circle Memberships", description: "Explore the Gold and Elite 6-month Inner Circle memberships at Shelbi Aesthetics in Baytown, TX and see what each membership includes.", changefreq: "monthly", priority: 0.8 },
  { path: "/shop/gift-cards", title: "Gift Cards", description: "Give the gift of beauty and wellness with a Shelbi Aesthetics gift card, redeemable for medspa treatments in Baytown, TX.", changefreq: "monthly", priority: 0.7 },
  { path: "/about/us", title: "About Shelbi Aesthetics & Our Team", description: "Meet the team behind Shelbi Aesthetics, a Baytown, TX medspa focused on natural-looking results, safety and personalized care.", changefreq: "monthly", priority: 0.8 },
  { path: "/about/locations", title: "Locations & Hours in Baytown & Mont Belvieu, TX", description: "Find Shelbi Aesthetics at 803 Massey Tompkins Rd in Baytown, TX and The Salt Ranch in Mont Belvieu, TX. See hours, directions and contact details.", changefreq: "monthly", priority: 0.8 },
  { path: "/about/galleries", title: "Before & After Gallery", description: "Browse before and after results from injectable, laser and skin treatments at Shelbi Aesthetics, your medspa in Baytown, TX.", changefreq: "monthly", priority: 0.8 },
  { path: "/about/financing", title: "Financing Options", description: "Learn about flexible financing options for treatments at Shelbi Aesthetics in Baytown, TX so you can plan your care with confidence.", changefreq: "monthly", priority: 0.7 },
  { path: "/about/faq", title: "Frequently Asked Questions", description: "Answers to common questions about booking, cancellations, consultations and treatments at Shelbi Aesthetics in Baytown, TX.", changefreq: "monthly", priority: 0.7 },
  { path: "/about/blog", title: "Blog: Skin, Injectables & Wellness Tips", description: "Read tips and guides on Botox, fillers, skin care and wellness from the Shelbi Aesthetics team in Baytown, TX.", changefreq: "weekly", priority: 0.8 },
  { path: "/contact", title: "Contact Us & Book an Appointment", description: "Contact Shelbi Aesthetics in Baytown, TX by phone or message, or book your appointment online. Find our address and hours.", changefreq: "monthly", priority: 0.9 },
  { path: "/privacy-policy", title: "Privacy Policy", description: "How Shelbi Aesthetics collects, uses and protects your personal information.", changefreq: "yearly", priority: 0.3 },
  { path: "/terms-of-service", title: "Terms of Service", description: "Terms of service for using the Shelbi Aesthetics website and booking treatments.", changefreq: "yearly", priority: 0.3 },
];

export const fullTitle = (title: string) =>
  title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

export const absoluteUrl = (path: string) =>
  `${SITE.url}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
