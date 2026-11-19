import { motion, animate, useInView } from "motion/react";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CountUp({ to, decimals = 1 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}

const testimonials = [
  {
    name: "Sarah M.",
    text: "Shelbi Aesthetics completely transformed my skin. The staff is incredibly knowledgeable and made me feel so comfortable during my laser treatment. Highly recommend!",
    service: "Laser Resurfacing",
  },
  {
    name: "Emily R.",
    text: "I've been coming here for my Botox and fillers for over a year. The results are always so natural and exactly what I ask for. Best medspa in Baytown!",
    service: "Injectables",
  },
  {
    name: "Jessica T.",
    text: "The wellness treatments have given me so much energy. The clinic is beautiful and the care is top-notch.",
    service: "Wellness",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            Client Experiences
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-gold mx-auto mb-6"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <div className="flex items-center space-x-2 text-gold">
              <span className="font-serif text-2xl font-medium text-charcoal"><CountUp to={4.8} /></span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 260, damping: 14 }}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </motion.span>
                ))}
              </div>
            </div>
            <p className="text-charcoal/70 text-sm">
              Based on <a href="https://share.google/VyzgMICqDp2LMMGfd" target="_blank" rel="noopener noreferrer" className="font-medium underline hover:text-gold transition-colors">100+ Google Reviews</a>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-blush/30"
            >
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-charcoal/80 italic mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-serif font-medium text-charcoal">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gold uppercase tracking-widest mt-1">
                  {testimonial.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
