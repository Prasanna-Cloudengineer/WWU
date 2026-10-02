import { IconName } from '../ui/icon/icon';

export interface NavLink {
  label: string;
  fragment: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  points: string[];
  icon: IconName;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Industry {
  title: string;
  description: string;
  icon: string;
}

export interface EngagementModel {
  title: string;
  description: string;
  points: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  numeric: number | null;
  suffix: string;
  label: string;
}

export interface WhyUsReason {
  title: string;
  description: string;
}
