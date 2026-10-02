import { Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-dev-support',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './dev-support.html',
  styleUrl: './dev-support.scss'
})
export class DevSupport {
  readonly items = [
    'Fix production issues',
    'Add new features',
    'Upgrade frameworks',
    'Improve performance',
    'Refactor legacy code',
    'Add automated testing',
    'Improve deployment pipelines',
    'Maintain cloud infrastructure'
  ];
}
