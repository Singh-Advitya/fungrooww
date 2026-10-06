export type AudienceRole = 'teen' | 'company' | 'parent';

export type GigCategory =
  | 'all'
  | 'social-media'
  | 'graphic-design'
  | 'testing'
  | 'content'
  | 'video-editing'
  | 'ai-data'
  | 'campus';

export interface Gig {
  id: string;
  title: string;
  company: string;
  companyLogoText: string;
  category: GigCategory;
  categoryLabel: string;
  payout: number;
  duration: string;
  level: 'Beginner Friendly' | 'Intermediate' | 'Advanced';
  spotsLeft: number;
  tags: string[];
  description: string;
  deliverables: string[];
  skillsRequired: string[];
  deadlineDays: number;
}

export interface Story {
  id: string;
  name: string;
  age: number;
  city: string;
  role: string;
  earnings: string;
  projectsCompleted: number;
  quote: string;
  client: string;
  skillPillar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'teens' | 'companies' | 'parents';
}
