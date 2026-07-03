import { LOGO_SRC } from '../data';
import { useScrollReveal } from '../hooks';

const LINES = [
  'Soulamica was born from a simple thought — that healing should feel human, warm, and approachable.',
  'What if therapy felt like a soulful conversation, not a session under pressure?',
  'A space for guided conversations, gentle growth, and soulful well-being — where you can reconnect with yourself in the most natural way.',
];

export default function Welcome() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="welcome" className="welcome">
      <div ref={ref} className="container welcome__inner">
        <p className="eyebrow eyebrow--center">Welcome</p>
        <img src={LOGO_SRC} alt="" className="welcome__mark" aria-hidden="true" />
        <div className="welcome__lines">
          {LINES.map((line, i) => (
            <p
              key={line}
              className={`welcome__line ${i === LINES.length - 1 ? 'welcome__line--muted' : ''} reveal ${
                visible ? 'reveal--visible' : ''
              }`}
              style={{ transitionDelay: visible ? `${i * 160}ms` : '0ms' }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
