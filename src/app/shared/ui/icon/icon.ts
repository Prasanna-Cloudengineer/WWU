import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type IconName =
  | 'code'
  | 'mobile'
  | 'support'
  | 'testing'
  | 'cloud'
  | 'consulting'
  | 'team'
  | 'arrow-right'
  | 'chevron-down'
  | 'menu'
  | 'close'
  | 'check'
  | 'briefcase'
  | 'quote'
  | 'linkedin'
  | 'facebook'
  | 'instagram'
  | 'x-twitter'
  | 'mail'
  | 'phone'
  | 'pin';

/**
 * Single, self-authored line-icon set (24x24, stroke-based) so the whole
 * site shares one consistent icon system without an external icon library.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name) {
        @case ('code') {
          <polyline points="8 6 2 12 8 18" /><polyline points="16 6 22 12 16 18" />
        }
        @case ('mobile') {
          <rect x="6" y="2" width="12" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" />
        }
        @case ('support') {
          <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" />
          <line x1="4.9" y1="4.9" x2="9.2" y2="9.2" /><line x1="14.8" y1="14.8" x2="19.1" y2="19.1" />
          <line x1="19.1" y1="4.9" x2="14.8" y2="9.2" /><line x1="9.2" y1="14.8" x2="4.9" y2="19.1" />
        }
        @case ('testing') {
          <path d="M9 2h6" /><path d="M12 2v6l6 10a2 2 0 0 1-2 3H8a2 2 0 0 1-2-3l6-10" />
        }
        @case ('cloud') {
          <path d="M7 18a4 4 0 0 1-1-7.87A5.5 5.5 0 0 1 16.5 8h.5a4.5 4.5 0 0 1 0 9H7Z" />
        }
        @case ('consulting') {
          <path d="M2 20V10l10-6 10 6v10" /><path d="M9 20v-6h6v6" />
        }
        @case ('team') {
          <circle cx="8" cy="8" r="3.2" /><circle cx="17" cy="9" r="2.6" />
          <path d="M2.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" />
          <path d="M14.8 14.3c2.4.3 4.2 2.5 4.2 5.7" />
        }
        @case ('arrow-right') {
          <line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" />
        }
        @case ('chevron-down') {
          <polyline points="6 9 12 15 18 9" />
        }
        @case ('menu') {
          <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
        }
        @case ('close') {
          <line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" />
        }
        @case ('check') {
          <polyline points="20 6 9 17 4 12" />
        }
        @case ('briefcase') {
          <rect x="2" y="7" width="20" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        }
        @case ('quote') {
          <path d="M7 7h4v5.5A4.5 4.5 0 0 1 6.5 17H6v-2h.5A2.5 2.5 0 0 0 9 12.5V11H7V7Z" />
          <path d="M15 7h4v5.5a4.5 4.5 0 0 1-4.5 4.5H14v-2h.5a2.5 2.5 0 0 0 2.5-2.5V11h-2V7Z" />
        }
        @case ('linkedin') {
          <rect x="2" y="2" width="20" height="20" rx="3" /><line x1="7" y1="10" x2="7" y2="17" />
          <circle cx="7" cy="6.5" r="0.6" fill="currentColor" /><line x1="12" y1="17" x2="12" y2="10" />
          <path d="M12 12.5a2.5 2.5 0 0 1 5 0V17" />
        }
        @case ('facebook') {
          <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3V3Z" />
        }
        @case ('instagram') {
          <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        }
        @case ('x-twitter') {
          <line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" />
        }
        @case ('mail') {
          <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2 6 12 13 22 6" />
        }
        @case ('phone') {
          <path d="M5 4h4l1.5 4.5L8 10.5a12 12 0 0 0 5.5 5.5l2-2.5L20 15v4a1 1 0 0 1-1 1c-8 0-15-7-15-15a1 1 0 0 1 1-1Z" />
        }
        @case ('pin') {
          <path d="M12 22s7-7.1 7-12.5A7 7 0 0 0 5 9.5C5 14.9 12 22 12 22Z" /><circle cx="12" cy="9.5" r="2.3" />
        }
      }
    </svg>
  `
})
export class Icon {
  @Input({ required: true }) name!: IconName;
  @Input() size = 24;
}
