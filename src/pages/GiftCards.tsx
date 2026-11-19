import { motion } from "motion/react";
import { Gift, ChevronRight } from "lucide-react";

const giftCards = [
  { value: 100, price: 100 },
  { value: 250, price: 250 },
  { value: 300, price: 300, isSpecial: true },
  { value: 400, price: 400 },
  { value: 500, price: 500 },
  { value: 750, price: 750 },
  { value: 1000, price: 1000 },
];

export default function GiftCards() {
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
            Choose Your Giftcard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-charcoal/60 text-lg"
          >
            Select the perfect amount for your gift
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftCards.map((card, index) => (
            <motion.div
              key={card.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              {/* Card Image Area */}
              <div className={`h-64 flex items-center justify-center ${card.isSpecial ? 'bg-black' : 'bg-gray-200'}`}>
                <img 
                  src="https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Image%20from%20Michael%20Riga%20Mail.png" 
                  alt="Shelbi Aesthetics Logo" 
                  className={`w-48 h-48 object-contain ${card.isSpecial ? '' : 'brightness-0 opacity-50'}`}
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-charcoal mb-4">Shelbi Aesthetics</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-baseline">
                    <span className="font-bold text-charcoal/70 w-32">Giftcard value:</span>
                    <span className="font-bold text-charcoal">${card.value}</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="font-bold text-charcoal/70 w-32">Purchase price:</span>
                    <span className="font-bold text-charcoal">${card.price}</span>
                  </div>
                </div>
                
                <p className="text-xs text-charcoal/50 mb-8">Additional charges may apply</p>
                
                <div className="mt-auto">
                  <a 
                    href="https://shelbiaesthetics.myaestheticrecord.com/online-booking" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-charcoal text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-charcoal/90 transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
