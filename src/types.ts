export type ProjectCategory = 'todos' | 'ecommerce' | 'web' | 'landing' | 'sistemas';

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  desktopPreview: string;
  mobilePreview?: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  url?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  highlights: string[];
  popularFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
  budget: string;
}
