import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, LOGO_SRC } from '../data';
import { useActiveSection } from '../hooks';

interface NavbarProps {
  onBookNow: () => void;
  route: string;
}

export default function Navbar({ onBookNow, route }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollActiveId = useActiveSection(['home', 'welcome', 'services']);

  // On the homepage, "Home/Welcome/Services" highlight by scroll position.
  // On any other route, highlight by the route itself instead.
  const activeId =
    route === '/about'
      ? 'about'
      : route.startsWith('/blog')
        ? 'blog'
        : route === '/'
          ? scrollActiveId
          : '';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent the mobile panel from persisting open across a resize to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close the mobile panel whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  return (
    <header className={`navbar ${scrolled || route !== '/' ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__brand" onClick={() => setMenuOpen(false)}>
          <img src={LOGO_SRC} alt="Soulamica" className="logo-img navbar__brand-mark" />
          <span>Soulamica</span>
        </a>

        <nav
          id="primary-nav"
          className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`navbar__link ${activeId === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn--primary navbar__cta navbar__cta--mobile"
            onClick={() => {
              onBookNow();
              setMenuOpen(false);
            }}
          >
            Book Now
          </button>
        </nav>

        <div className="navbar__actions">
          <button type="button" className="btn btn--primary navbar__cta navbar__cta--desktop" onClick={onBookNow}>
            Book Now
          </button>
          <button
            type="button"
            className="navbar__menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </header>
  );
}
