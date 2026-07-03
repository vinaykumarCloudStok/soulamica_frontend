import { ArrowRight } from 'lucide-react';
import { CONTACT } from '../data';
import { useScrollReveal } from '../hooks';

interface ClosingCtaProps {
  onBookNow: () => void;
}

export default function ClosingCta({ onBookNow }: ClosingCtaProps) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section className="closing-cta">
      <div ref={ref} className={`container closing-cta__inner reveal ${visible ? 'reveal--visible' : ''}`}>
        <h2 className="closing-cta__title">Ready when you are.</h2>
        <p className="closing-cta__subtitle">No forms. No calendars. Just reach out.</p>
        <div className="closing-cta__actions">
          <button type="button" className="btn btn--dark btn--lg" onClick={onBookNow}>
            Book Now <ArrowRight size={18} />
          </button>
          <a href={`tel:${CONTACT.phoneTel}`} className="closing-cta__phone">
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
