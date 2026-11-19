import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import HeroLines from "./HeroLines";

const headline = "Refine Your Natural Beauty".split(" ");

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/closeup-portrait-of-a-radiant-woman-with-fresh-skin-slow-motion-skincare-concept-yo-SBV-304886305-HD.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black/40 z-10"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        ></motion.div>
      </div>

      <HeroLines />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-4 flex items-center gap-4">
          <motion.span
            aria-hidden="true"
            className="block h-px w-10 md:w-20 bg-white/80 origin-right"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-sm md:text-base uppercase drop-shadow-xl font-medium"
          >
            Premier Medspa in Baytown, TX
          </motion.p>
          <motion.span
            aria-hidden="true"
            className="block h-px w-10 md:w-20 bg-white/80 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <h1
          aria-label="Refine Your Natural Beauty"
          className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-5 max-w-4xl text-balance leading-tight drop-shadow-2xl"
        >
          {headline.map((word, i) => (
            <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-2">
              <motion.span
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
                {i < headline.length - 1 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.span
          aria-hidden="true"
          className="mb-8 block h-px w-40 md:w-64 bg-gradient-to-r from-transparent via-pink to-transparent origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.a
            href="https://shelbiaesthetics.myaestheticrecord.com/online-booking"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-shimmer inline-block px-8 py-4 bg-white text-charcoal font-semibold text-sm tracking-widest uppercase hover:bg-pink hover:text-white transition-colors duration-300 shadow-lg"
          >
            Book An Appointment
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        aria-label="Scroll to services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white"
      >
        <motion.span
          className="block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.span>
      </motion.a>
    </section>
  );
}
