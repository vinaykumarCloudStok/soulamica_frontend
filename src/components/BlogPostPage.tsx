import { ArrowLeft, ArrowRight } from 'lucide-react';
import ClosingCta from './ClosingCta';
import { BLOG_POSTS } from '../data';
import { useScrollReveal } from '../hooks';

interface BlogPostPageProps {
  slug: string;
  onBookNow: () => void;
}

export default function BlogPostPage({ slug, onBookNow }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.id === slug);
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  if (!post) {
    return (
      <section className="blog-post blog-post--missing">
        <div className="container">
          <p className="eyebrow">Not found</p>
          <h1 className="page-header__title">We couldn&rsquo;t find that post.</h1>
          <a href="#/blog" className="btn btn--primary" style={{ marginTop: 24 }}>
            <ArrowLeft size={16} /> Back to all posts
          </a>
        </div>
      </section>
    );
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id);

  return (
    <>
      <article className="blog-post">
        <div className="blog-post__cover">
          <img src={post.image} alt="" className="blog-post__cover-img" />
          <div className="blog-post__cover-scrim" aria-hidden="true" />
          <div className="container blog-post__cover-content">
            <a href="#/blog" className="page-header__back page-header__back--light">
              <ArrowLeft size={15} /> All posts
            </a>
            <p className="eyebrow eyebrow--light">From the journal</p>
            <h1 className="blog-post__title">{post.title}</h1>
            <p className="blog-post__byline">By {post.author}</p>
          </div>
        </div>

        <div ref={ref} className={`container blog-post__body reveal ${visible ? 'reveal--visible' : ''}`}>
          <p className="blog-post__lede">{post.excerpt}</p>
          <p className="blog-post__note">
            This is the opening of {post.author}&rsquo;s post — the rest is coming soon. In the meantime, if
            any of this resonates, the fastest way to talk it through is directly.
          </p>
          <button type="button" className="btn btn--outline" onClick={onBookNow}>
            Book Now <ArrowRight size={16} />
          </button>
        </div>

        {otherPosts.length > 0 && (
          <div className="container blog-post__more">
            <h2 className="blog-post__more-title">More from the journal</h2>
            <div className="blog-post__more-grid">
              {otherPosts.map((p) => (
                <a key={p.id} href={`#/blog/${p.id}`} className="blog-post__more-card">
                  <img src={p.image} alt="" />
                  <span>{p.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>

      <ClosingCta onBookNow={onBookNow} />
    </>
  );
}
