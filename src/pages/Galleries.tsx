import { motion } from "motion/react";

const categories = [
  {
    name: "PDO Threads",
    images: [
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/PDO%20Threads/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(1).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/PDO%20Threads/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(2).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/PDO%20Threads/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(3).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/PDO%20Threads/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(4).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/PDO%20Threads/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/PDO%20Threads/Before%20After%20Aug%2027%20from%20Shelbi%20Aesthetics.webp"
    ]
  },
  {
    name: "Fillers",
    images: [
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Fillers/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Fillers/Before%20After%20Aug%2027%20from%20Shelbi%20Aesthetics%20(1).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Fillers/Before%20After%20Aug%2027%20from%20Shelbi%20Aesthetics%20(2).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Fillers/Before%20After%20Aug%2027%20from%20Shelbi%20Aesthetics.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Fillers/Before%20After%20IMG%202672.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Fillers/Before%20After%20IMG%202673.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Fillers/Before%20After%20IMG%202674.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Fillers/Before%20After%20IMG%202675.webp"
    ]
  },
  {
    name: "Lasers",
    images: [
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(1).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20After%20Aug%2027%20from%20Shelbi%20Aesthetics.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20After%20IMG%202668.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20After%20IMG%202669.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20After%20IMG%202670.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20After%20IMG%202678.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20After%20IMG%202679.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20After%20IMG%202680.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lasersa/Before%20After%20Shelbi%20Aesthetics.webp"
    ]
  },
  {
    name: "Lips",
    images: [
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(1).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(2).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(3).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(4).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(5).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(6).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(7).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(8).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics%20(9).webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20%26%20After%20Aug%2027%202024%20from%20Shelbi%20Aesthetics.webp",
      "https://storage.googleapis.com/clients-ai-studio/Shelbi%20Aesthetics/Lips/Before%20After%20Aug%2027%20from%20Shelbi%20Aesthetics.webp"
    ]
  }
];

export default function Galleries() {
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
              Real Results
            </h1>
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">
              Before & After Galleries
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Explore the transformative results achieved by our expert team. Browse through our patient galleries to see the difference our treatments can make.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Galleries Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, index) => (
            <div key={category.name} className={index > 0 ? "mt-24" : ""}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h3 className="text-3xl font-serif text-charcoal mb-4">{category.name}</h3>
                <div className="h-px w-16 bg-gold mx-auto"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-blush/30 group"
                  >
                    <img
                      src={img}
                      alt={`${category.name} Before and After ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
