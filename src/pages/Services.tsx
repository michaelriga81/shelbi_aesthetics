import { motion } from "motion/react";
import {
  Sparkles,
  Droplet,
  Activity,
  Heart,
  Scissors,
  Eye,
  PenTool,
  Zap,
  Sun,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Injectables",
    description:
      "Botox, Fillers, and neurotoxins to smooth wrinkles and restore youthful volume.",
    icon: <Droplet className="w-6 h-6" />,
    link: "/services/injectables"
  },
  {
    title: "Biostimulators",
    description:
      "Stimulate your body's natural collagen production for long-lasting, natural volume.",
    icon: <Sparkles className="w-6 h-6" />,
    link: "/services/biostimulators"
  },
  {
    title: "Skin Boosters",
    description:
      "Advanced skin rejuvenation using the MicronJet system to deliver potent serums directly into the skin.",
    icon: <Droplet className="w-6 h-6" />,
    link: "/services/skin-boosters"
  },
  {
    title: "Microneedling",
    description:
      "Stimulate collagen production and improve skin texture with our advanced microneedling treatments.",
    icon: <Activity className="w-6 h-6" />,
    link: "/services/microneedling"
  },
  {
    title: "Lasers",
    description:
      "Advanced laser treatments for skin resurfacing, hair removal, and pigmentation correction.",
    icon: <Zap className="w-6 h-6" />,
    link: "/services/lasers"
  },
  {
    title: "Vaginal Rejuvenation",
    description:
      "Non-surgical treatments to improve intimate health, comfort, and confidence.",
    icon: <Heart className="w-6 h-6" />,
    link: "/services/vaginal-rejuvenation"
  },
  {
    title: "Facials & Peels",
    description:
      "Customized skincare solutions to exfoliate, hydrate, and brighten your complexion.",
    icon: <Sparkles className="w-6 h-6" />,
    link: "/services/facials-peels"
  },
  {
    title: "Wellness",
    description:
      "Holistic approaches including IV therapy and vitamin injections for optimal health.",
    icon: <Sun className="w-6 h-6" />,
    link: "/services/wellness"
  },
  {
    title: "Exosome Hair Injection",
    description:
      "Cutting-edge regenerative therapy to stimulate hair follicles and promote growth.",
    icon: <Scissors className="w-6 h-6" />,
    link: "/services/exosome-hair-injection"
  },
  {
    title: "PRP Therapy",
    description:
      "Rejuvenate your skin and stimulate hair growth with Platelet-Rich Plasma therapy.",
    icon: <Droplet className="w-6 h-6" />,
    link: "/services/prp"
  },
];

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
              Discover
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
              Our Services
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Explore our comprehensive range of aesthetic and wellness treatments designed to enhance your natural beauty and boost your confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sand p-8 rounded-2xl border border-blush/30 hover:shadow-md transition-shadow group flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-pink group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
