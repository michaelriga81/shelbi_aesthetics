import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, CreditCard, X, ChevronRight } from "lucide-react";

const memberships = [
  {
    name: "Give Me Everything",
    price: "159.00",
    details: [
      "Contact us for full details on this membership tier."
    ]
  },
  {
    name: "Good Skin Club- Pink Tier",
    price: "150.00",
    details: [
      "Contact us for full details on this membership tier."
    ]
  },
  {
    name: "Gold Membership",
    price: "159.00",
    details: [
      "Special Pricing: $7.50/Unit Daxxify | $4.50/Unit Dysport | $9.50/Unit Jeuveau",
      "5% Off Services, Treatments, & Packages (Excludes: HydraFacials)",
      "5% Off All Products",
      "$50 Complimentary Birthday Credit to Your Account",
      "Free Customized Treatment Plan by TSR Provider",
      "Free Visia Skin Analysis + Consultation by TSR Provider",
      "Exclusive VIP Specials & Events",
      "Priority Booking"
    ]
  },
  {
    name: "Elite MemberShip",
    price: "259.00",
    details: [
      "Special Pricing: $7/Unit Daxxify | $4/Unit Dysport | $9/Unit Jeuveau",
      "10% Off Services, Treatments, & Packages",
      "10% Off All Products",
      "HydraFacials: $150 Signature | $200 Deluxe | $250 Platinum",
      "$50 Off Syringe of Filler",
      "$50 Complimentary Birthday Credit to Your Account",
      "ClearSilk Complimentary Birthday Treatment",
      "Free diVaTyte Package with Any diVa Package Purchase",
      "Free Customized Treatment Plan by TSR Provider",
      "Free Visia Skin Analysis + Consultation by TSR Provider",
      "Exclusive VIP Specials & Events",
      "Priority Booking"
    ]
  },
  {
    name: "The Wellness Base",
    price: "149.00",
    details: [
      "Contact us for full details on this membership tier."
    ]
  },
  {
    name: "Beauty+Biohacking",
    price: "325.00",
    details: [
      "Contact us for full details on this membership tier."
    ]
  }
];

export default function Membership() {
  const [selectedMembership, setSelectedMembership] = useState<typeof memberships[0] | null>(null);

  return (
    <main className="pt-48 pb-24 bg-white min-h-screen font-sans text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-charcoal mb-2"
          >
            Choose Your Membership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-charcoal/60 text-lg"
          >
            Select a membership plan that works for you
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberships.map((membership, index) => (
            <motion.div
              key={membership.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-charcoal mb-6">
                <CreditCard className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-charcoal mb-2">{membership.name}</h3>
              
              <div className="flex items-baseline mb-1">
                <span className="text-3xl font-bold text-charcoal">${membership.price}</span>
                <span className="text-charcoal/60 ml-1">/Month</span>
              </div>
              
              <p className="text-xs text-charcoal/50 mb-6">Additional charges may apply</p>
              
              <button 
                onClick={() => setSelectedMembership(membership)}
                className="text-sm font-bold text-charcoal mb-8 text-left hover:underline"
              >
                Read More
              </button>
              
              <div className="mt-auto">
                <a 
                  href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-charcoal/90 transition-colors"
                >
                  Join Now <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inner Circle */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-3">The Inner Circle</h2>
            <div className="h-px w-16 bg-gold mx-auto mb-4"></div>
            <p className="font-serif text-xl text-charcoal mb-3">Exclusive beauty. Elevated perks. VIP access.</p>
            <p className="text-charcoal/70 text-sm md:text-base max-w-2xl mx-auto">
              For a limited time, join the Shelbi Aesthetics membership family and enjoy exclusive gifts and a little extra VIP treatment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { tier: "Gold", perks: ["Join with a 6-month commitment and receive a complimentary Exoblanc PDRN Spray"] },
              { tier: "Elite", perks: ["Join with a 6-month commitment and receive a complimentary Exoblanc PDRN Spray + Exoblanc Refine Peel"] },
            ].map((t, i) => (
              <motion.div
                key={t.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-gold/40 bg-sand/30 p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">6-Month Commitment</p>
                <h3 className="text-2xl font-serif text-charcoal mb-5">{t.tier} Membership</h3>
                <ul className="space-y-3">
                  {t.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-charcoal/80">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 text-sm text-charcoal/80 space-y-2">
            <p>Both memberships include an exclusive invitation to our Members-Only VIP Evening at The Salt Ranch.</p>
            <p className="italic">An intimate evening of champagne, beauty, appreciation, and a few special surprises.</p>
            <p className="text-xs text-charcoal/60 pt-2">Limited-time enrollment special. Six-month membership commitment required.</p>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-sand/30 p-8 rounded-2xl border border-gold/20 text-center max-w-4xl mx-auto space-y-4 text-sm text-charcoal/80"
        >
          <p className="font-serif text-lg text-charcoal mb-2">
            Your Monthly Credit May be Used Immediately OR Banked & Applied
            Towards Future Visits.
          </p>
          <p className="leading-relaxed">
            Our Beauty Bank is uniquely structured to provide flexibility as you
            bank monthly credits for bigger procedures, or use them as often as
            you choose for more frequent treatments or products. How you use
            your membership is entirely up to you!
          </p>
          <p className="font-medium text-charcoal mt-6 uppercase tracking-widest text-xs">
            * Memberships are non-refundable
          </p>
        </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedMembership && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedMembership(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-charcoal" />
              </button>

              <h3 className="text-2xl font-serif text-charcoal mb-2">{selectedMembership.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-gold">${selectedMembership.price}</span>
                <span className="text-charcoal/60 ml-1">/Month</span>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-charcoal/70">What's Included</h4>
                <ul className="space-y-3">
                  {selectedMembership.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm text-charcoal/80">
                      <Check className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a 
                  href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gold text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-charcoal transition-colors"
                >
                  Join This Membership
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
