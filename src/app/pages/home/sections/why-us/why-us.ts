import { Component, signal } from '@angular/core';
import { WHY_US } from '../../../../shared/data/stats.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss'
})
export class WhyUs {
  readonly reasons = WHY_US;
  readonly activeIndex = signal(0);

  setActive(index: number): void {
    this.activeIndex.set(index);
  }
}
