import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="eyebrow eyebrow--center">404</p>
        <h1 className="section-title">This page wandered off.</h1>
        <p className="section-subtitle" style={{ margin: '0 auto 28px' }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist — but everything else is right where you left
          it.
        </p>
        <a href="#/" className="btn btn--primary">
          <ArrowLeft size={16} /> Back to home
        </a>
      </div>
    </section>
  );
}
