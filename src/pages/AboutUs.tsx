import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
              Our Team
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
              About Us
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Meet the dedicated professionals behind Shelbi Aesthetics and Wellness, committed to helping you look and feel your absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shelbi Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/304C2C4D-2078-4749-879A-EBA7D98530D3.PNG"
                  alt="Shelbi Turner, MSN, NP-C, FNP"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
                Founder & Lead Injector
              </h3>
              <h4 className="text-4xl font-serif text-charcoal mb-2">Shelbi Turner</h4>
              <p className="text-charcoal/60 font-medium mb-8 uppercase tracking-widest text-sm">MSN, NP-C, FNP</p>
              
              <div className="space-y-6 text-charcoal/80 leading-relaxed mb-10">
                <p>
                  I have been a nurse for over 27 years, and a trainer for Sciton lasers, TruBiologics, and Elastic Labs. I have been in the industry for 9 years now, and this is my passion.
                </p>
                <p>
                  Education and science are what drive the industry, and that is what I base my practice on. Regenerative medicine is the future, and that is how we treat people at Shelbi Aesthetics and Wellness.
                </p>
              </div>

              <a 
                href="/contact" 
                className="inline-flex justify-center items-center px-8 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-charcoal transition-colors duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kailey Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
                Aesthetic Nurse
              </h3>
              <h4 className="text-4xl font-serif mb-2">Kailey</h4>
              <p className="text-white/60 font-medium mb-8 uppercase tracking-widest text-sm">RN-BSN</p>
              
              <div className="space-y-6 text-white/80 leading-relaxed mb-10">
                <p>
                  Nurse since 2018 (fun fact Shelbi was my first nurse manager) have a wide range of experience including transplant, oncology, cardiology, etc. started working for shelbi in 2024.
                </p>
                <p>
                  Attended extensive trainings on anatomy and injections and became certified with Sciton Lasers, Allergan, Merz, Evoulous, Galderma. I love helping people enhance their natural beauty and seeing people’s reactions to their results is awesome.
                </p>
                <p>
                  I’m a wife and a mother to two of the coolest twin boys. I love going to church, lasers, The Price is Right, and tennis.
                </p>
                <p className="font-medium text-white">
                  I offer Tuesday evening appointments to those who work Monday-Friday.
                </p>
              </div>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-white/10">
                <img
                  src="https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/7FCD515B-FB53-4A72-B1E2-C8EA73DCAA01.PNG"
                  alt="Kailey, RN-BSN"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Jaci Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Jaci.png"
                  alt="Jaci, Front Desk Receptionist"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
                Front Desk Receptionist
              </h3>
              <h4 className="text-4xl font-serif text-charcoal mb-2">Jaci</h4>
              
              <div className="space-y-6 text-charcoal/80 leading-relaxed mb-10">
                <p>
                  My name is Jaci, and I am 24 years old. I currently work as a Front Desk Receptionist at Shelbi Aesthetics & Wellness, where I strive to bring positive energy and create a welcoming atmosphere for every client.
                </p>
                <p>
                  Aesthetics is truly my passion, and my ultimate goal is to become an injector. I am incredibly grateful for the opportunity to learn from Shelbi — she has taught me so much and continues to inspire me every day.
                </p>
                <p>
                  In my free time, I enjoy reading, watching movies, and going for runs. I genuinely love where I work and feel fortunate to be growing in an industry I’m so passionate about.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Jamie Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
                Aesthetic Nurse
              </h3>
              <h4 className="text-4xl font-serif mb-2">Jamie</h4>
              
              <div className="space-y-6 text-white/80 leading-relaxed mb-10">
                <p>
                  Hi, I’m Jamie — ICU nurse, aesthetics injector, and firm believer in blending science with artistry.
                </p>
                <p>
                  My years in critical care built the foundation of my aesthetics brand: precision, great bedside manner, and trust. With the excellent education Shelbi provided I approach every treatment with the same caring I bring to the bedside, creating results that are refined, natural, and uniquely you.
                </p>
                <p>
                  Outside of work, I’m grounded by my large family and entertained daily by our pets. I value balance, growth, and showing up fully — whether for my patients, my clients, or the people I love most.
                </p>
                <p className="font-medium text-white">
                  Nursing is my foundation. Aesthetics is my artistry. Family is my why
                </p>
              </div>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-white/10">
                <img
                  src="https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/E7EE077F-A577-4C14-B32E-81BF37FDDA24.png"
                  alt="Jamie, Aesthetic Nurse"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
 
      {/* Kristin Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/35D4C159-AEC8-4B3A-89B2-C632D40C1B24.png"
                  alt="Kristin, Aesthetic Consultant"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
                Aesthetic Consultant
              </h3>
              <h4 className="text-4xl font-serif text-charcoal mb-2">Kristin</h4>
              
              <div className="space-y-6 text-charcoal/80 leading-relaxed mb-10">
                <p>
                  I’m a mental health counselor who transitioned over to Aesthetics by coercion from my big sister! I have a big personality and love being around people. I thrive on helping people find their worth; so bringing their inner beauty out for the world to see!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dean Nassar Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
                Medical Director
              </h3>
              <h4 className="text-4xl font-serif mb-2">Dean Nassar</h4>
              
              <div className="space-y-6 text-white/80 leading-relaxed mb-10">
                <p>
                  Bio coming soon.
                </p>
              </div>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm border border-white/10">
                <img
                  src="/DeanNasser.png"
                  alt="Dean Nassar, Medical Director"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
