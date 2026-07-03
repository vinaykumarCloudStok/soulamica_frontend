import { ArrowRight } from 'lucide-react';
import PageHeader from './PageHeader';
import ClosingCta from './ClosingCta';
import { BLOG_POSTS } from '../data';
import { useScrollReveal, useTilt } from '../hooks';
import type { BlogPost } from '../types';

interface BlogIndexPageProps {
  onBookNow: () => void;
}

export default function BlogIndexPage({ onBookNow }: BlogIndexPageProps) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <>
      <PageHeader
        eyebrow="From the journal"
        title="Latest Insights"
        subtitle="Notes on therapy, resilience, and everyday mental health — written by Richa."
      />

      <section className="blog-index">
        <div ref={ref} className="container">
          <div className="blog-index__grid">
            {BLOG_POSTS.map((post, i) => (
              <BlogIndexCard key={post.id} post={post} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta onBookNow={onBookNow} />
    </>
  );
}

function BlogIndexCard({ post, index, visible }: { post: BlogPost; index: number; visible: boolean }) {
  const tiltRef = useTilt<HTMLAnchorElement>(5);
  return (
    <a
      href={`#/blog/${post.id}`}
      ref={tiltRef}
      className={`insight-card blog-index__card reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: visible ? `${index * 110}ms` : '0ms' }}
    >
      <div className="insight-card__band">
        <img src={post.image} alt="" className="insight-card__img" aria-hidden="true" />
      </div>
      <div className="insight-card__body">
        <h2 className="insight-card__title">{post.title}</h2>
        <p className="insight-card__excerpt">{post.excerpt}</p>
        <span className="blog-index__read-more">
          Read more <ArrowRight size={14} />
        </span>
      </div>
    </a>
  );
}
