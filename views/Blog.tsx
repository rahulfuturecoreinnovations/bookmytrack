
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { Search } from 'lucide-react';

interface BlogProps {
  onBlogClick: (post: BlogPost) => void;
}

const Blog: React.FC<BlogProps> = ({ onBlogClick }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Travel Tips', 'Destinations', 'Budget Travel', 'Luxury Travel'];

  const filteredPosts = filter === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-4 block">Our Journal</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Travel Stories & Insights</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-stone-900 text-white' 
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => onBlogClick(post)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-stone-900">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-serif mb-4 leading-snug group-hover:text-stone-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-stone-500 line-clamp-3 text-sm leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-200" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900">{post.author}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
