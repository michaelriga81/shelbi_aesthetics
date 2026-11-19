import { motion } from "motion/react";
import { ArrowRight, Sparkles, Activity, ShieldCheck } from "lucide-react";

export default function ExosomeHairInjection() {
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
              Exosome Hair Injection
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              A cutting-edge treatment that uses stem cell-derived exosomes to stimulate hair growth, improve hair density, and revitalize thinning hair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="https://bionixclinic.com/wp-content/uploads/2024/08/exosome-therapy-hair-loss-dubai-1.png"
                  alt="Exosome Hair Injection"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-serif text-charcoal mb-6">Revitalize Your Hair</h3>
              <div className="space-y-6 text-charcoal/80 leading-relaxed mb-10">
                <p>
                  Experience the future of hair restoration with our Exosome Hair Injection therapy. This non-invasive procedure targets the root causes of hair loss, promoting healthier, fuller hair from the inside out.
                </p>
                <p>
                  Exosomes are powerful extracellular vesicles that contain growth factors, proteins, and genetic material. When injected into the scalp, they communicate with your hair follicles, signaling them to regenerate, repair, and enter the active growth phase.
                </p>
                <p>
                  Whether you're experiencing early signs of thinning or seeking to improve overall hair density, exosome therapy offers a safe, effective, and natural-looking solution without the downtime of surgical procedures.
                </p>
              </div>

              <a 
                href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-300"
              >
                Book a Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 md:p-16 rounded-3xl shadow-sm border border-white/10"
          >
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-3xl font-serif mb-4">Why Choose Exosome Therapy?</h3>
              <p className="text-white/70">
                Discover the benefits of this advanced, non-surgical approach to hair restoration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-gold mx-auto mb-6 shadow-sm">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif mb-4">Stimulates Growth</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Reawakens dormant hair follicles and extends the hair growth cycle for thicker, fuller hair.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-gold mx-auto mb-6 shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif mb-4">Non-Invasive</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  A safe, non-surgical alternative to hair transplants with minimal discomfort and no significant downtime.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-gold mx-auto mb-6 shadow-sm">
                  <Activity className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif mb-4">Improves Density</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Increases hair thickness and overall density, improving the health and vitality of your scalp.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
