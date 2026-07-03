import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { useScrollReveal, useTilt } from '../hooks';
import type { BlogPost } from '../types';

export default function Insights() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="blog" className="insights">
      <div className="container">
        <div className="section-head insights__head">
          <div>
            <p className="eyebrow">From the journal</p>
            <h2 className="section-title">Latest Insights</h2>
          </div>
          <a href="#/blog" className="insights__view-all">
            View all posts <ArrowRight size={16} />
          </a>
        </div>

        <div ref={ref} className="insights__grid">
          {BLOG_POSTS.map((post, i) => (
            <InsightCard key={post.id} post={post} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightCard({ post, index, visible }: { post: BlogPost; index: number; visible: boolean }) {
  const tiltRef = useTilt<HTMLAnchorElement>(5);
  return (
    <a
      href={`#/blog/${post.id}`}
      ref={tiltRef}
      className={`insight-card reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 110}ms` : '0ms' }}
    >
      <div className="insight-card__band">
        <img src={post.image} alt="" className="insight-card__img" aria-hidden="true" />
      </div>
      <div className="insight-card__body">
        <h3 className="insight-card__title">{post.title}</h3>
        <p className="insight-card__excerpt">{post.excerpt}</p>
        <span className="insight-card__author">{post.author}</span>
      </div>
    </a>
  );
}
