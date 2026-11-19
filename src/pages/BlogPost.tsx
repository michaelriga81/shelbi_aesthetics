import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-charcoal mb-4">Post Not Found</h1>
          <Link to="/about/blog" className="text-gold hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans text-charcoal">
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/about/blog"
              className="inline-flex items-center text-sm text-charcoal/60 hover:text-gold mb-8 transition-colors uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-t border-b border-charcoal/10 py-6 mb-10">
              <div className="flex items-center text-sm text-charcoal/60 uppercase tracking-wider">
                <Calendar className="w-4 h-4 mr-2 text-gold" />
                {post.date}
              </div>
              <button className="text-charcoal/60 hover:text-gold transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-headings:font-serif prose-headings:text-charcoal prose-h2:text-3xl prose-h3:text-2xl prose-p:text-charcoal/80 prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal prose-li:text-charcoal/80 prose-li:leading-relaxed max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <div className="mt-16 pt-10 border-t border-charcoal/10">
              <h3 className="text-2xl font-serif text-charcoal mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} to={`/about/blog/${relatedPost.slug}`} className="group block">
                      <div className="aspect-[3/2] rounded-2xl overflow-hidden mb-4 bg-sand/30">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="text-xl font-serif text-charcoal group-hover:text-gold transition-colors">
                        {relatedPost.title}
                      </h4>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
