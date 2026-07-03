import { ArrowRight, PhoneCall } from 'lucide-react';
import { STATS, HERO_PHOTO_SRC } from '../data';
import { useCountUp, useMagnetic, useParallax, useScrollReveal } from '../hooks';
import type { Stat } from '../types';

interface HeroProps {
  onBookNow: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const magneticRef = useMagnetic<HTMLAnchorElement>(0.3, 10);
  const heroRef = useParallax<HTMLElement>(14);

  const delay = (step: number) => (visible ? `${step * 90}ms` : '0ms');

  return (
    <section id="home" className="hero" ref={heroRef}>
      <img src={HERO_PHOTO_SRC} alt="" className="hero__banner" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container">
        <div ref={ref} className="hero__content">
          <p
            className={`eyebrow eyebrow--light reveal ${visible ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: delay(0) }}
          >
            Licensed · Warm · Judgment-free
          </p>
          <h1 className={`hero__title reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: delay(1) }}>
            Inner journey begins
            <br /> with a <em>conversation</em>.
          </h1>
          <p className={`hero__subtitle reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: delay(2) }}>
            Soulamica is a space for online therapy that meets you where you are —
            no pressure, no performance. Just a licensed professional, and a
            conversation that&rsquo;s entirely yours.
          </p>

          <div className={`hero__actions reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: delay(3) }}>
            <a ref={magneticRef} href="#services" className="btn btn--primary btn--lg">
              Initiate Wellness <ArrowRight size={18} />
            </a>
            <button type="button" className="btn btn--outline-light btn--lg" onClick={onBookNow}>
              <PhoneCall size={17} /> Talk to us directly
            </button>
          </div>

          <dl className={`hero__stats reveal ${visible ? 'reveal--visible' : ''}`} style={{ transitionDelay: delay(4) }}>
            {STATS.map((stat) => (
              <HeroStat key={stat.id} stat={stat} visible={visible} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ stat, visible }: { stat: Stat; visible: boolean }) {
  const count = useCountUp(stat.value, visible);
  return (
    <div className="hero__stat">
      <dt className="hero__stat-value">
        {count}
        {stat.suffix}
      </dt>
      <dd className="hero__stat-label">{stat.label}</dd>
    </div>
  );
}
