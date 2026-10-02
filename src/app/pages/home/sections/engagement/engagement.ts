import { Component } from '@angular/core';
import { ENGAGEMENT_MODELS } from '../../../../shared/data/engagement.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './engagement.html',
  styleUrl: './engagement.scss'
})
export class Engagement {
  readonly models = ENGAGEMENT_MODELS;
}
