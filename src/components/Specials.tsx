import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

const BOOKING_URL = "https://shelbiaesthetics.myaestheticrecord.com/online-booking";

const glowIncludes = [
  "Personalized skin consultation",
  "Advanced skin analysis",
  "Customized microneedling treatment with a skin booster",
  "ExoBlanc post-treatment skincare gift (spray)",
  "Personalized 90-day skin plan",
  "$50 credit toward your next treatment of $400 or more",
];

const packages = [
  {
    name: "The Collagen Collective",
    price: 4850,
    value: 6000,
    includes: [
      "1 Density treatment",
      "2 Sculptra",
      "Full Exoblanc skincare",
      "3 SkinPen with Elastic Lab booster",
    ],
  },
  {
    name: "The Age Edit",
    price: 1800,
    value: 2300,
    includes: ["100 units of Tox", "1 RF microneedling with PN Pro"],
  },
  {
    name: "The Complexion Correction",
    price: 1400,
    value: 1750,
    includes: [
      "BBL/Moxi with Whitebloom",
      "Colorscience sunscreen",
      "4-piece skincare: Exoblanc cleanser, toner, boosting cream & Hydropeptide Luma Pro C",
    ],
  },
];

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function Specials() {
  return (
    <section id="specials" className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            November Specials
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-pink mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 max-w-2xl mx-auto text-sm md:text-base"
          >
            Take advantage of our exclusive offers this month to enhance your natural beauty and rejuvenate your skin.
          </motion.p>
        </div>

        {/* Year-round feature offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="relative max-w-4xl mx-auto mb-12 rounded-3xl border border-gold/60 bg-white/5 p-8 md:p-12 overflow-hidden"
        >
          <div className="animate-float-slow absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gold/20 blur-3xl pointer-events-none"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 text-center md:text-left">
              <p className="inline-flex items-center gap-2 text-pink text-xs tracking-[0.25em] uppercase mb-4">
                <Sparkles className="w-4 h-4" /> New Patients Only
              </p>
              <h3 className="font-serif text-3xl md:text-4xl mb-3">The Shelbi Glow Experience</h3>
              <p className="font-serif text-5xl text-pink mb-2">$399</p>
              <p className="font-serif italic text-white/80 mb-6">Your first step toward your best skin.</p>
              <motion.a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shimmer inline-block px-8 py-4 bg-white text-charcoal font-semibold text-sm tracking-widest uppercase hover:bg-pink hover:text-white transition-colors duration-300"
              >
                Book Your Glow
              </motion.a>
            </div>
            <ul className="md:col-span-3 space-y-4">
              {glowIncludes.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 text-white/90 text-sm md:text-base"
                >
                  <Check className="w-5 h-5 text-pink shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* November packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/10 bg-white/5 hover:border-pink/60 hover:shadow-2xl transition-colors duration-300 p-8 text-center flex flex-col"
            >
              <h3 className="font-serif text-2xl mb-6">{pkg.name}</h3>
              <p className="font-serif text-5xl text-pink mb-2">{usd(pkg.price)}</p>
              <p className="text-white/60 text-sm mb-1">
                <span className="line-through">{usd(pkg.value)}</span> value
              </p>
              <p className="text-gold text-xs tracking-widest uppercase mb-6">
                Save {usd(pkg.value - pkg.price)}
              </p>
              <ul className="space-y-3 text-left mb-8">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <Check className="w-4 h-4 text-pink shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-6 py-3 border border-white/70 text-white text-xs tracking-widest uppercase hover:bg-white hover:text-charcoal transition-colors duration-300"
              >
                Book a Consultation
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/50 text-xs mt-10">
          Offers cannot be combined with any other promotions, discounts, or special offers.
        </p>
      </div>
    </section>
  );
}
