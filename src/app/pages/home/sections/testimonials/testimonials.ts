import { Component } from '@angular/core';
import { TESTIMONIALS } from '../../../../shared/data/testimonials.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  readonly testimonials = TESTIMONIALS;
}
