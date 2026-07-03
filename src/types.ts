export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export type ServiceIcon =
  | 'chat'
  | 'workshop'
  | 'phone'
  | 'care'
  | 'family'
  | 'inperson';

export interface Service {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  image: string;
}

export type SocialId = 'instagram' | 'facebook' | 'linkedin';

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}
