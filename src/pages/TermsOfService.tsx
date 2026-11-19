import { motion } from "motion/react";

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-24 bg-sand min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-blush/30"
        >
          <h1 className="text-4xl font-serif text-charcoal mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-charcoal/80 leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, then you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">2. Medical Disclaimer</h2>
              <p>
                The content on this website is provided for informational purposes only and is not intended as medical advice, 
                nor is it a substitute for professional medical expertise or treatment. Always seek the advice of your physician 
                or other qualified health provider with any questions you may have regarding a medical condition or treatment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">3. Appointments and Cancellations</h2>
              <p>
                We require a minimum of 24 hours notice for cancellation or rescheduling of appointments. 
                Failure to provide sufficient notice may result in a cancellation fee. We reserve the right to 
                refuse service to anyone for any reason at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">4. Payment and Pricing</h2>
              <p>
                All prices are subject to change without notice. Payment is due at the time of service unless 
                other arrangements have been made in advance. We accept major credit cards and cash. We do not accept HSA/FSA cards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">5. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive 
                property of Shelbi Aesthetics and its licensors. The Service is protected by copyright, trademark, 
                and other laws of both the United States and foreign countries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                Email: Shelbi@ShelbiAestheticsWellness.com
                <br />
                Phone: (281) 757-3250
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
