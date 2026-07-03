import Hero from './Hero';
import Welcome from './Welcome';
import Services from './Services';
import About from './About';
import Insights from './Insights';
import ClosingCta from './ClosingCta';

interface HomePageProps {
  onBookNow: (service?: string) => void;
}

export default function HomePage({ onBookNow }: HomePageProps) {
  return (
    <>
      <Hero onBookNow={() => onBookNow()} />
      <Welcome />
      <Services onBookNow={(name) => onBookNow(name)} />
      <About />
      <Insights />
      <ClosingCta onBookNow={() => onBookNow()} />
    </>
  );
}
