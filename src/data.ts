import type { NavLink, Service, BlogPost, SocialLink, Stat, LegalDoc } from './types';

// ---------------------------------------------------------------------------
// Site navigation. Home/Welcome/Services are same-page scroll anchors on the
// homepage; About/Blog are dedicated pages (see the router in App.tsx).
// ---------------------------------------------------------------------------
export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#/' },
  { id: 'welcome', label: 'Welcome', href: '#welcome' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'about', label: 'About', href: '#/about' },
  { id: 'blog', label: 'Blog', href: '#/blog' },
];

// ---------------------------------------------------------------------------
// Contact details — this is the single source of truth used by the
// "Book Now" contact panel, the footer, and the closing CTA.
// Update the phone/email here and it updates everywhere.
// ---------------------------------------------------------------------------
export const CONTACT = {
  phoneDisplay: '+91 70224 60034',
  phoneTel: '+917022460034',
  whatsapp: 'https://wa.me/917022460034',
  email: 'hellosoulamica@gmail.com',
};

// Real profile links. Update anytime — everything else reads from here.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/soulamica?igsh=MXgwMm5jZ3JmM21saA==',
  },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/soulamica' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/richa-gupta97?trk=contact-info',
  },
];

// Real image files in /public — replace these files directly (keep the same
// names) to swap in your own logo and photo without touching any component.
export const LOGO_SRC = '/logo.svg';
export const PORTRAIT_SRC = '/portrait-placeholder.svg';
export const HERO_PHOTO_SRC = '/hero-photo.jpg';
export const SERVICES_BG_SRC = '/services-bg.jpg';

export const SERVICES: Service[] = [
  {
    id: 'individual',
    name: 'Individual Therapy Session',
    price: '₹1,500',
    description: 'One-on-one online sessions, paced entirely around you.',
    icon: 'chat',
  },
  {
    id: 'workshops',
    name: 'School & Corporate Workshops',
    price: 'On Request',
    description: 'Mental health workshops built for schools, teams and organisations.',
    icon: 'workshop',
  },
  {
    id: 'phone',
    name: 'Phone Consultation',
    price: '₹500',
    description: 'A shorter, voice-only check-in for when you just need to talk.',
    icon: 'phone',
  },
  {
    id: 'probono',
    name: 'Pro Bono Therapy',
    price: 'Price Negotiable',
    description: 'Accessible, income-sensitive support for those who need it most.',
    icon: 'care',
  },
  {
    id: 'family',
    name: 'Family / Couple Therapy (Online)',
    price: '₹2,500',
    description: 'Guided, judgment-free conversations for partners and families.',
    icon: 'family',
  },
  {
    id: 'inperson',
    name: 'Offline In-Person Therapy Session',
    price: '₹2,500',
    priceNote: 'From',
    description: 'Meet face-to-face for a session, at a space that feels right.',
    icon: 'inperson',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'promoting-wellness',
    title: 'Promoting Wellness: Strategies for Better Mental Health',
    excerpt:
      "In today's fast-paced world, looking after your mental health matters more than ever — a few small, consistent habits go a long way.",
    author: 'Richa Gupta',
    image: '/card-wellness.jpg',
  },
  {
    id: 'understanding-therapy',
    title: 'Understanding Therapy: A Guide to Psychological Support',
    excerpt:
      'Therapy can feel like a big first step. Here is a plain-language look at what it actually involves, and how to know if it is right for you.',
    author: 'Richa Gupta',
    image: '/card-therapy.jpg',
  },
  {
    id: 'mental-health-resilience',
    title: 'Effective Techniques for Mental Health Resilience',
    excerpt:
      'Life throws the unexpected at all of us. These are grounded, everyday techniques for building resilience before you need it.',
    author: 'Richa Gupta',
    image: '/card-resilience.jpg',
  },
];

export const STATS: Stat[] = [
  { id: 'individual-sessions', value: 1000, suffix: '+', label: 'Individual sessions held' },
  { id: 'group-sessions', value: 500, suffix: '+', label: 'Group sessions held' },
  { id: 'languages', value: 3, suffix: '', label: 'Languages spoken' },
];

// ---------------------------------------------------------------------------
// Bio content — shared by the homepage About preview and the dedicated
// About page (src/components/AboutPage.tsx).
// ---------------------------------------------------------------------------
export const BIO_INTRO = [
  "Meet Soulamica — a friend on your inner journey. Here, you'll find a safe, non-judgemental space where your voice is heard, and where you can explore, heal, and grow at your own pace.",
  "I've been working in the mental health field for over six years, with a Master's in Clinical Psychology and additional training through certifications and diplomas.",
  'I draw on eclectic, evidence-based approaches — CBT, mindfulness practices, and elements of DBT — blended with a holistic view that includes nutritional psychiatry. Humor often finds its way into my work too; I see it as a powerful tool to build trust and lighten the heaviness.',
];

