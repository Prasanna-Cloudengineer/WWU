import { Component } from '@angular/core';
import { PROCESS_STEPS } from '../../../../shared/data/process.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './process.html',
  styleUrl: './process.scss'
})
export class Process {
  readonly steps = PROCESS_STEPS;
}
