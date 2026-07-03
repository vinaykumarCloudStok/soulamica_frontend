import { useEffect, useRef } from 'react';
import { X, Phone, Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { CONTACT, SOCIAL_LINKS } from '../data';
import { useClipboard, useLockBodyScroll } from '../hooks';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, LinkedInIcon } from '../icons';
import type { SocialId } from '../types';

interface ContactModalProps {
  open: boolean;
  service: string | null;
  onClose: () => void;
}

const SOCIAL_ICONS: Record<SocialId, typeof InstagramIcon> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
};

export default function ContactModal({ open, service, onClose }: ContactModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [copiedPhone, copyPhone] = useClipboard();
  const [copiedEmail, copyEmail] = useClipboard();

  useLockBodyScroll(open);

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement as HTMLElement;
      // Wait one frame so the panel has mounted before focusing it.
      const id = requestAnimationFrame(() => closeRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
    triggerRef.current?.focus?.();
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose} />
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <p className="eyebrow">Let&rsquo;s talk</p>
        <h2 id="contact-modal-title" className="modal__title">
          Let&rsquo;s start the conversation.
        </h2>

        {service && <span className="modal__chip">Regarding: {service}</span>}

        <p className="modal__subtitle">
          Reach out directly — every call and message is answered personally.
          No forms, no waiting room.
        </p>

        <div className="modal__actions">
          <a href={`tel:${CONTACT.phoneTel}`} className="modal__contact-row">
            <span className="modal__contact-icon">
              <Phone size={18} />
            </span>
            <span className="modal__contact-text">
              <span className="modal__contact-label">Call</span>
              <span className="modal__contact-value">{CONTACT.phoneDisplay}</span>
            </span>
            <button
              type="button"
              className="modal__copy-btn"
              aria-label="Copy phone number"
              onClick={(e) => {
                e.preventDefault();
                copyPhone(CONTACT.phoneDisplay);
              }}
            >
              {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </a>

          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="modal__contact-row modal__contact-row--whatsapp"
          >
            <span className="modal__contact-icon modal__contact-icon--whatsapp">
              <WhatsAppIcon size={18} />
            </span>
            <span className="modal__contact-text">
              <span className="modal__contact-label">WhatsApp</span>
              <span className="modal__contact-value">Message us directly</span>
            </span>
            <ArrowUpRight size={16} className="modal__row-arrow" />
          </a>

          <a href={`mailto:${CONTACT.email}`} className="modal__contact-row">
            <span className="modal__contact-icon">
              <Mail size={18} />
            </span>
            <span className="modal__contact-text">
              <span className="modal__contact-label">Email</span>
              <span className="modal__contact-value">{CONTACT.email}</span>
            </span>
            <button
              type="button"
              className="modal__copy-btn"
              aria-label="Copy email address"
              onClick={(e) => {
                e.preventDefault();
                copyEmail(CONTACT.email);
              }}
            >
              {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </a>
        </div>

        <div className="modal__social">
          <span className="modal__social-label">or find us here</span>
          <div className="modal__social-icons">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.id];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="modal__social-icon"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
