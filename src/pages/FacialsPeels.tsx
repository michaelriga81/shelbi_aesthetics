import { motion } from "motion/react";
import { ArrowRight, Info, Clock, Target, Sparkles } from "lucide-react";

const hydrafacials = [
  {
    name: "Signature Hydrafacial",
    duration: "45 Minutes",
    description: "Deeply purify, nourish, and protect the skin through our super serums filled with antioxidants and hyaluronic acid.",
  },
  {
    name: "Deluxe Hydrafacial",
    duration: "60 Minutes",
    description: "A refreshing treatment which includes all the essentials of the Signature Hydrafacial while also addressing specific skin concerns using Hydrafacial's super serums to yield visible results. This is coupled with professional strength therapeutic light energy to treat skin from within.",
  },
  {
    name: "Platinum Hydrafacial",
    duration: "75 Minutes",
    description: "The ultimate Hydrafacial experience! Begin with soothing lymphatic drainage to reduce puffiness and provide the appearance of lifting and contouring. Next, reveal smooth texture and vibrant skin clarity with a purifying cleanse, gentle chemical peel, and pain-free extractions using patented Vortex-Fusion technology. Finally, targeted super serums and LED therapy enhance results for personalized skin concerns, and the treatment concludes by bathing the skin with nourishing hydration and antioxidants for the ultimate glow and best skin of your life!",
  }
];

export default function FacialsPeels() {
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
            Facials & Peels
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Rejuvenate your skin with our customized facials, chemical peels, and advanced microneedling treatments designed to reveal your natural, radiant glow.
          </p>
        </motion.div>

        {/* Hydrafacials Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl font-serif text-charcoal mb-4">Hydrafacials</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A HydraFacial is a non-invasive, multi-step facial treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one session. HydraFacials are suitable for all skin types and are known for their ability to improve overall skin health and appearance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hydrafacials.map((facial, index) => (
              <motion.div
                key={facial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-blush/30 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-serif text-charcoal">{facial.name}</h4>
                </div>
                <div className="flex items-center text-gold mb-6 text-sm font-semibold tracking-wider uppercase">
                  <Clock className="w-4 h-4 mr-2" />
                  {facial.duration}
                </div>
                <p className="text-charcoal/70 leading-relaxed mb-8 flex-grow">
                  {facial.description}
                </p>
                <a 
                  href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors mt-auto"
                >
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Joya Annual Skin Cancer Screening */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-white p-8 md:p-12 rounded-3xl border border-blush/30 shadow-sm flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <h3 className="text-3xl font-serif text-charcoal mb-4">Joya Annual Skin Cancer Screening</h3>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Early detection is key. We are proud to offer annual skin cancer screenings in partnership with Joya. Ensure your skin's health with a professional examination designed to identify potential issues early.
            </p>
            <a 
              href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors"
            >
              Book Screening <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
          <div className="flex-shrink-0 bg-gold/10 p-6 rounded-full">
            <Target className="w-16 h-16 text-gold" strokeWidth={1} />
          </div>
        </motion.div>

        {/* Hydro Glass & Dermaplaning Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Hydro Glass Facial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-blush/30 shadow-sm flex flex-col"
          >
            <h3 className="text-3xl font-serif text-charcoal mb-6">Hydro Glass Facial</h3>
            <div className="space-y-6 text-charcoal/70 leading-relaxed flex-grow">
              <p>
                Achieve the ultimate "glass skin" look with our Hydro Glass Facial. This treatment deeply hydrates, refines pores, and smooths texture for a luminous, translucent complexion.
              </p>
            </div>
            <a 
              href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors mt-8"
            >
              Book Now <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

          {/* Dermaplaning Facial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-blush/30 shadow-sm flex flex-col"
          >
            <h3 className="text-3xl font-serif text-charcoal mb-6">Dermaplaning Facial</h3>
            <div className="space-y-6 text-charcoal/70 leading-relaxed flex-grow">
              <p>
                A manual exfoliation treatment that gently removes dead skin cells and vellus hair (peach fuzz), leaving your skin incredibly smooth and allowing for better product absorption and flawless makeup application.
              </p>
            </div>
            <a 
              href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors mt-8"
            >
              Book Now <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>

        {/* Elastic Labs Skincare */}
        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-charcoal text-white p-8 md:p-12 rounded-3xl shadow-sm flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles className="w-32 h-32 text-gold" />
            </div>
            <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-2 font-semibold">
              Skincare
            </h3>
            <h4 className="text-3xl font-serif mb-6 relative z-10">Elastic Labs Skincare</h4>
            <div className="space-y-6 text-white/80 leading-relaxed flex-grow relative z-10">
              <p>
                (Product details coming soon)
              </p>
            </div>
            <a 
              href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm tracking-widest uppercase text-gold font-semibold hover:text-white transition-colors mt-8 relative z-10"
            >
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
