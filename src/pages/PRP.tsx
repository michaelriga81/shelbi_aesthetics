import { motion } from "motion/react";
import { ArrowRight, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";

export default function PRP() {
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
              Services
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
              PRP Therapy
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Harness the power of your body's own growth factors with Platelet-Rich Plasma (PRP) therapy. 
              Rejuvenate your skin, stimulate collagen, and enhance your natural beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nano PRP Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl font-serif mb-6">Nano PRP</h3>
              <div className="space-y-6 text-white/80 leading-relaxed mb-10">
                <p>
                  Nano PRP takes regenerative medicine to the next level. By processing PRP into smaller, more potent particles, we can deliver growth factors more effectively to targeted areas.
                </p>
                <p>
                  This advanced technique is ideal for delicate areas like the under-eyes and fine lines, providing subtle yet powerful rejuvenation without the need for invasive procedures.
                </p>
              </div>

              <a 
                href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-white hover:text-charcoal transition-colors duration-300"
              >
                Book Consultation
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-white/10">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesXFDTCXb6W9gZkmcN7eFVBXeagON4YC4Mg&s"
                  alt="Nano PRP"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
