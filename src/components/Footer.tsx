import { useState, type FormEvent } from 'react';
import { Phone, Mail, ArrowRight, Check } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedInIcon } from '../icons';
import { CONTACT, SOCIAL_LINKS, NAV_LINKS, LOGO_SRC } from '../data';
import type { SocialId } from '../types';

const SOCIAL_ICONS: Record<SocialId, typeof InstagramIcon> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
};

const LEGAL_LINKS = [
  { label: 'Terms & Conditions', href: '#/terms' },
  { label: 'Accessibility Statement', href: '#/accessibility' },
  { label: 'Privacy Policy', href: '#/privacy' },
  { label: 'Refund Policy', href: '#/refund-policy' },
];

interface FooterProps {
  onBookNow: () => void;
}

export default function Footer({ onBookNow }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email to subscribe.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#/" className="navbar__brand footer__brand-mark">
            <img src={LOGO_SRC} alt="Soulamica" className="logo-img" />
            <span>Soulamica</span>
          </a>
          <p className="footer__tagline">Your Companion in Mental Health</p>

          <form className="footer__form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="footer-email" className="footer__form-label">
              Stay in the loop
            </label>
            <div className="footer__form-row">
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                className="footer__input"
              />
              <button type="submit" className="footer__submit" aria-label="Subscribe">
                {subscribed ? <Check size={18} /> : <ArrowRight size={18} />}
              </button>
            </div>
            {error && <p className="footer__form-msg footer__form-msg--error">{error}</p>}
            {subscribed && <p className="footer__form-msg">You&rsquo;re on the list. Welcome. 🌿</p>}
          </form>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Get in touch</h3>
          <a href={`tel:${CONTACT.phoneTel}`} className="footer__contact-link">
            <Phone size={15} /> {CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="footer__contact-link">
            <Mail size={15} /> {CONTACT.email}
          </a>
          <button type="button" className="btn btn--outline-light footer__cta" onClick={onBookNow}>
            Book Now
          </button>
          <div className="footer__socials">
            {SOCIAL_LINKS.map((s) => {
              const Icon = SOCIAL_ICONS[s.id];
              return (
                <a key={s.id} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="footer__social-icon">
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Explore</h3>
          <nav className="footer__nav" aria-label="Footer">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Soulamica. All rights reserved.</p>
        <div className="footer__legal">
          {LEGAL_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
