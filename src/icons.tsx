const iconProps = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.1" cy="6.9" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <path d="M14 8.3h-1.4a1.9 1.9 0 0 0-1.9 1.9V12H14" />
      <path d="M10.7 12v6.7" />
    </svg>
  );
}

export function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <path d="M8 8l8 8M16 8l-8 8" />
    </svg>
  );
}

export function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <path d="M11 7.6v7.7a2.35 2.35 0 1 1-1.85-2.3" />
      <path d="M11 7.6c.3 1.7 1.55 2.95 3.1 3.1" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="8.2" cy="8.3" r="0.55" fill="currentColor" stroke="none" />
      <path d="M8.2 11.2v6.3" />
      <path d="M11.9 17.5v-4c0-1.5 1-2.6 2.35-2.6s2.35 1.1 2.35 2.6v4" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps}>
      <path d="M6.8 18.4 4 20l1.6-3.3a7.7 7.7 0 1 1 4.1 2.8c-1-.2-2-.6-2.9-1.1Z" />
      <path d="M9.3 9.8c.15-.35.3-.7.6-.7.25 0 .5.55.65.95.12.3-.05.5-.25.75-.2.25-.35.4-.2.7.35.7 1.15 1.5 1.85 1.85.3.15.45 0 .7-.2.25-.2.45-.37.75-.25.4.15.95.4.95.65 0 .3-.35.75-.7.9-.6.25-1.35.15-2.15-.2-1.25-.55-2.35-1.65-2.9-2.9-.35-.8-.45-1.55-.3-2.15Z" />
    </svg>
  );
}
