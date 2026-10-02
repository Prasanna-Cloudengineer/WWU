import { Component } from '@angular/core';
import { TECHNOLOGIES } from '../../../../shared/data/technologies.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-tech-ecosystem',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './tech-ecosystem.html',
  styleUrl: './tech-ecosystem.scss'
})
export class TechEcosystem {
  readonly categories = TECHNOLOGIES;
}
