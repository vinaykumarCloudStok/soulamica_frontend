import { Phone } from 'lucide-react';
import PageHeader from './PageHeader';
import { CRISIS_RESOURCES } from '../data';
import type { LegalDoc } from '../types';

interface LegalPageProps {
  doc: LegalDoc;
}

function slugifyHeading(heading: string): string {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function LegalPage({ doc }: LegalPageProps) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={doc.title} meta={`Last updated: ${doc.lastUpdated}`} />

      <section className="legal-page">
        <div className="container legal-page__grid">
          <nav className="legal-page__toc" aria-label="On this page">
            <span className="legal-page__toc-label">On this page</span>
            {doc.sections.map((section) => (
              <a key={section.heading} href={`#${slugifyHeading(section.heading)}`}>
                {section.heading}
              </a>
            ))}
          </nav>

          <div className="legal-page__content">
            <p className="legal-page__intro">{doc.intro}</p>

            {doc.sections.map((section) => (
              <div key={section.heading} id={slugifyHeading(section.heading)} className="legal-page__section">
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}

                {doc.slug === 'terms' && section.heading === 'Not an emergency service' && (
                  <div className="legal-page__crisis">
                    {CRISIS_RESOURCES.map((resource) => (
                      <div key={resource.name} className="legal-page__crisis-row">
                        <span className="legal-page__crisis-icon">
                          <Phone size={16} />
                        </span>
                        <div>
                          <strong>
                            {resource.name} — {resource.contact}
                          </strong>
                          <span>{resource.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