export const BIO_STORY = [
  'This journey began with a simple spirit — to tell stories, and to listen to them. What drew me into the field was my curiosity, but also a clear gap in support I witnessed in India. Having personally navigated mental health challenges, and watching them unfold around me, I felt the weight of how few professionals were truly available to help. That experience planted the seed for this path.',
  'Working with schools came naturally — I wanted young people to move through life with support, rather than struggle in silence. Over time this grew beyond classrooms, into collaborations with corporates and mental health organisations, widening the circle of care.',
  "What keeps me grounded is an ongoing commitment to growth, personally and professionally — regular supervision, my own experience with therapy, and continuous upskilling. Therapy should not be a privilege. It should be a resource within anyone's reach.",
];

// ---------------------------------------------------------------------------
// Crisis resources — verified, current Indian mental health helplines.
// Shown in the Terms & Conditions "Not an Emergency Service" section.
// ---------------------------------------------------------------------------
export const CRISIS_RESOURCES = [
  { name: 'Emergency services', contact: '112', note: 'Immediate danger, anywhere in India' },
  { name: 'Tele-MANAS', contact: '14416 / 1-800-891-4416', note: '24x7, free, Govt. of India mental health helpline' },
  { name: 'KIRAN', contact: '1800-599-0019', note: '24x7 toll-free mental health helpline' },
];

