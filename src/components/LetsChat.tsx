import { WhatsAppIcon } from '../icons';
import { CONTACT } from '../data';

// Persistent floating WhatsApp launcher — sits above every page so a visitor
// is never more than one tap from a real conversation, mirroring the chat
// entry point on the live soulamica.com site.
export default function LetsChat() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="lets-chat"
      aria-label="Chat with Soulamica on WhatsApp"
    >
      <span className="lets-chat__bubble">
        <span className="lets-chat__ping" aria-hidden="true" />
        <WhatsAppIcon size={24} />
      </span>
      <span className="lets-chat__label">Let&rsquo;s Chat</span>
    </a>
  );
}
