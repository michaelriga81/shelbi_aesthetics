import { motion } from "motion/react";
import { Check, Clock, ShieldCheck, Sparkles, ArrowRight, Info, Target, Zap, Smile, MapPin } from "lucide-react";

const treatments = [
  {
    name: "Botox",
    subtitle: "The Gold Standard",
    description: "Botox Cosmetic is the first and only FDA-approved treatment to temporarily make moderate to severe frown lines, crow's feet, and forehead lines look better in adults. It delivers predictable, subtle results, so you look like you, only with less noticeable facial lines.",
    features: ["FDA Approved", "Proven Safety Profile", "Predictable Results"],
    color: "bg-sand/30"
  },
  {
    name: "Dysport",
    subtitle: "Natural-Looking Motion",
    description: "Dysport is a prescription injection for temporary improvement in the look of moderate to severe frown lines between the eyebrows (glabellar lines). It's known for its slightly wider spread, making it excellent for larger areas like the forehead, offering natural-looking results.",
    features: ["Fast Onset", "Natural Look", "Great for Foreheads"],
    color: "bg-white border-sand"
  },
  {
    name: "Jeuveau",
    subtitle: "Modern Tox",
    description: "Jeuveau (prabotulinumtoxinA-xvfs) is a modern prescription medicine that is injected into muscles and used in adults for a short period of time (temporary) to improve the look of moderate to severe frown lines between the eyebrows.",
    features: ["Modern Formula", "Precise", "#Newtox"],
    color: "bg-sand/30"
  },
  {
    name: "Daxxify",
    subtitle: "Long-Lasting Powered",
    description: "DAXXIFY is the only long-lasting frown line treatment. It is powered by a novel formula that stabilizes the active ingredient, resulting in a duration that can last up to twice as long as conventional neuromodulators.",
    features: ["Longest Lasting", "Vegan Formula"],
    color: "bg-white border-sand"
  }
];

const comparisonData = [
  { feature: "Onset of Action", botox: "3-5 Days", dysport: "2-3 Days", jeuveau: "2-3 Days", daxxify: "2-3 Days" },
  { feature: "Typical Duration", botox: "3-4 Months", dysport: "3-4 Months", jeuveau: "3-4 Months", daxxify: "6-9 Months" },
  { feature: "Spread", botox: "Focused", dysport: "Wider Spread", jeuveau: "Focused", daxxify: "Focused" },
  { feature: "Primary Benefit", botox: "Proven Track Record", dysport: "Fast Acting & Natural", jeuveau: "Modern & Effective", daxxify: "Long Lasting" },
];

const treatmentAreas = [
  { name: "Forehead Lines", description: "Horizontal lines across the forehead." },
  { name: "Frown Lines (11s)", description: "Vertical lines between the eyebrows." },
  { name: "Crow's Feet", description: "Fine lines around the outer corners of the eyes." },
  { name: "Bunny Lines", description: "Wrinkles on the nose bridge when scrunching." },
  { name: "Lip Flip", description: "Subtle enhancement to the upper lip shape." },
  { name: "Gummy Smile", description: "Reduces excessive gum display when smiling." },
  { name: "Chin Dimpling", description: "Smoothes the orange peel texture on the chin." },
  { name: "Jawline Slimming", description: "Relaxes masseter muscles for a slimmer profile." },
  { name: "Neck Bands", description: "Softens vertical bands on the neck." },
];

