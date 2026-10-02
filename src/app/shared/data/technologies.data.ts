import { TechCategory } from '../models/content.models';

export const TECHNOLOGIES: TechCategory[] = [
  { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] },
  { category: 'Frontend', items: ['Angular', 'React', 'JavaScript'] },
  { category: 'Programming', items: ['Java', 'Python', '.NET'] },
  { category: 'Infrastructure', items: ['Kubernetes', 'Linux', 'DevOps'] },
  { category: 'Enterprise', items: ['ServiceNow', 'Jira'] },
  { category: 'Data', items: ['Data Engineering', 'Data Analytics', 'Data Science'] },
  { category: 'Quality', items: ['Software Testing', 'QA'] },
  { category: 'AI', items: ['Artificial Intelligence', 'AI Engineering'] }
];
