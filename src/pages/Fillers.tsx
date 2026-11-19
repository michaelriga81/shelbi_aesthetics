import { motion } from "motion/react";
import { Check, Clock, ShieldCheck, Sparkles, ArrowRight, Info, Target, Zap, Smile, MapPin, Heart } from "lucide-react";

const treatments = [
  {
    name: "Cheek Filler",
    subtitle: "Lift & Contour",
    description: "Restore lost volume and define your cheekbones. As we age, we lose bone density and fat pads in the mid-face. Cheek filler replenishes this volume, providing a subtle lift that rejuvenates the entire face.",
    features: ["Restores Volume", "Lifts Lower Face", "Defines Cheekbones"],
    color: "bg-sand/30"
  },
  {
    name: "Lip Filler",
    subtitle: "Plump & Define",
    description: "Enhance the shape, structure, and volume of your lips. Whether you want a subtle hydration boost or a more voluminous pout, our expert injectors tailor the treatment to your aesthetic goals.",
    features: ["Natural Looking", "Hydrating", "Customizable Volume"],
    color: "bg-white border-sand"
  },
  {
    name: "Facial Symmetry",
    subtitle: "Balance & Harmony",
    description: "Correct asymmetries and balance facial features. Using strategic placement of dermal fillers, we can harmonize the chin, jawline, and other areas to create a more balanced and aesthetically pleasing profile.",
    features: ["Corrects Asymmetry", "Balances Profile", "Enhances Harmony"],
    color: "bg-sand/30"
  },
  {
    name: "Dermal Filler",
    subtitle: "Smooth & Restore",
    description: "A versatile solution for smoothing deep lines and folds, such as nasolabial folds and marionette lines. Dermal fillers restore a youthful smoothness to areas that have lost elasticity and volume.",
    features: ["Smooths Deep Lines", "Restores Youthfulness", "Versatile Treatment"],
    color: "bg-white border-sand"
  },
  {
    name: "SkinVive",
    subtitle: "Hydrate & Glow",
    description: "The first and only FDA-approved hyaluronic acid (HA) microdroplet injectable in the US to improve skin smoothness of the cheeks. It increases hydration to provide a lasting glow for up to 6 months.",
    features: ["Microdroplet HA", "Increases Hydration", "Lasting Glow"],
    color: "bg-sand/30"
  }
];

const treatmentAreas = [
  { name: "Cheeks", description: "Lift and contour the mid-face." },
  { name: "Lips", description: "Add volume and define shape." },
  { name: "Chin", description: "Project and balance the profile." },
  { name: "Jawline", description: "Define and sharpen the jawline." },
  { name: "Nasolabial Folds", description: "Soften smile lines." },
  { name: "Marionette Lines", description: "Lift the corners of the mouth." },
  { name: "Temples", description: "Restore volume to hollow temples." },
  { name: "Under Eyes", description: "Reduce the appearance of hollows." },
  { name: "Hands", description: "Rejuvenate aging hands." },
];

export default function Fillers() {
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
              Dermal Fillers
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
              Restore volume, smooth lines, and enhance your natural contours with our premium collection of dermal fillers.
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
                Hyaluronic Acid Fillers
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Dermal fillers are gel-like substances injected beneath the skin to restore lost volume, smooth lines, and soften creases, or enhance facial contours.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                Most modern fillers are made of Hyaluronic Acid (HA), a naturally occurring substance in your body that helps keep skin plump and hydrated.
              </p>

              {/* Image Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-sand/30 mb-8">
                <img 
                  src="https://markmedicalcare.com/wp-content/uploads/2023/05/cosmetic-fillers.jpeg" 
                  alt="Dermal Filler Treatment" 
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
                Volume & Structure
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Fillers work by physically filling the area under the skin. The HA gel integrates with your tissues, attracting water molecules to maintain volume and hydration.
              </p>

              {/* Image Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-white mb-8">
                <img 
                  src="https://estrogenica.com/wp-content/uploads/2024/11/Why-You-Should-Get-Cheek-Dermal-Fillers.png" 
                  alt="How fillers work" 
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
                    <h4 className="font-bold text-charcoal">Instant Results</h4>
                    <p className="text-sm text-charcoal/60">See the transformation immediately after treatment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 mt-1">
                    <Heart className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Collagen Support</h4>
                    <p className="text-sm text-charcoal/60">Some fillers also stimulate your body's own collagen production.</p>
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
              We can treat multiple areas to achieve full-face rejuvenation.
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
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Our Filler Treatments</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Tailored solutions for every aesthetic need.
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
                  {treatment.name === "Lip Filler" && <Smile className="w-6 h-6 text-gold" />}
                  {treatment.name === "Cheek Filler" && <Sparkles className="w-6 h-6 text-charcoal/50" />}
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

    </main>
  );
}
