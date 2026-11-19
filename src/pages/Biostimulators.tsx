import { motion } from "motion/react";
import { Check, Clock, ShieldCheck, Sparkles, ArrowRight, Info, Target, Zap, Smile, MapPin, Heart, Activity } from "lucide-react";

const treatments = [
  {
    name: "Radiesse",
    subtitle: "Lift & Define",
    description: "Radiesse is a calcium hydroxylapatite (CaHA) injectable that provides immediate contouring plus long-term collagen stimulation. It's ideal for defining the jawline, restoring volume to the hands, and improving skin quality.",
    features: ["Immediate Lift", "Collagen Stimulation", "Long-Lasting Results"],
    color: "bg-sand/30"
  },
  {
    name: "Sculptra",
    subtitle: "The Liquid Facelift",
    description: "Sculptra (poly-L-lactic acid) works with your body to revitalize collagen production and help restore your skin's inner structure and volume. Results appear gradually for a natural, youthful look that can last up to two years.",
    features: ["Gradual Results", "Restores Structure", "Long-Lasting (2+ Years)"],
    color: "bg-white border-sand"
  }
];

const treatmentAreas = [
  { name: "Temples", description: "Restore volume to hollow temples." },
  { name: "Cheeks", description: " subtle, natural-looking volume." },
  { name: "Jawline", description: "Define and sharpen the jawline contour." },
  { name: "Nasolabial Folds", description: "Soften deep smile lines." },
  { name: "Marionette Lines", description: "Improve lines around the mouth." },
  { name: "Neck", description: "Tighten and improve skin texture." },
  { name: "Décolletage", description: "Smooth chest wrinkles." },
  { name: "Hands", description: "Restore volume to aging hands." },
  { name: "Body", description: "Improve skin laxity on the body." },
];

const comparisonData = [
  { feature: "Primary Action", radiesse: "Immediate Fill + Collagen", sculptra: "Collagen Stimulation" },
  { feature: "Onset of Results", radiesse: "Immediate", sculptra: "Gradual (weeks to months)" },
  { feature: "Duration", radiesse: "12-18 Months", sculptra: "2+ Years" },
  { feature: "Best For", radiesse: "Definition & Contouring", sculptra: "Global Volume & Skin Quality" },
];

export default function Biostimulators() {
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
              Biostimulators
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
              Activate your body's natural regenerative powers to restore volume, improve skin quality, and achieve long-lasting rejuvenation.
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
                <h3 className="text-sm font-bold tracking-widest uppercase">What Are They?</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
                Collagen Stimulators
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Unlike traditional hyaluronic acid fillers that simply fill space, biostimulators work by stimulating your body's own collagen production.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                They create a scaffold under the skin that triggers a regenerative response, leading to thicker, firmer, and more youthful-looking skin over time.
              </p>
              
              {/* Image Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-sand/30 mb-8">
                <img 
                  src="https://assets.newsweek.com/wp-content/uploads/2025/08/2423258-natural-beautiful-woman-smiling-freckles.jpg" 
                  alt="Biostimulator Treatment" 
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
                Regenerative Aesthetics
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Micro-particles are injected into the deeper layers of the skin. As these particles are absorbed, they leave behind a foundation of new collagen that restores structure and volume.
              </p>
              
              {/* Image Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-white mb-8">
                <img 
                  src="https://img.freepik.com/free-photo/fashion-beauty-portrait-young-brunette-woman-with-natural-stylish-makeup-perfect-clean-skin-sexy-model-with-long-curly-hair-posing-studio-pink-background_158538-21346.jpg?semt=ais_rp_progressive&w=740&q=80" 
                  alt="How biostimulators work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <Activity className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Natural Regeneration</h4>
                    <p className="text-sm text-charcoal/60">Uses your body's own processes to rejuvenate.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Long-Lasting</h4>
                    <p className="text-sm text-charcoal/60">Results can last 2 years or more.</p>
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
              Biostimulators are versatile and can be used to improve skin quality and volume across the face and body.
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

      {/* Our Treatments Grid - BG White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Our Biostimulators</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              We offer the two leading biostimulators on the market.
            </p>
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
                  {treatment.name === "Radiesse" && <Target className="w-6 h-6 text-gold" />}
                  {treatment.name === "Sculptra" && <Sparkles className="w-6 h-6 text-charcoal/50" />}
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
              <h2 className="text-3xl font-serif text-charcoal mb-4">Radiesse vs. Sculptra</h2>
              <p className="text-charcoal/60">Which biostimulator is right for you?</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b-2 border-charcoal/10 font-serif text-charcoal text-lg">Feature</th>
                    <th className="p-4 border-b-2 border-charcoal/10 font-bold text-charcoal">Radiesse</th>
                    <th className="p-4 border-b-2 border-charcoal/10 font-bold text-charcoal">Sculptra</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? "bg-sand/20" : ""}>
                      <td className="p-4 border-b border-charcoal/5 font-medium text-charcoal">{row.feature}</td>
                      <td className="p-4 border-b border-charcoal/5 text-charcoal/70">{row.radiesse}</td>
                      <td className="p-4 border-b border-charcoal/5 text-charcoal/70">{row.sculptra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-charcoal/50 italic">
                * A consultation is the best way to determine which product will achieve your desired results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
