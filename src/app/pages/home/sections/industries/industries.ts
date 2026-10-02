import { Component } from '@angular/core';
import { INDUSTRIES } from '../../../../shared/data/industries.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './industries.html',
  styleUrl: './industries.scss'
})
export class Industries {
  readonly industries = INDUSTRIES;
}
