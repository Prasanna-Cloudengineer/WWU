import { Component, signal } from '@angular/core';
import { FAQS } from '../../../../shared/data/faqs.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  readonly faqs = FAQS;
  readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
