import { motion } from "motion/react";
import { Check, Clock, Sparkles, ArrowRight, Info, Zap, Droplets, ShieldCheck, Activity } from "lucide-react";

const treatments = [
  {
    name: "SkinPen Microneedling",
    subtitle: "Collagen Induction Therapy",
    description: "SkinPen by Crown Aesthetics is the first FDA-cleared microneedling device. It causes controlled micro-injuries that stimulate your body's natural wound healing process, while minimizing cellular damage. The result is effective remodeling of scar tissue, while keeping the overall structure of the skin intact.",
    details: [
      "Recommended: 3-6 treatments spaced 4 weeks apart.",
      "Minimal downtime (24-48 hours of redness)."
    ],
    pricing: [
      { label: "Face", price: "$350" },
      { label: "Face & Neck", price: "$450" }
    ],
    color: "bg-sand/30"
  }
];

export default function Microneedling() {
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
              Microneedling
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
              Stimulate collagen production and improve skin texture with our advanced microneedling treatments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section - BG White */}
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
                <h3 className="text-sm font-bold tracking-widest uppercase">The Technology</h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
                Collagen Induction
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Microneedling creates thousands of micro-channels that stimulate your body's natural wound healing process, while minimizing cellular damage.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                This rejuvenates your skin from the inside out. The result is effective remodeling of scar tissue, while keeping the overall structure of the skin intact.
              </p>
              
              {/* Image Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-sand/30 mb-8">
                <img 
                  src="https://tlcmedspashop.com/cdn/shop/files/11.svg?v=1742579660" 
                  alt="Microneedling Treatment" 
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
                <h3 className="text-sm font-bold tracking-widest uppercase">Benefits</h3>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-6">
                Why Choose Microneedling?
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <Activity className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Collagen Boost</h4>
                    <p className="text-sm text-charcoal/60">Stimulates natural collagen and elastin production.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Skin Repair</h4>
                    <p className="text-sm text-charcoal/60">Improves the appearance of acne scars and stretch marks.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <Sparkles className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Texture & Tone</h4>
                    <p className="text-sm text-charcoal/60">Refines pore size and evens out skin tone.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Grid - BG Sand */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Our Microneedling Treatments</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Advanced treatments for optimal skin rejuvenation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${treatment.color} p-8 md:p-10 rounded-3xl shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow`}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-2xl md:text-3xl font-serif text-charcoal mr-4">{treatment.name}</h3>
                      <Sparkles className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-gold text-sm font-bold tracking-widest uppercase mb-4">{treatment.subtitle}</p>
                    
                    <p className="text-charcoal/70 leading-relaxed mb-6">
                      {treatment.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {treatment.details.map((detail, i) => (
                        <div key={i} className="flex items-center text-sm text-charcoal/80">
                          <Check className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-1/3 flex flex-col justify-between border-t md:border-t-0 md:border-l border-charcoal/10 pt-6 md:pt-0 md:pl-8">
                    <div>
                      <h4 className="font-bold text-charcoal mb-4 uppercase tracking-wider text-sm">Pricing</h4>
                      <div className="space-y-3">
                        {treatment.pricing.map((price, i) => (
                          <div key={i} className="flex justify-between items-baseline border-b border-charcoal/5 pb-2">
                            <span className="text-charcoal/80 font-medium">{price.label}</span>
                            <span className="text-gold font-bold">{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a 
                      href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex justify-center items-center w-full px-6 py-3 bg-charcoal text-white text-sm font-bold uppercase tracking-widest hover:bg-gold transition-colors rounded-lg"
                    >
                      Book Now <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
