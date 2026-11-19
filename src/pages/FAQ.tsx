import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Appointments & Booking",
    questions: [
      {
        question: "How do I book an appointment?",
        answer: "You can book an appointment directly through our online booking portal linked in the navigation bar. Alternatively, you can call our office during business hours."
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require at least 24 hours' notice for cancellations or rescheduling. Cancellations made within 24 hours of the appointment time may be subject to a cancellation fee."
      },
      {
        question: "Do you require a deposit?",
        answer: "Yes, a deposit is required to secure your appointment time. This deposit will be applied toward your treatment cost on the day of your visit."
      }
    ]
  },
  {
    category: "Treatments & Services",
    questions: [
      {
        question: "Do I need a consultation before my treatment?",
        answer: "For most new patients, we highly recommend a consultation. This allows us to assess your skin, discuss your goals, and create a personalized treatment plan tailored to your needs."
      },
      {
        question: "How long do dermal fillers last?",
        answer: "The longevity of dermal fillers varies depending on the type of filler used and the area treated. Generally, results can last anywhere from 6 to 18 months."
      },
      {
        question: "Is there downtime after a chemical peel?",
        answer: "Downtime depends on the depth of the peel. Light peels may cause little to no peeling, while deeper peels can result in 3-7 days of flaking and redness. Your provider will give you detailed aftercare instructions."
      }
    ]
  },
  {
    category: "Pre & Post Care",
    questions: [
      {
        question: "Can I wear makeup after my appointment?",
        answer: "It is generally recommended to avoid wearing makeup for at least 24 hours after most facial treatments and injectables to allow your skin to heal and prevent infection."
      },
      {
        question: "What should I avoid before my injectable appointment?",
        answer: "To minimize bruising, we recommend avoiding blood-thinning medications and supplements (such as aspirin, ibuprofen, fish oil, and vitamin E) for a few days prior to your appointment, unless prescribed by a doctor. Alcohol should also be avoided for 24 hours before treatment."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-sand font-sans text-charcoal">
      {/* Header Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-4"
            >
              <div className="bg-white p-3 rounded-full shadow-sm">
                <HelpCircle className="w-8 h-8 text-gold" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6"
            >
              Frequently Asked Questions
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
              Find answers to common questions about our services, policies, and what to expect during your visit.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-serif text-charcoal mb-6 border-b border-charcoal/10 pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const isOpen = openIndex === `${catIndex}-${qIndex}`;
                  return (
                    <div
                      key={qIndex}
                      className="bg-white rounded-2xl border border-charcoal/5 overflow-hidden transition-shadow hover:shadow-sm"
                    >
                      <button
                        onClick={() => toggleAccordion(`${catIndex}-${qIndex}`)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className="font-medium text-lg text-charcoal pr-8">
                          {faq.question}
                        </span>
                        <span className="flex-shrink-0 text-gold">
                          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-charcoal/70 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
