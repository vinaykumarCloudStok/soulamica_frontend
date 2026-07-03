import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  meta?: string;
}

export default function PageHeader({ eyebrow, title, subtitle, meta }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="container">
        <a href="#/" className="page-header__back">
          <ArrowLeft size={15} /> Back to home
        </a>
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
        {meta && <p className="page-header__meta">{meta}</p>}
      </div>
    </div>
  );
}