// ---------------------------------------------------------------------------
// Legal pages. This is genuinely usable starter content, written to match
// Soulamica specifically — but it is not a substitute for review by a
// lawyer, and a few figures below are explicitly marked PLACEHOLDER for you
// to confirm against your actual policy before publishing.
// ---------------------------------------------------------------------------
export const LEGAL_DOCS: Record<string, LegalDoc> = {
  terms: {
    slug: 'terms',
    title: 'Terms & Conditions',
    lastUpdated: 'July 2026',
    intro:
      'These Terms & Conditions govern your use of the Soulamica website and any therapy, consultation, or workshop booked through it. Please read them before booking a session.',
    sections: [
      {
        heading: 'Acceptance of terms',
        body: [
          'By accessing this website or booking a session with Soulamica, you agree to these Terms & Conditions. If you do not agree with any part of them, please do not use our services.',
        ],
      },
      {
        heading: 'About our services',
        body: [
          'Soulamica offers individual therapy, couple and family therapy, phone consultations, school and corporate workshops, and pro bono sessions, delivered online and, where noted, in person. Services are provided by Richa Gupta, a qualified mental health professional.',
        ],
      },
      {
        heading: 'Eligibility',
        body: [
          'Our services are intended for individuals aged 18 and above. If you are under 18, a parent or legal guardian should contact us directly to arrange sessions and be part of the intake process.',
        ],
      },
      {
        heading: 'Booking & payment',
        body: [
          'Sessions are booked by contacting us directly — by phone, WhatsApp, or email — rather than through an automated calendar. Fees for each service are listed on our Services page and are payable as agreed at the time of booking, unless a different arrangement has been agreed in writing (for example, a pro bono or sliding-scale rate).',
        ],
      },
      {
        heading: 'Cancellations & rescheduling',
        body: [
          'We understand that plans change. [Placeholder — confirm your policy: we ask for at least 24 hours\u2019 notice to reschedule or cancel a session without charge.] Sessions cancelled with less notice, or missed without any notice, may be charged in full. See our Refund Policy for details.',
        ],
      },
      {
        heading: 'Confidentiality',
        body: [
          'What you share in session is treated as confidential, in line with standard professional practice for mental health care. This confidentiality has legal and ethical limits — for example, where there is a risk of serious harm to yourself or someone else, where abuse of a child or vulnerable adult is disclosed, or where disclosure is required by law. Where possible, these limits will be discussed with you directly.',
        ],
      },
      {
        heading: 'Not an emergency service',
        body: [
          'Soulamica is not equipped for crisis or emergency intervention, and messages sent outside session hours are not monitored around the clock. If you are in immediate danger or having thoughts of suicide, please contact emergency services or a crisis helpline right away — not this website.',
        ],
      },
      {
        heading: 'Client responsibilities',
        body: [
          'You agree to provide accurate information when booking, to attend sessions as scheduled, and to communicate openly about anything that affects your care, including any concerns for your safety.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'While every effort is made to provide a high standard of care, therapy outcomes cannot be guaranteed. To the extent permitted by law, Soulamica is not liable for indirect or consequential loss arising from use of our services or this website.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'All content on this website — including text, the Soulamica name and mark, and blog posts — belongs to Soulamica unless otherwise noted, and may not be reproduced without permission.',
        ],
      },
      {
        heading: 'Governing law',
        body: [
          'These Terms are governed by the laws of India. [Placeholder — add your city/state for jurisdiction once confirmed.]',
        ],
      },
      {
        heading: 'Changes to these terms',
        body: [
          'These Terms may be updated from time to time. The date at the top of this page shows when they were last revised. Continuing to use our services after a change means you accept the updated Terms.',
        ],
      },
      {
        heading: 'Contact us',
        body: ['Questions about these Terms? Reach us at hellosoulamica@gmail.com or +91 70224 60034.'],
      },
    ],
  },

  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'July 2026',
    intro:
      'This Privacy Policy explains how Soulamica collects, uses, and protects your personal information when you visit this website or use our services.',
    sections: [
      {
        heading: 'Information we collect',
        body: [
          'We may collect contact details you share with us (name, phone number, email); information you share during sessions, which may include sensitive health-related information; and basic technical information about how you use this website.',
        ],
      },
      {
        heading: 'How we use your information',
        body: [
          'We use your information to provide therapy and related services, respond to enquiries, and manage sessions — and, only with your consent, to send occasional updates if you subscribe to our newsletter. We do not sell your information to anyone.',
        ],
      },
      {
        heading: 'Session notes & health information',
        body: [
          "Notes from your sessions are kept confidentially and securely, and are used solely to support your care. They are retained only as long as necessary and are not shared with third parties except in the circumstances described in our Terms & Conditions under 'Confidentiality.'",
        ],
      },
      {
        heading: 'Data storage & security',
        body: [
          'We take reasonable steps to protect your information against unauthorised access, loss, or misuse. [Placeholder — describe your actual storage setup here, e.g. encrypted digital records and/or locked physical files, once finalised.]',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You may ask to see, correct, or request deletion of the personal information we hold about you, subject to standard professional and legal record-keeping obligations. To make a request, use the contact details below.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'This website does not use tracking or advertising cookies. [Placeholder — update this if you later add analytics, a booking tool, or embedded content that sets cookies.]',
        ],
      },
      {
        heading: "Children's privacy",
        body: ['We do not knowingly collect personal information from children under 18 without a parent or guardian\u2019s involvement.'],
      },
      {
        heading: 'Changes to this policy',
        body: ['We may update this Privacy Policy from time to time. Changes will appear on this page with a new "last updated" date.'],
      },
      {
        heading: 'Contact us',
        body: ['Questions about this policy, or a request about your data? Reach us at hellosoulamica@gmail.com or +91 70224 60034.'],
      },
    ],
  },

  'refund-policy': {
    slug: 'refund-policy',
    title: 'Refund Policy',
    lastUpdated: 'July 2026',
    intro:
      'This page explains how cancellations, rescheduling, and refunds are handled at Soulamica. A few specific figures are marked as placeholders below — confirm these against your actual policy before publishing.',
    sections: [
      {
        heading: 'Session cancellations',
        body: [
          '[Placeholder — confirm your policy: if you cancel or reschedule at least 24 hours before your scheduled session, any payment made will be refunded in full or applied to a new session.] Cancellations made with less notice may not be eligible for a refund.',
        ],
      },
      {
        heading: 'No-shows',
        body: ['Sessions missed without any notice are treated as completed and are not eligible for a refund.'],
      },
      {
        heading: 'Workshops & corporate bookings',
        body: [
          'School and corporate workshops are booked individually. Cancellation and refund terms for these are agreed in writing at the time of booking.',
        ],
      },
      {
        heading: 'Pro bono & sliding-scale sessions',
        body: [
          'Fees for pro bono or sliding-scale sessions are agreed individually and are non-refundable once a session has taken place, in line with the arrangement discussed at booking.',
        ],
      },
      {
        heading: 'How refunds are processed',
        body: [
          '[Placeholder — confirm your policy: approved refunds are processed within 5\u201310 business days, back to the original payment method.]',
        ],
      },
      {
        heading: 'Requesting a refund',
        body: [
          'To request a refund, contact us at hellosoulamica@gmail.com or +91 70224 60034 with your name and the date of your session.',
        ],
      },
    ],
  },

  accessibility: {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    lastUpdated: 'July 2026',
    intro:
      'Soulamica is committed to making this website usable by as many people as possible, including people with visual, hearing, motor, or cognitive disabilities.',
    sections: [
      {
        heading: 'Standards we aim for',
        body: [
          'We aim to meet the AA standard of the Web Content Accessibility Guidelines (WCAG) 2.1 wherever practical — including readable colour contrast, full keyboard navigation, visible focus states, and clear text alternatives for images. This site also respects your operating system\u2019s "reduce motion" setting.',
        ],
      },
      {
        heading: 'Known limitations',
        body: [
          'This website is under active development, and not every page has been formally audited for accessibility. If you encounter a barrier, we want to know about it.',
        ],
      },
      {
        heading: 'Feedback',
        body: [
          'If any part of this website is difficult for you to use, contact us at hellosoulamica@gmail.com or +91 70224 60034 and we will do our best to help — and to improve the site.',
        ],
      },
      {
        heading: 'Alternative access',
        body: [
          'If you\u2019re unable to use this website at all, every service listed here can still be booked directly by phone, WhatsApp, or email. No online form is required for anything on this site.',
        ],
      },
    ],
  },
};
