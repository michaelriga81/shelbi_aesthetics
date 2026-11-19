import { motion } from "motion/react";
import { ArrowRight, Activity, Heart, Zap, Shield, Droplets } from "lucide-react";

export default function Wellness() {
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
              Wellness Services
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
              Our wellness services are designed to support your overall health and vitality, helping you feel your best from the inside out. From hormone optimization to nutrient injections, our treatments are tailored to meet your unique wellness goals.
            </p>
            <a 
              href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-300"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hormone Optimization Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="https://comprehensive-urology.com/wp-content/uploads/2025/06/BHRT-Hormone-Replacement-Therapy-Credit-AndreyPopov-iStock-1507230049-1024x540.jpg"
                  alt="Hormone Optimization"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
                Hormone Optimization
              </h3>
              <h4 className="text-3xl font-serif text-charcoal mb-6">Bioidentical Hormone Therapy</h4>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                Bioidentical hormone replacement therapy helps balance hormone levels, improving energy, mood, and overall well-being. This personalized treatment can address symptoms of hormone imbalance, such as fatigue, weight gain, and decreased libido, promoting optimal health and vitality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="#" className="flex items-center justify-center px-6 py-3 border border-charcoal/20 rounded-xl text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-colors text-sm font-medium">
                  How it works
                </a>
                <a href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-3 border border-charcoal/20 rounded-xl text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-colors text-sm font-medium">
                  Initial Consult
                </a>
                <a href="#" className="flex items-center justify-center px-6 py-3 border border-charcoal/20 rounded-xl text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-colors text-sm font-medium">
                  BioTE for Men
                </a>
                <a href="#" className="flex items-center justify-center px-6 py-3 border border-charcoal/20 rounded-xl text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-colors text-sm font-medium">
                  BioTE for Women
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vitamin and Nutrient Injections */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h3 className="text-3xl font-serif text-charcoal mb-4">Vitamin and Nutrient Injections</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Quick and effective treatments to boost your energy, metabolism, and overall wellness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-blush/30 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center text-gold mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-serif text-charcoal mb-4">B12 Shot</h4>
              <p className="text-charcoal/70 leading-relaxed mb-8 flex-grow">
                Our B12 injections boost energy levels, enhance metabolism, and support mental clarity. Ideal for those experiencing fatigue or looking to improve overall wellness, B12 injections provide a quick and effective way to maintain peak performance.
              </p>
              <a href="#" className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors">
                More info <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-blush/30 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center text-gold mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-serif text-charcoal mb-4">Super Skinny Shot</h4>
              <p className="text-charcoal/70 leading-relaxed mb-8 flex-grow">
                The Super Skinny Shot is a powerful combination of B vitamins, amino acids, and other nutrients designed to enhance metabolism, promote fat loss, and increase energy.
              </p>
              <a href="#" className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors mt-auto">
                More info <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-blush/30 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center text-gold mb-6">
                <Droplets className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-serif text-charcoal mb-4">Super Lipo B Plus</h4>
              <p className="text-charcoal/70 leading-relaxed mb-8 flex-grow">
                A potent mix of lipotropic agents, B vitamins, and other essential nutrients that help accelerate fat metabolism, support liver function, and increase energy levels. Ideal for those seeking a boost in their weight loss journey and overall health.
              </p>
              <a href="#" className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors mt-auto">
                More info <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Weight Management Support */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 md:p-16 rounded-3xl border border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
                  Weight Management Support
                </h3>
                <h4 className="text-3xl md:text-4xl font-serif mb-6">Tirzepatide Injections</h4>
                <p className="text-white/80 leading-relaxed mb-8">
                  Tirzepatide is a prescription medication used for weight management, helping to regulate appetite and promote healthy, sustainable weight loss. When combined with a healthy diet and exercise, Tirzepatide injections can be an effective tool for achieving and maintaining your weight loss goals.
                </p>
                <a 
                  href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-white hover:text-charcoal transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://www.progressivemedicalcenter.com/wp-content/uploads/2022/07/AdobeStock_133216465-1800x1197.jpeg"
                    alt="Weight Management Support"
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
