import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <main className="min-h-screen bg-sand font-sans text-charcoal">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6"
            >
              The Edit
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
              Expert insights, beauty trends, and wellness advice from Shelbi Aesthetics.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-charcoal/5 flex flex-col"
              >
                <Link to={`/about/blog/${post.slug}`} className="block aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gold mb-4 font-medium tracking-wider uppercase">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <Link to={`/about/blog/${post.slug}`} className="block group">
                    <h2 className="text-2xl font-serif text-charcoal mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-charcoal/70 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/about/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold text-charcoal hover:text-gold transition-colors uppercase tracking-widest"
                    >
                      Read Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
