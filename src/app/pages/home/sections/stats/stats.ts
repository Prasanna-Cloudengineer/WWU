import { Component } from '@angular/core';
import { STATS } from '../../../../shared/data/stats.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [RevealDirective, CountUpDirective],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class Stats {
  readonly stats = STATS;
}
