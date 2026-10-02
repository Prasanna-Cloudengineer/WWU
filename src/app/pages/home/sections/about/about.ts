import { Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly capabilities = ['Development', 'Mobile', 'Cloud', 'DevOps', 'QA', 'Support'];
}
