import { MessageCircle, Users, Phone, HeartHandshake, Users2, MapPin, ArrowRight, type LucideIcon } from 'lucide-react';
import { SERVICES, SERVICES_BG_SRC } from '../data';
import type { Service, ServiceIcon } from '../types';
import { useScrollReveal, useTilt } from '../hooks';

const ICONS: Record<ServiceIcon, LucideIcon> = {
  chat: MessageCircle,
  workshop: Users,
  phone: Phone,
  care: HeartHandshake,
  family: Users2,
  inperson: MapPin,
};

interface ServicesProps {
  onBookNow: (serviceName: string) => void;
}

export default function Services({ onBookNow }: ServicesProps) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="services" className="services">
      <img src={SERVICES_BG_SRC} alt="" className="services__bg" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Services</p>
          <h2 className="section-title">Ways we can begin</h2>
          <p className="section-subtitle">
            Every plan starts with one honest conversation. Choose what feels right —
            or reach out and we&rsquo;ll figure it out together.
          </p>
        </div>

        <div ref={ref} className="services__grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} visible={visible} onBookNow={onBookNow} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  visible,
  onBookNow,
}: {
  service: Service;
  index: number;
  visible: boolean;
  onBookNow: (name: string) => void;
}) {
  const Icon = ICONS[service.icon];
  const tiltRef = useTilt<HTMLElement>(6);
  return (
    <article
      ref={tiltRef}
      className={`service-card reveal ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: visible ? `${(index % 3) * 90}ms` : '0ms' }}
    >
      <div className="service-card__icon">
        <Icon size={22} strokeWidth={1.6} />
      </div>
      <h3 className="service-card__name">{service.name}</h3>
      <p className="service-card__desc">{service.description}</p>

      <div className="service-card__price">
        {service.priceNote && <span className="service-card__price-note">{service.priceNote}</span>}
        <span className="service-card__price-value">{service.price}</span>
      </div>

      <button type="button" className="btn btn--outline service-card__cta" onClick={() => onBookNow(service.name)}>
        Book Now <ArrowRight size={16} />
      </button>
    </article>
  );
}
