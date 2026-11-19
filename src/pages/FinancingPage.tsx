import { motion } from "motion/react";
import { CreditCard, CheckCircle2, ArrowRight } from "lucide-react";

export default function FinancingPage() {
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
            Patient Resources
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
            Financing Options
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            We believe that everyone deserves to feel confident and beautiful. That's why we offer flexible financing options to make your aesthetic goals a reality without the stress of upfront costs.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-blush/30"
          >
            <h3 className="text-3xl font-serif text-charcoal mb-6">Beauty on Your Terms</h3>
            <p className="text-charcoal/80 text-base leading-relaxed mb-8">
              Achieve your aesthetic goals today and pay over time. We partner with leading healthcare financing providers to offer you the best possible terms.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "0% interest options available for qualified patients",
                "Flexible monthly payment plans",
                "Quick and easy application process",
                "No hidden fees or prepayment penalties",
                "Instant approval decisions"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Cherry */}
            <div className="bg-white p-8 rounded-2xl border border-blush/30 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center mr-4">
                  <CreditCard className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-2xl font-serif text-charcoal">Cherry</h4>
              </div>
              <p className="text-charcoal/70 mb-6 leading-relaxed">
                Get treated today and pay over time with Cherry. Cherry is a payment plan designed for your health, beauty, and wellness needs and procedures and allows you to make convenient monthly payments.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors"
              >
                Apply for Cherry <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* CareCredit */}
            <div className="bg-white p-8 rounded-2xl border border-blush/30 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center mr-4">
                  <CreditCard className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-2xl font-serif text-charcoal">CareCredit</h4>
              </div>
              <p className="text-charcoal/70 mb-6 leading-relaxed">
                CareCredit is a health, wellness, and personal care credit card that helps you pay for out-of-pocket expenses not covered by medical insurance.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-sm tracking-widest uppercase text-charcoal font-semibold hover:text-gold transition-colors"
              >
                Apply for CareCredit <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Rewards Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal text-white p-8 md:p-16 rounded-3xl text-center"
        >
          <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
            Rewards Programs
          </h3>
          <h4 className="text-3xl md:text-4xl font-serif mb-8">Allē & Aspire Rewards</h4>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Maximize your savings by joining our partner rewards programs. Earn points on qualifying treatments and products, and redeem them for savings on future visits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex justify-center items-center px-8 py-4 bg-white text-charcoal text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors duration-300"
            >
              Join Allē
            </a>
            <a 
              href="#" 
              className="inline-flex justify-center items-center px-8 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-charcoal transition-colors duration-300"
            >
              Join Aspire
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
