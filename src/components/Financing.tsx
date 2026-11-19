import { motion } from "motion/react";
import { CreditCard, CheckCircle2 } from "lucide-react";

export default function Financing() {
  return (
    <section id="financing" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
              Financing Options
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-6 leading-tight">
              Beauty on Your Terms
            </h3>
            <p className="text-charcoal/80 text-base leading-relaxed mb-8">
              We believe that everyone deserves to feel confident and beautiful. That's why we offer flexible financing options to make your aesthetic goals a reality without the stress of upfront costs.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "0% interest options available for qualified patients",
                "Flexible monthly payment plans",
                "Quick and easy application process",
                "No hidden fees or prepayment penalties"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="inline-flex justify-center items-center px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-300"
              >
                Apply Now
              </a>
              <a
                href="#learn-more"
                className="inline-flex justify-center items-center px-8 py-4 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-10 rounded-3xl border border-blush relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                <CreditCard className="w-8 h-8 text-gold" />
              </div>
              <h4 className="text-2xl font-serif text-charcoal mb-4">Cherry, CareCredit, Alle & Aspire</h4>
              <p className="text-charcoal/70 mb-6 leading-relaxed">
                We partner with leading healthcare financing providers like Cherry, CareCredit, Alle, and Aspire to offer you the best possible terms. Get approved in minutes and start your treatment today.
              </p>
              <div className="bg-sand p-6 rounded-2xl border border-blush/50">
                <p className="text-sm text-charcoal/80 italic text-center">
                  "The financing process was so simple and allowed me to get the full treatment plan I wanted right away."
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 -right-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
