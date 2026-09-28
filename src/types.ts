export type PageView = 'restaurants' | 'creators' | 'faq' | 'blog' | 'about' | 'privacy-policy' | 'terms-and-conditions';

export interface Campaign {
  id: string;
  name: string;
  restaurantName: string;
  location: string;
  cuisine: string;
  image: string;
  cashbackMax: number;
  cashbackMin: number;
  cashbackBadge?: string;
  deliverables: string[];
  requirements: string[];
  slotsTotal: number;
  slotsRemaining: number;
  creatorFollowerMin: string;
  category: string;
  expiryDays: number;
  featured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  audience: 'creator' | 'restaurant';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  target: 'restaurants' | 'creators';
  category: string;
  readTime: string;
  date: string;
  snippet: string;
  content: string[];
  author: string;
  image: string;
}

export interface StrategyCallFormData {
  restaurantName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  instagramHandle: string;
  website: string;
  locationsCount: string;
  monthlyBudget: string;
  goals: string[];
  notes?: string;
}

export interface CreatorRegisterFormData {
  fullName: string;
  instagramUsername: string;
  phone: string;
  email: string;
  city: string;
  category: string;
  followersRange: string;
  avgReelViews: string;
  profileUrl: string;
  contentCategories: string[];
  languages: string[];
  preferredCities: string[];
}
