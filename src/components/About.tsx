import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const imageWrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageWrap,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div ref={imageWrap} className="aspect-[3/4] rounded-2xl overflow-hidden">
              <motion.img
                src="/image1.png"
                alt="Shelbi Aesthetics"
                style={{ y: imageY, scale: 1.2 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="animate-float-slow absolute -bottom-8 -right-8 w-48 h-48 bg-gold/20 rounded-full blur-2xl -z-10"></div>
            <div className="animate-float-slow absolute -top-8 -left-8 w-40 h-40 bg-pink/30 rounded-full blur-2xl -z-10" style={{ animationDelay: "2s" }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-6 leading-tight">
              Elevating Beauty in Baytown, TX
            </h3>
            <div className="space-y-4 text-charcoal/80 text-base leading-relaxed">
              <p>
                Welcome to Shelbi Aesthetics, Baytown's premier destination for
                advanced skincare, anti-aging treatments, and holistic wellness.
                Our mission is to provide personalized, results-driven care in a
                luxurious and welcoming environment.
              </p>
              <p>
                Led by experienced professionals, we specialize in a
                comprehensive suite of services including injectables,
                state-of-the-art laser therapies, and innovative wellness
                solutions like exosome treatments.
              </p>
              <p>
                We believe that true beauty radiates from within. Whether you're
                seeking subtle enhancements, restorative treatments, or a
                complete rejuvenation, our dedicated team is here to guide you
                on your aesthetic journey.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://shelbiaesthetics.myaestheticrecord.com/online-booking"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-block px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
