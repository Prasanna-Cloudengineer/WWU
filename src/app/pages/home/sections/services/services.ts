import { Component } from '@angular/core';
import { SERVICES } from '../../../../shared/data/services.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  readonly services = SERVICES;
}
