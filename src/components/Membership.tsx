import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            Beauty Bank Membership Options
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-gold mx-auto mb-6"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-charcoal/80 max-w-2xl mx-auto text-lg"
          >
            <p className="mb-2">Savings account for treatments with us!</p>
            <p>Call anytime to add money to your Beauty Bank</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Gold Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="text-center mb-8 relative">
              <h3 className="text-3xl font-serif text-charcoal inline-block relative z-10">
                Gold Tier
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blush/80 -z-10 transform -rotate-1"></span>
              </h3>
            </div>
            
            <div className="border-t border-charcoal/20 pt-6">
              <div className="flex justify-between items-center mb-6 cursor-pointer group">
                <h4 className="text-xl font-serif text-charcoal">See what is included</h4>
                <span className="text-charcoal/50 group-hover:text-charcoal transition-colors">—</span>
              </div>
              
              <div className="mb-6">
                <p className="font-bold text-charcoal mb-4">$159 per month</p>
                <p className="font-bold text-charcoal text-sm tracking-widest uppercase mb-4">Membership Includes:</p>
                
                <ul className="space-y-4 text-charcoal/80 text-sm leading-relaxed">
                  <li>$7.50/Unit Daxxify | $4.50/Unit Dysport | $9.50/Unit Jeuveau</li>
                  <li>
                    <span className="font-bold">5% Off</span> Services, Treatments, & Packages<br/>
                    <span className="italic text-xs">(Excludes: HydraFacials)</span>
                  </li>
                  <li><span className="font-bold">5% Off</span> All Products</li>
                  <li><span className="font-bold">$50</span> Complimentary Birthday Credit to Your Account</li>
                  <li><span className="font-bold">Free</span> Customized Treatment Plan by TSR Provider</li>
                  <li><span className="font-bold">Free</span> Visia Skin Analysis + Consultation by TSR Provider</li>
                  <li><span className="font-bold">Exclusive</span> VIP Specials & Events</li>
                  <li><span className="font-bold">Priority</span> Booking</li>
                </ul>
              </div>
            </div>
            <div className="border-b border-charcoal/20 mt-auto pt-6"></div>
          </motion.div>

          {/* Elite Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="text-center mb-8 relative">
              <h3 className="text-3xl font-serif text-charcoal inline-block relative z-10">
                Elite Tier
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blush/80 -z-10 transform -rotate-1"></span>
              </h3>
            </div>
            
            <div className="border-t border-charcoal/20 pt-6">
              <div className="flex justify-between items-center mb-6 cursor-pointer group">
                <h4 className="text-xl font-serif text-charcoal">See what is included</h4>
                <span className="text-charcoal/50 group-hover:text-charcoal transition-colors">—</span>
              </div>
              
              <div className="mb-6">
                <p className="font-bold text-charcoal mb-4">$259 per month</p>
                <p className="font-bold text-charcoal text-sm tracking-widest uppercase mb-4">Membership Includes:</p>
                
                <ul className="space-y-4 text-charcoal/80 text-sm leading-relaxed">
                  <li>$7/Unit Daxxify | $4/Unit Dysport | $9/Unit Jeuveau</li>
                  <li><span className="font-bold">10% Off</span> Services, Treatments, & Packages</li>
                  <li><span className="font-bold">10% Off</span> All Products</li>
                  <li>
                    <span className="font-bold">HydraFacials:</span><br/>
                    $150 Signature | $200 Deluxe | $250 Platinum
                  </li>
                  <li><span className="font-bold">$50 Off</span> Syringe of Filler</li>
                  <li><span className="font-bold">$50</span> Complimentary Birthday Credit to Your Account</li>
                  <li><span className="font-bold">ClearSilk</span> Complimentary Birthday Treatment</li>
                  <li><span className="font-bold">Free</span> diVaTyte Package with Any diVa Package Purchase</li>
                  <li><span className="font-bold">Free</span> Customized Treatment Plan by TSR Provider</li>
                  <li><span className="font-bold">Free</span> Visia Skin Analysis + Consultation by TSR Provider</li>
                  <li><span className="font-bold">Exclusive</span> VIP Specials & Events</li>
                  <li><span className="font-bold">Priority</span> Booking</li>
                </ul>
              </div>
            </div>
            <div className="border-b border-charcoal/20 mt-auto pt-6"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto text-charcoal/80 text-sm leading-relaxed space-y-4"
        >
          <p className="font-bold text-charcoal">
            Your Monthly Credit May be Used Immediately OR Banked & Applied Towards Future Visits.
          </p>
          <p>
            Our Beauty Bank is uniquely structured to provide flexibility as you bank monthly credits for bigger procedures, or use them as often as you choose for more frequent treatments or products. How you use your membership is entirely up to you!
          </p>
          <p className="font-bold text-charcoal mt-6">Non-refundable</p>
        </motion.div>
      </div>
    </section>
  );
}
