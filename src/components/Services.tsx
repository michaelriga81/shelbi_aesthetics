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
} from "lucide-react";

const services = [
  {
    title: "Injectables",
    description:
      "Botox, Fillers, and neurotoxins to smooth wrinkles and restore youthful volume.",
    icon: <Droplet className="w-6 h-6" />,
  },
  {
    title: "Biostimulators",
    description:
      "Stimulate your body's natural collagen production for long-lasting, natural volume.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Skin Boosters",
    description:
      "Advanced skin rejuvenation using the MicronJet system to deliver potent serums directly into the skin.",
    icon: <Droplet className="w-6 h-6" />,
  },
  {
    title: "Microneedling",
    description:
      "Stimulate collagen production and improve skin texture with our advanced microneedling treatments.",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: "Lasers",
    description:
      "Advanced laser treatments for skin resurfacing, hair removal, and pigmentation correction.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Vaginal Rejuvenation",
    description:
      "Non-surgical treatments to improve intimate health, comfort, and confidence.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Facials & Peels",
    description:
      "Customized skincare solutions to exfoliate, hydrate, and brighten your complexion.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Wellness",
    description:
      "Holistic approaches including IV therapy and vitamin injections for optimal health.",
    icon: <Sun className="w-6 h-6" />,
  },
  {
    title: "Exosome Hair Injection",
    description:
      "Cutting-edge regenerative therapy to stimulate hair follicles and promote growth.",
    icon: <Scissors className="w-6 h-6" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-pink mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-charcoal/70 max-w-2xl mx-auto text-sm md:text-base"
          >
            Discover our comprehensive range of aesthetic and wellness
            treatments designed to enhance your natural beauty and boost your
            confidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-blush/50 group"
            >
              <motion.div
                whileHover={{ rotate: [0, -12, 10, -6, 0], scale: 1.12 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-blush rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-pink group-hover:text-white transition-colors duration-300"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-serif font-medium text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
