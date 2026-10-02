import { Service } from '../models/content.models';

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Modern, scalable and high-performance websites and web applications built around business requirements.',
    points: [
      'Corporate Websites',
      'Business Applications',
      'E-commerce',
      'Admin Portals',
      'SaaS Applications',
      'API Integration',
      'Progressive Web Applications'
    ],
    icon: 'code'
  },
  {
    number: '02',
    title: 'Android & iOS App Development',
    description:
      'Cross-platform and native-quality mobile applications for Android and iOS.',
    points: [
      'Android Applications',
      'iOS Applications',
      'Cross-platform Applications',
      'Ionic',
      'Capacitor',
      'Mobile API Integration',
      'App Store / Play Store Support'
    ],
    icon: 'mobile'
  },
  {
    number: '03',
    title: 'Development Support',
    description:
      'Ongoing development and technical support for existing applications and development teams.',
    points: [
      'Feature Development',
      'Bug Fixing',
      'Code Maintenance',
      'Legacy Application Support',
      'Performance Optimization',
      'Technical Consulting',
      'Dedicated Developer Support'
    ],
    icon: 'support'
  },
  {
    number: '04',
    title: 'Software Testing & QA',
    description:
      'Reliable software testing services to improve application quality, stability and user experience.',
    points: [
      'Functional Testing',
      'Regression Testing',
      'API Testing',
      'UI Testing',
      'Integration Testing',
      'Cross-browser Testing',
      'Mobile Testing',
      'Quality Assurance Support'
    ],
    icon: 'testing'
  },
  {
    number: '05',
    title: 'DevOps & Infrastructure Support',
    description: 'Reliable deployment, cloud infrastructure and DevOps support.',
    points: [
      'CI/CD',
      'Cloud Deployment',
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Server Management',
      'Monitoring',
      'Infrastructure Support'
    ],
    icon: 'cloud'
  },
  {
    number: '06',
    title: 'IT Consulting',
    description: 'Technology consulting that helps organizations make better technical decisions.',
    points: [
      'Technology Consulting',
      'Architecture Consulting',
      'Application Modernization',
      'Technical Assessment',
      'Cloud Consulting',
      'Digital Transformation',
      'Technology Roadmaps'
    ],
    icon: 'consulting'
  },
  {
    number: '07',
    title: 'Dedicated Development Team',
    description: 'Flexible technical teams for companies that need additional engineering capacity.',
    points: [
      'Dedicated Developers',
      'Dedicated QA Engineers',
      'DevOps Engineers',
      'Project-based Teams',
      'Remote Development Teams',
      'Long-term Technical Support'
    ],
    icon: 'team'
  }
];
