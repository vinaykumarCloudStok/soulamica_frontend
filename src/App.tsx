import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BlogIndexPage from './components/BlogIndexPage';
import BlogPostPage from './components/BlogPostPage';
import LegalPage from './components/LegalPage';
import NotFoundPage from './components/NotFoundPage';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import { useScrollProgress, useRoute, useRouteScroll } from './hooks';
import { LEGAL_DOCS } from './data';

function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default function App() {
  const route = useRoute();
  useRouteScroll(route);

  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openContact = useCallback((service?: string) => {
    setSelectedService(service ?? null);
    setContactOpen(true);
  }, []);

  const closeContact = useCallback(() => setContactOpen(false), []);

  const renderPage = () => {
    if (route === '/') return <HomePage onBookNow={openContact} />;
    if (route === '/about') return <AboutPage onBookNow={() => openContact()} />;
    if (route === '/blog') return <BlogIndexPage onBookNow={() => openContact()} />;
    if (route.startsWith('/blog/')) {
      return <BlogPostPage slug={route.replace('/blog/', '')} onBookNow={() => openContact()} />;
    }
    if (route === '/terms') return <LegalPage doc={LEGAL_DOCS.terms} />;
    if (route === '/privacy') return <LegalPage doc={LEGAL_DOCS.privacy} />;
    if (route === '/refund-policy') return <LegalPage doc={LEGAL_DOCS['refund-policy']} />;
    if (route === '/accessibility') return <LegalPage doc={LEGAL_DOCS.accessibility} />;
    return <NotFoundPage />;
  };

  return (
    <>
      <ScrollProgressBar />
      <Navbar onBookNow={() => openContact()} route={route} />

      <main>{renderPage()}</main>

      <Footer onBookNow={() => openContact()} />

      <ContactModal open={contactOpen} service={selectedService} onClose={closeContact} />
    </>
  );
}
