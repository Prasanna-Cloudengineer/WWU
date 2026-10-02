import { Component } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly quickLinks = [
    { label: 'Home', fragment: 'home' },
    { label: 'About', fragment: 'about' },
    { label: 'Services', fragment: 'services' },
    { label: 'Technologies', fragment: 'technologies' },
    { label: 'Process', fragment: 'process' },
    { label: 'Contact', fragment: 'contact' }
  ];

  readonly serviceLinks = [
    'Web Development',
    'Mobile Development',
    'Development Support',
    'Software Testing',
    'DevOps',
    'IT Consulting'
  ];
}
