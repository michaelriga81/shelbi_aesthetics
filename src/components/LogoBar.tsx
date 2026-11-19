import { motion } from "motion/react";

const brands = [
  {
    name: "Botox",
    logo: "https://www.idealdermatology.com/wp-content/uploads/2023/03/botox-logo.png",
    className: "h-8 md:h-10 w-auto"
  },
  {
    name: "Dysport",
    logo: "https://www.amdplasticsurgery.com/wp-content/uploads/2025/08/Dysport_wrinkle_blocker-1.png",
    className: "h-8 md:h-10 w-auto"
  },
  {
    name: "Jeuveau",
    logo: "https://ylift.com/wp-content/uploads/2023/04/jeuveau-pink-logo.png",
    className: "h-8 md:h-10 w-auto"
  },
  {
    name: "Evexias",
    logo: "https://www.evexias.com/wp-content/uploads/2025/08/ehs_logo_white.svg",
    className: "h-8 md:h-10 w-auto invert"
  },
  {
    name: "Sciton",
    logo: "https://sciton.com/em/common-assets/sciton-logo-color.png",
    className: "h-6 md:h-8 w-auto"
  },
  {
    name: "Joya Skin",
    logo: "https://i0.wp.com/joyahealth.com/wp-content/uploads/2024/08/Logo.png?w=512&ssl=1",
    className: "h-10 md:h-12 w-auto"
  }
];

export default function LogoBar() {
  return (
    <section className="py-6 bg-white border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className={`${brand.className} object-contain`}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
