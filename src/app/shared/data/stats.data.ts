import { Stat, WhyUsReason } from '../models/content.models';

export const STATS: Stat[] = [
  { value: '10+', numeric: 10, suffix: '+', label: 'Years Experience' },
  { value: 'End-to-End', numeric: null, suffix: '', label: 'IT Services' },
  { value: 'Web + Mobile', numeric: null, suffix: '', label: 'Development' },
  { value: 'Cloud + DevOps', numeric: null, suffix: '', label: 'Support' },
  { value: 'Global', numeric: null, suffix: '', label: 'Delivery' }
];

export const CAPABILITY_STRIP: string[] = [
  'WEB DEVELOPMENT',
  'MOBILE DEVELOPMENT',
  'CLOUD',
  'DEVOPS',
  'SOFTWARE TESTING',
  'AI',
  'DATA',
  'TECHNICAL SUPPORT'
];

export const WHY_US: WhyUsReason[] = [
  { title: '10+ Years of Experience', description: 'A decade of hands-on engineering experience across industries and technologies.' },
  { title: 'End-to-End Technology Services', description: 'From strategy and design to build, test, deploy and support — under one roof.' },
  { title: 'Flexible Engagement Models', description: 'Project-based delivery, dedicated teams or ongoing support — whichever fits your needs.' },
  { title: 'Experienced Technical Professionals', description: 'Skilled developers, QA engineers and DevOps specialists on every engagement.' },
  { title: 'Development + Support Under One Roof', description: 'We build your product and stay with you to maintain and grow it.' },
  { title: 'Modern Technology Stack', description: 'We work with current cloud, frontend, backend and DevOps technologies.' }
];
