import { motion } from "motion/react";
import { ArrowRight, Info, Clock, Target, Shield, Sparkles, MapPin } from "lucide-react";

const treatments = [
  {
    name: "PDO Threads",
    description: "PDO Threads offer a non-surgical lift by gently tightening and lifting sagging skin, promoting collagen production for a more youthful and defined appearance.",
  },
  {
    name: "Botox",
    description: "Botox is the gold standard for reducing fine lines and wrinkles, offering a smooth, refreshed look by temporarily relaxing targeted facial muscles.",
  },
  {
    name: "Dysport",
    description: "Dysport is a fast-acting injectable that smooths moderate to severe frown lines, providing natural-looking results with minimal downtime.",
  },
  {
    name: "Jeuveau",
    description: "Jeuveau is a modern wrinkle relaxer that targets dynamic facial lines, offering a refreshed and youthful appearance with a smooth finish.",
  },
  {
    name: "Dermal Fillers",
    description: "We offer a variety of FDA-approved dermal fillers to restore volume, smooth lines, and enhance facial contours. Our expert providers will select the best product for your specific needs to achieve natural, long-lasting results.",
  }
];

export default function Injectables() {
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
              Cosmetic Injectables
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Enhance your natural beauty with our premium selection of neuromodulators and dermal fillers. 
              Our expert injectors use advanced techniques to deliver subtle, elegant, and transformative results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The 4 W's and H Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-8 md:p-12 rounded-3xl shadow-sm border border-white/10"
          >
            <h3 className="text-2xl font-serif mb-8 text-center">Understanding Injectables</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="flex items-center text-gold mb-2">
                  <Target className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold uppercase tracking-wider text-sm">Who</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Ideal for adults looking to prevent or treat signs of aging, restore facial volume, or enhance their natural features without surgery.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gold mb-2">
                  <Info className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold uppercase tracking-wider text-sm">What</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  FDA-approved treatments including neuromodulators (to relax muscles) and dermal fillers (to add volume and hydration).
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gold mb-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold uppercase tracking-wider text-sm">When</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Treatments are quick (often under 30 minutes) and can be scheduled regularly to maintain optimal, long-lasting results.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gold mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold uppercase tracking-wider text-sm">Where</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Commonly used on the forehead, between brows, around eyes, cheeks, lips, jawline, and even the neck or submental area.
                </p>
              </div>
              <div className="space-y-3 lg:col-span-2">
                <div className="flex items-center text-gold mb-2">
                  <Sparkles className="w-5 h-5 mr-2" />
                  <h4 className="font-semibold uppercase tracking-wider text-sm">How</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Using ultra-fine needles or micro-cannulas, our skilled providers precisely deliver the product to targeted areas, ensuring maximum comfort and natural-looking outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-sm"
            >
              <img
                src="https://www.westchestercosmeticdermatology.com//files/2024/11/woman-getting-cosmetic-botox-injection-in-forehead.jpg"
                alt="Botox Treatment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-sm"
            >
              <img
                src="https://www.flossandglossdental.ca/public/images/news/how-often-should-you-get-botox.jpg"
                alt="Injectable Results"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-sand p-8 rounded-2xl border border-blush/30 hover:shadow-md transition-shadow group flex flex-col h-full"
              >
                <h3 className="text-2xl font-serif text-charcoal mb-4 group-hover:text-gold transition-colors">
                  {treatment.name}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-8 flex-grow">
                  {treatment.description}
                </p>
                <a 
                  href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