export default function WrinkleTreatments() {
  return (
    <main className="min-h-screen font-sans text-charcoal">
      
      {/* Header Section - BG Sand */}
      <section className="pt-32 pb-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6"
            >
              Wrinkle Treatments
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "4rem" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-gold mx-auto mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto"
            >
              Smooth fine lines and restore a youthful appearance with our curated selection of premium neuromodulators.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What is it / How it works - BG White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center text-gold mb-4">
                <Info className="w-6 h-6 mr-3" />
                <h3 className="text-sm font-bold tracking-widest uppercase">What Is It?</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
                Neuromodulators
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Neuromodulators, commonly known by brand names like Botox and Dysport, are purified proteins used to temporarily relax the muscles responsible for causing wrinkles.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                They are the most popular non-surgical cosmetic treatment globally, offering a safe and effective way to smooth dynamic wrinkles and prevent new ones from forming.
              </p>
              
              {/* Image Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-sand/30 mb-8">
                <img 
                  src="https://www.flossandglossdental.ca/public/images/news/how-often-should-you-get-botox.jpg" 
                  alt="Neuromodulator Treatment" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-sand/30 p-8 md:p-10 rounded-3xl border border-sand"
            >
              <div className="flex items-center text-gold mb-4">
                <Zap className="w-6 h-6 mr-3" />
                <h3 className="text-sm font-bold tracking-widest uppercase">How It Works</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-6">
                The Science of Smoothing
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                These treatments work by blocking nerve signals to the muscles. When the muscle cannot contract, the skin above it remains smooth and unwrinkled.
              </p>
              
              {/* Image Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-white mb-8">
                <img 
                  src="https://www.lafargedental.ca/wp-content/uploads/2025/04/botox-101-everything-you-need-to-know.jpg" 
                  alt="How it works" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <Target className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Targeted Action</h4>
                    <p className="text-sm text-charcoal/60">Precise injection ensures only specific muscles are relaxed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <Smile className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Natural Expression</h4>
                    <p className="text-sm text-charcoal/60">You'll still look like you, just more rested and refreshed.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Areas - BG Sand */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Treatment Areas</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Versatile solutions for various concerns across the face and neck.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-white/50 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-gold mr-3" />
                  <h3 className="font-bold text-charcoal">{area.name}</h3>
                </div>
                <p className="text-sm text-charcoal/60">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands Grid - BG White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Our Premium Brands</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto mb-8">
              We offer a range of top-tier neuromodulators to customize your treatment.
            </p>
            <div className="bg-sand/50 border border-gold/20 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-charcoal/80 font-medium italic">
                "At Shelbi Aesthetics, we normally use <span className="text-gold font-bold not-italic">Jeuveau</span> as our brand of choice. While we do offer other brands, we stick with Jeuveau for the best results and the highest quality."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${treatment.color} p-8 md:p-10 rounded-3xl shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-serif text-charcoal mb-1">{treatment.name}</h3>
                    <p className="text-gold text-sm font-bold tracking-widest uppercase">{treatment.subtitle}</p>
                  </div>
                  {treatment.name === "Daxxify" && <Sparkles className="w-6 h-6 text-gold" />}
                  {treatment.name === "Botox" && <ShieldCheck className="w-6 h-6 text-charcoal/50" />}
                </div>
                
                <p className="text-charcoal/70 leading-relaxed mb-8 min-h-[80px]">
                  {treatment.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {treatment.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-charcoal/80">
                      <Check className="w-4 h-4 text-gold mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-charcoal hover:text-gold transition-colors uppercase tracking-widest"
                >
                  Book {treatment.name} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - BG Sand */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-charcoal/5 overflow-hidden"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif text-charcoal mb-4">Compare Treatments</h2>
              <p className="text-charcoal/60">Find the right option for your aesthetic goals</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b-2 border-charcoal/10 font-serif text-charcoal text-lg">Feature</th>
                    <th className="p-4 border-b-2 border-charcoal/10 font-bold text-charcoal">Botox</th>
                    <th className="p-4 border-b-2 border-charcoal/10 font-bold text-charcoal">Dysport</th>
                    <th className="p-4 border-b-2 border-charcoal/10 font-bold text-charcoal">Jeuveau</th>
                    <th className="p-4 border-b-2 border-charcoal/10 font-bold text-charcoal text-gold">Daxxify</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? "bg-sand/20" : ""}>
                      <td className="p-4 border-b border-charcoal/5 font-medium text-charcoal">{row.feature}</td>
                      <td className="p-4 border-b border-charcoal/5 text-charcoal/70">{row.botox}</td>
                      <td className="p-4 border-b border-charcoal/5 text-charcoal/70">{row.dysport}</td>
                      <td className="p-4 border-b border-charcoal/5 text-charcoal/70">{row.jeuveau}</td>
                      <td className="p-4 border-b border-charcoal/5 text-charcoal/70 font-medium">{row.daxxify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-charcoal/50 italic">
                * Individual results may vary. Consultation required to determine the best treatment for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
