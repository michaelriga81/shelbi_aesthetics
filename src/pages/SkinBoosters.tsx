import { motion } from "motion/react";
import { Check, ArrowRight, Info, Zap, Droplets, ShieldCheck, Activity, Sparkles } from "lucide-react";

const treatments = [
  {
    name: "Micron Jet Crystal Rose",
    subtitle: "Extreme Hydration & Glow",
    description: "Illuma crystal rose bleb facial using micron jet tip. Give your face extreme hydration and glow with these particular amino acids composed of glutathione and hyaluronic acid. It is used to stimulate fibroblasts, collagen and fight free radicals. Crystal Rose helps with dryness, provides moisture from the inside out and helps with elasticity.",
    details: [
      "Best results come with sessions of 3 one month apart.",
      "30 minute session"
    ],
    pricing: [
      { label: "Troughs", price: "$450 (1) or $1250 (3)" },
      { label: "Full Face", price: "$750 (1) or $1800 (3)" }
    ],
    color: "bg-sand/30"
  },
  {
    name: "Micron Jet Elastic Lab",
    subtitle: "Repair & Elasticity",
    description: "Elastic labs is one of our favorites! Not only does this one lighten pigment and repair wounds, promote collagen and hydrate, it provides elasticity to the tissue, inhibits scar formation, vascular calcification, cell migration, regulates matrix protease activity, and contains HA to moisturize the skin. Elastin increases over 300% and collagen increases over 200% to the area treated! Helps with Rosacea, skin tightening, pore size reduction and skin tone improvement.",
    details: [
      "Recommended: 3 treatments 2 weeks apart for optimal results.",
      "Consultation required for stretchmarks.",
      "30 minute session"
    ],
    pricing: [
      { label: "Under Eyes", price: "$700 (1) or $1800 (3)" },
      { label: "Full Face", price: "$900 (1) or $2200 (3)" }
    ],
    color: "bg-white border-sand"
  },
  {
    name: "MicronJet NAD",
    subtitle: "Cellular Regeneration",
    description: "MicronJet for Full Face or Under Eyes using exosomes and/or amino acids to help remove mild pigment, help with rosacea, brighten, tighten, build collagen, and help with acne. NAD is a vital coenzyme that contains over 500 cellular reactions including cell regeneration, oxidative stress reduction, and mitochondrial repair. It delivers instant cellular activation, supports collagen synthesis, improves skin elasticity, and aids in DNA repair.",
    details: [
      "Basic program: 2-3 treatments recommended for a month.",
      "Advanced: One session every 2-3 months.",
      "30 minute session"
    ],
    pricing: [
      { label: "Under Eyes", price: "$500 (1) or $1250 (3)" },
      { label: "Full Face", price: "$750 (1) or $1800 (3)" }
    ],
    color: "bg-sand/30"
  },
  {
    name: "MicronJet PN PRO",
    subtitle: "Deep Hydration & Revitalization",
    description: "This particular service is for Illuma PN Pro! PN Pro is Polynucleotide and hyaluronic acid from France to deeply hydrate and revitalize the skin. Polynucleotides support natural skin regeneration while hyaluronic acid helps retain moisture leaving the skin plump, smooth and more radiant. Helps improve the appearance of scars, wrinkles, pores, uneven skin tone, and improved elasticity.",
    details: [
      "Basic program: 2-3 treatments one month apart.",
      "Advanced: One session every 2-3 months."
    ],
    pricing: [
      { label: "Under Eyes", price: "$700 (1) or $1800 (3)" },
      { label: "Full Face", price: "$900 (1) or $2200 (3)" }
    ],
    color: "bg-white border-sand"
  }
];

export default function SkinBoosters() {
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
              Skin Boosters
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
              Advanced skin rejuvenation using the MicronJet system to deliver potent serums directly into the skin for maximum absorption and results.
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
                MicronJet Precision
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                The MicronJet system uses microscopic needles to create tiny channels in the skin, allowing for the precise delivery of active ingredients like exosomes and amino acids.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                This targeted approach stimulates collagen production, improves skin texture, and delivers deep hydration where your skin needs it most.
              </p>
              
              {/* Image Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-sand/30 mb-8">
                <img 
                  src="https://injectorjess.com/cdn/shop/files/istockphoto-1161353643-612x612.jpg?v=1734390013" 
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
                Why Choose MicronJet?
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <Droplets className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Deep Hydration</h4>
                    <p className="text-sm text-charcoal/60">Delivers moisture from the inside out.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <Activity className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Collagen Boost</h4>
                    <p className="text-sm text-charcoal/60">Stimulates fibroblasts and collagen production.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Skin Repair</h4>
                    <p className="text-sm text-charcoal/60">Helps with scarring, pigment, and rosacea.</p>
                  </div>
                </li>
              </ul>

              {/* Image Placeholder */}
              <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-white">
                <img 
                  src="https://trubiologix.com/wp-content/uploads/2025/10/MicronJet-Campaign.webp" 
                  alt="MicronJet Benefits" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Grid - BG Sand */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Our MicronJet Treatments</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Specialized formulations for every skin concern.
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
