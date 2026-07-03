import { ArrowRight } from 'lucide-react';
import { STATS, PORTRAIT_SRC, BIO_INTRO } from '../data';
import { useCountUp, useScrollReveal } from '../hooks';
import type { Stat } from '../types';

export default function About() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="about" className="about">
      <div ref={ref} className="container">
        <div className={`reveal ${visible ? 'reveal--visible' : ''}`}>
          <p className="eyebrow eyebrow--light">About Soulamica</p>
          <h2 className="section-title section-title--light">Hey there.</h2>
        </div>

        <div className="about__grid">
          <div className={`about__portrait reveal ${visible ? 'reveal--visible' : ''}`}>
            <div className="about__portrait-frame">
              <img src={PORTRAIT_SRC} alt="Richa Gupta, Clinical Psychologist" className="about__portrait-img" />
            </div>
            <p className="about__portrait-caption">
              Richa Gupta
              <span>Clinical Psychologist, M.A.</span>
            </p>
          </div>

          <div className={`about__bio reveal reveal--delay-2 ${visible ? 'reveal--visible' : ''}`}>
            {BIO_INTRO.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <a href="#/about" className="about__toggle">
              Read my full story <ArrowRight size={16} />
            </a>

            <div className="about__stats">
              {STATS.map((stat) => (
                <AboutStat key={stat.id} stat={stat} visible={visible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutStat({ stat, visible }: { stat: Stat; visible: boolean }) {
  const count = useCountUp(stat.value, visible, 1400);
  return (
    <div className="about__stat">
      <span className="about__stat-value">
        {count}
        {stat.suffix}
      </span>
      <span className="about__stat-label">{stat.label}</span>
    </div>
  );
}
