import { Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './final-cta.html',
  styleUrl: './final-cta.scss'
})
export class FinalCta {}
