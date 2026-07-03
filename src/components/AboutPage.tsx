import PageHeader from './PageHeader';
import ClosingCta from './ClosingCta';
import { PORTRAIT_SRC, STATS, BIO_INTRO, BIO_STORY } from '../data';
import { useCountUp, useScrollReveal } from '../hooks';
import type { Stat } from '../types';

interface AboutPageProps {
  onBookNow: () => void;
}

export default function AboutPage({ onBookNow }: AboutPageProps) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <>
      <PageHeader
        eyebrow="About Soulamica"
        title="Hey there — I'm Richa."
        subtitle="A friend on your inner journey, and the person you'll actually talk to."
      />

      <section className="about-page">
        <div ref={ref} className="container about-page__grid">
          <div className={`about-page__portrait reveal ${visible ? 'reveal--visible' : ''}`}>
            <div className="about__portrait-frame about__portrait-frame--lg">
              <img src={PORTRAIT_SRC} alt="Richa Gupta, Clinical Psychologist" className="about__portrait-img" />
            </div>
            <p className="about__portrait-caption">
              Richa Gupta
              <span>Clinical Psychologist, M.A.</span>
            </p>

            <div className="about-page__stats">
              {STATS.map((stat) => (
                <AboutPageStat key={stat.id} stat={stat} visible={visible} />
              ))}
            </div>
          </div>

          <div className={`about-page__bio reveal reveal--delay-2 ${visible ? 'reveal--visible' : ''}`}>
            {BIO_INTRO.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <h2 className="about-page__subheading">My story</h2>
            {BIO_STORY.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta onBookNow={onBookNow} />
    </>
  );
}

function AboutPageStat({ stat, visible }: { stat: Stat; visible: boolean }) {
  const count = useCountUp(stat.value, visible, 1400);
  return (
    <div className="about-page__stat">
      <span className="about-page__stat-value">
        {count}
        {stat.suffix}
      </span>
      <span className="about-page__stat-label">{stat.label}</span>
    </div>
  );
}
