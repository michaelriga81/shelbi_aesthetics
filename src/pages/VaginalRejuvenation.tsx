import { motion } from "motion/react";
import { Info, Clock, Target, MapPin, Sparkles } from "lucide-react";

export default function VaginalRejuvenation() {
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
            Vaginal Rejuvenation
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Elevate intimate wellness, comfort, and confidence with our premier laser vaginal rejuvenation treatments.
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
          <h3 className="text-2xl font-serif text-charcoal mb-8 text-center">Understanding Vaginal Rejuvenation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center text-gold mb-2">
                <Target className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">Who</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Ideal for women seeking relief from vaginal dryness, laxity, and intimate changes related to childbirth, menopause, or aging.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gold mb-2">
                <Info className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">What</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                An advanced, non-surgical laser treatment designed to improve vaginal tone, elasticity, and natural lubrication.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gold mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">When</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Treatments are performed in-office with minimal downtime, allowing you to return to your daily activities quickly.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gold mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">Where</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                The treatment targets the vaginal canal and surrounding tissues to stimulate collagen production and tissue renewal.
              </p>
            </div>
            <div className="space-y-3 lg:col-span-2">
              <div className="flex items-center text-gold mb-2">
                <Sparkles className="w-5 h-5 mr-2" />
                <h4 className="font-semibold uppercase tracking-wider text-sm">How</h4>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Using state-of-the-art hybrid fractional laser technology, the treatment gently stimulates collagen production and tissue renewal from the inside out, offering a discreet and comfortable experience.
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
                src="https://media.meer.com/attachments/fab1026dcd503986811212d6bf4f44b28551991c/store/fill/860/645/95695d4e4c4394fb92cc829a02c7b4ed57dae7e1d0e9a5c2cf9600084c5e/A-bright-woman.jpg"
                alt="Vaginal Rejuvenation"
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
                src="https://www.uhhospitals.org/-/media/images/blog/2018/08/tests-every-woman-should-have.jpg"
                alt="Women's Health"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Treatment Details */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-blush/30 shadow-sm"
          >
            <h3 className="text-3xl font-serif text-charcoal mb-6">diVa® by Sciton</h3>
            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                diVa® by Sciton is a premier laser vaginal rejuvenation treatment designed to elevate intimate wellness, comfort, and confidence. Using state-of-the-art hybrid fractional laser technology, diVa® gently stimulates collagen production and tissue renewal to improve vaginal tone, elasticity, and natural lubrication—from the inside out.
              </p>
              <p>
                This advanced, non-surgical treatment is ideal for women seeking relief from vaginal dryness, laxity, and intimate changes related to childbirth, menopause, or aging. Performed in-office with minimal downtime, diVa® offers a discreet, comfortable experience with noticeable improvements in intimate health and sensation.
              </p>
              <p className="font-medium text-charcoal italic">
                Many patients report enhanced comfort, improved intimacy, and a renewed sense of confidence…making diVa® a trusted choice for women who want to feel like themselves again.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-charcoal/10 text-center">
              <a 
                href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-gold transition-colors duration-300"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
