import { Component } from '@angular/core';
import { CAPABILITY_STRIP } from '../../../../shared/data/stats.data';

@Component({
  selector: 'app-capability-strip',
  standalone: true,
  templateUrl: './capability-strip.html',
  styleUrl: './capability-strip.scss'
})
export class CapabilityStrip {
  readonly items = CAPABILITY_STRIP;
}
