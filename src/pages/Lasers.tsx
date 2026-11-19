import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Clock, Target, MapPin, Sparkles, ArrowRight } from "lucide-react";

const laserServices = [
  {
    name: "BBL hero/BBL heroic",
    description: "BBL is for the correction of pigment, sun damage, aging skin, age spots, collagen stimulation, texture, and more.",
    duration: "15 minutes"
  },
  {
    name: "Clear V",
    description: "A laser treatment to help reduce the appearance of spider veins. This treatment reduces the pesky veins on the face and body.",
    duration: "30 minutes"
  },
  {
    name: "Diva Women's Vaginal Rejuvenation",
    description: "What does Diva do? Diva treats dryness, pain during intercourse, mild urinary incontinence, and promotes overall vaginal health.",
    duration: "30 minutes"
  },
  {
    name: "Forever Bare - Laser hair removal first time consultation",
    description: "BBL Forever Bare Dare to be Forever Bare - Reveal beautiful skin! Revolutionary hair removal procedure that is fast, comfortable, and effective.",
    duration: "30 minutes"
  },
  {
    name: "Forever Bare - Laser hair removal repeat",
    description: "BBL Forever Bare Dare to be Forever Bare - Reveal beautiful skin! Revolutionary hair removal procedure for maintenance and ongoing results.",
    duration: "30 minutes"
  },
  {
    name: "Forever Clear/Acne BBL package of 3 $950",
    description: "Get rid of acne with the speed of light! Forever Clear BBL is a cutting-edge acne treatment that uses the power of light to comfortably and effectively clear acne without creams or medicine.",
    duration: "15 minutes"
  },
  {
    name: "Halo Treatment",
    description: "HALO™ precisely targets years of damage to your skin, including: • Wrinkles • Discoloration • Sun Damage • Visible Signs of Aging • Enlarged Pores • Poor Skin Appearance.",
    duration: "45 minutes"
  },
  {
    name: "Halo+BBL Heroric combo",
    description: "Available till 3/31/26. A powerful combination of Halo and BBL Hero for comprehensive skin rejuvenation.",
    duration: "45 minutes"
  },
  {
    name: "Micro Laser Peel - Consultation required",
    description: "A micro laser peel is a laser peel that targets wrinkles, sagging skin, pigment problems, and overall texture.",
    duration: "30 minutes"
  },
  {
    name: "Moxi",
    description: "Specifically designed for targeting preventative anti-aging measures, MOXI’s fractionated 1927 nm wavelength leaves you with a glowing and refreshed complexion.",
    duration: "30 minutes"
  },
  {
    name: "Moxi add hair exosomes",
    description: "Moxi exosomes straight into your scalp with little to no pain and give your scalp an overhaul at the cellular level.",
    duration: "15 minutes"
  },
  {
    name: "NanoLaserPeel - Consultation required",
    description: "NanoLaserPeel removes a thin layer of damaged skin to improve texture and provide a more youthful appearance.",
    duration: "30 minutes"
  },
  {
    name: "Profractional - Consultation required",
    description: "A laser resurfacing treatment to help reduce the appearance of scaring and deep lines. Come with a clean face.",
    duration: "60 minutes"
  },
  {
    name: "Resurfacing - CONSULTATION REQUIRED BEFORE BOOKING",
    description: "Consultation Required before booking this treatment. Come with a clean face if you want your face to be treated.",
    duration: "90 minutes"
  },
  {
    name: "Skin Tyte",
    description: "SkinTyte - Love the skin you're in! As we age, skin loses its youthful firmness and cushion. Especially effective for the neck and jawline.",
    duration: "30 minutes"
  },
  {
    name: "Triple Stack (Halo Moxi & BBL)",
    description: "Laser Service that will include Halo, Moxi and BBL for the ultimate skin transformation.",
    duration: "60 minutes"
  }
];

export default function Lasers() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (name: string) => {
    setOpenService(openService === name ? null : name);
  };

  return (
    <main className="pt-32 pb-24 bg-sand min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
            Services
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
            Laser Skin Treatments
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Laser skin treatments use cutting-edge, medical-grade technologies designed to address a wide range of skin concerns with precision and minimal downtime. These advanced lasers offer customizable treatments that can improve skin tone, texture, and clarity, making them ideal for both corrective and cosmetic enhancements. Whether you're looking to target sun damage, reduce redness, or achieve a youthful glow, lasers provide versatile solutions tailored to your specific needs.
          </p>
        </motion.div>

        {/* The 4 W's and H Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-blush/30 mb-24"
        >
          <h3 className="text-2xl font-serif text-charcoal mb-8 text-center">Understanding Laser Treatments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center text-gold mb-2">
                <Target className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">Who</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Ideal for individuals looking to improve skin texture, tone, reduce signs of aging, sun damage, acne scars, or remove unwanted hair.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gold mb-2">
                <Info className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">What</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Advanced medical-grade laser and light-based therapies (like BBL and HALO) that target specific skin concerns at various depths.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gold mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">When</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Treatment times vary from 15 to 60 minutes. Some treatments require minimal downtime, while deeper resurfacing may require a few days of recovery.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gold mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">Where</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Commonly performed on the face, neck, chest, hands, and other body areas experiencing sun damage, aging, or unwanted hair.
              </p>
            </div>
            <div className="space-y-3 lg:col-span-2">
              <div className="flex items-center text-gold mb-2">
                <Sparkles className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">How</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Lasers use focused light energy to gently heat targeted layers of the skin, stimulating collagen production, breaking up pigment, or removing damaged tissue to reveal healthier, radiant skin.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-sm"
            >
              <img
                src="https://dermsurgery.net/wp-content/uploads/2024/09/Untitled-design-2024-09-12T105216.382.png"
                alt="Laser Treatment"
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
                src="https://www.drandrewfrankel.com/wp-content/uploads/2023/12/laser-skin-resurfacing-side-effects-dr-frankel-beverly-hills-1.jpg"
                alt="Laser Results"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Profractional Lasering Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="https://sciton.com/wp-content/uploads/2023/02/Screenshot-2023-09-27-15.06-1.jpg"
                  alt="Profractional Laser"
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
              <h3 className="text-3xl font-serif text-charcoal mb-6">Profractional Lasering</h3>
              <div className="space-y-6 text-charcoal/80 leading-relaxed mb-10">
                <p>
                  Sciton's Profractional Laser is a minimally invasive fractional laser treatment that creates microscopic channels in the skin to stimulate the body's natural healing process.
                </p>
                <p>
                  When combined with PRP, the results are amplified. The micro-channels allow for deep penetration of PRP, accelerating healing and boosting collagen production for smoother, firmer, and more radiant skin.
                </p>
              </div>

              <a 
                href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-300"
              >
                Book Consultation
              </a>
            </motion.div>
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="mb-16">
          <h3 className="text-4xl lg:text-5xl font-serif text-charcoal mb-12 text-center">
            Our Laser Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laserServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-blush/30 hover:shadow-md transition-shadow group flex flex-col h-full"
              >
                <h4 className="text-2xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors">
                  {service.name}
                </h4>
                <div className="flex items-center text-sm text-charcoal/60 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{service.duration}</span>
                </div>
                <p className="text-charcoal/70 leading-relaxed mb-8 flex-grow">
                  {service.description}
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

      </div>
    </main>
  );
}
