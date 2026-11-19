import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 bg-sand min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-blush/30"
        >
          <h1 className="text-4xl font-serif text-charcoal mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-charcoal/80 leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">1. Introduction</h2>
              <p>
                Welcome to Shelbi Aesthetics. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Health Data</strong> includes medical history and information relevant to the aesthetic treatments you receive.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing treatments).</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. 
                In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
