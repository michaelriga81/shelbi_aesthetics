import { motion } from "motion/react";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";

const locations = [
  {
    name: "Shelbi Aesthetics",
    address: "803 Massey Tompkins Rd",
    city: "Baytown, TX 77521",
    country: "United States",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=803+Massey+Tompkins+Rd+Baytown+TX+77521",
    image: "https://images.squarespace-cdn.com/content/v1/66c525b777bc8032004bde9f/7c9ea420-ec51-41c7-8fc8-bc525d458851/Screen+Shot+2024-08-27+at+1.58.15+PM.png",
    hours: "Mon-Fri: 9am - 5pm",
    phone: "(555) 123-4567"
  },
  {
    name: "The Salt Ranch",
    address: "4319 North Farm to Market 565 Road A",
    city: "Mont Belvieu, TX 77523",
    country: "United States",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=4319+North+Farm+to+Market+565+Road+A+Mont+Belvieu+TX+77523",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlq4-hvUeWAO2ABW8NoHkv-ko02Hrk48-sGQ&s",
    hours: "By Appointment Only"
  }
];

export default function Locations() {
  return (
    <main className="min-h-screen font-sans text-charcoal">
      
      {/* Header Section */}
      <section className="pt-32 pb-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6"
            >
              Our Locations
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
              Visit us at one of our two convenient locations in the Baytown and Mont Belvieu area.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                {/* Image Card */}
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-serif text-white mb-2">{location.name}</h2>
                    <p className="text-white/90 flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-gold" />
                      {location.city}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="bg-sand/20 rounded-3xl p-8 border border-sand/50">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full shadow-sm mr-4 shrink-0">
                        <MapPin className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal mb-1">Address</h3>
                        <p className="text-charcoal/70">{location.address}</p>
                        <p className="text-charcoal/70">{location.city}</p>
                        <p className="text-charcoal/70">{location.country}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full shadow-sm mr-4 shrink-0">
                        <Clock className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal mb-1">Hours</h3>
                        <p className="text-charcoal/70">{location.hours}</p>
                      </div>
                    </div>

                    <a 
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-4 bg-charcoal text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-gold transition-colors mt-6"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder for now, could be an embed) */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-charcoal mb-8">Find Us On The Map</h2>
          <div className="aspect-[21/9] w-full bg-white rounded-3xl shadow-sm overflow-hidden relative flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.597282767864!2d-94.9758!3d29.7495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f64c6a6a6a6a7%3A0x1234567890abcdef!2s803%20Massey%20Tompkins%20Rd%2C%20Baytown%2C%20TX%2077521!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Map of Locations"
              className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity"
            ></iframe>
            {/* Note: This is a generic embed link centered roughly on Baytown. Ideally, we'd use a real API key or specific embed code for multiple markers, but this serves the visual purpose. */}
          </div>
        </div>
      </section>

    </main>
  );
}
