import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, AlertCircle, Printer } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-32 pb-24 bg-sand min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
            Get in Touch
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
            Contact Us
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            We'd love to hear from you. Whether you have a question about our services, want to book an appointment, or need assistance, our team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information & Hours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif text-charcoal mb-6">Visit Us</h3>
              <ul className="space-y-6 text-charcoal/80">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-gold flex-shrink-0" />
                  <div>
                    <p className="font-medium text-charcoal">Shelbi Aesthetics</p>
                    <p>803 Massey Tompkins Road</p>
                    <p>Baytown, TX 77521</p>
                    <p className="text-sm italic mt-2 text-charcoal/60">HSA/FSA cards not accepted</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-gold flex-shrink-0" />
                  <p>(281) 757-3250</p>
                </li>
                <li className="flex items-center">
                  <AlertCircle className="w-6 h-6 mr-4 text-gold flex-shrink-0" />
                  <p>Emergency only: (832) 398-1362</p>
                </li>
                <li className="flex items-center">
                  <Printer className="w-6 h-6 mr-4 text-gold flex-shrink-0" />
                  <p>Fax: (281) 402-9211</p>
                </li>
                <li className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-gold flex-shrink-0" />
                  <a href="mailto:Shelbi@ShelbiAestheticsWellness.com" className="hover:text-gold transition-colors">
                    Shelbi@ShelbiAestheticsWellness.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-charcoal mb-6">Hours of Operation</h3>
              <ul className="space-y-4 text-charcoal/80">
                <li className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 text-gold flex-shrink-0" />
                  <div className="space-y-3 w-full max-w-xs">
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span className="font-medium">Sunday — Monday</span>
                      <span>Closed</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/10 pb-2">
                      <span className="font-medium">Tuesday — Friday</span>
                      <span>9:00 AM — 4:30 PM</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="font-medium">Saturday</span>
                      <span>9:00 AM — 12:00 PM</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-blush/30"
          >
            <h3 className="text-2xl font-serif text-charcoal mb-6">Send us a Message</h3>
            <form action="https://formsubmit.co/shelbi@shelbiaestheticswellness.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Contact Form Submission - Shelbi Aesthetics" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-charcoal">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="First Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-sand/30"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-charcoal">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="Last Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-sand/30"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-charcoal">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-sand/30"
                  placeholder="jane@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-charcoal">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="Phone"
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-sand/30"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-charcoal">Message</label>
                <textarea 
                  id="message" 
                  name="Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/20 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-sand/30 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-gold text-white text-sm tracking-widest uppercase font-semibold hover:bg-charcoal transition-colors rounded-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
