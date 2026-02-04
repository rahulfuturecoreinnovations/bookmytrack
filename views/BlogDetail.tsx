
import React from 'react';
import { BlogPost, View } from '../types';
import { ArrowLeft, Share2, Facebook, Twitter, Instagram } from 'lucide-react';

interface BlogDetailProps {
  post: BlogPost;
  setView: (view: View) => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, setView }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Article Header */}
      <header className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-900/40" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full pb-20 text-white">
          <button 
            onClick={() => setView('blog')}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-10 hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </button>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-6 opacity-80">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30" />
            <div>
              <p className="text-sm font-bold">{post.author}</p>
              <p className="text-xs opacity-60">{post.date}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-stone lg:prose-xl">
            <p className="text-2xl font-serif italic text-stone-500 mb-12 leading-relaxed border-l-4 border-stone-200 pl-8">
              "{post.excerpt}"
            </p>
            
            <div className="text-stone-800 leading-loose space-y-8 text-lg">
              <p>{post.content}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Satius est vitae, vitae semper, sed non. Nullam ac tortor ac tellus scelerisque vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae enim vitae nisl viverra tincidunt.</p>
              
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200" 
                alt="Landscape" 
                className="rounded-2xl my-16 w-full"
              />

              <h3 className="text-3xl font-serif mt-16 mb-6">The Journey Ahead</h3>
              <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              
              <div className="bg-stone-100 p-12 rounded-3xl my-16">
                <h4 className="text-xl font-serif mb-4">Key Takeaways:</h4>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-stone-900 mt-2 shrink-0" /> Always research the local customs before arriving.</li>
                  <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-stone-900 mt-2 shrink-0" /> Travel light to allow for unexpected detours.</li>
                  <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-stone-900 mt-2 shrink-0" /> Embrace the silence of early mornings.</li>
                </ul>
              </div>

              <p>In conclusion, travel is not just about seeing new sights but about gaining a new perspective. It’s the conversations in quiet cafes and the long walks through unfamiliar streets that stay with us the longest.</p>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Share Story:</span>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-stone-600 transition-colors" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-stone-600 transition-colors" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-stone-600 transition-colors" />
                <Share2 className="w-5 h-5 cursor-pointer hover:text-stone-600 transition-colors" />
              </div>
            </div>
            <button 
              onClick={() => setView('blog')}
              className="px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-all"
            >
              Back to Journal
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
