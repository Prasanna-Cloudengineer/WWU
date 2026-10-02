import { Component } from '@angular/core';
import { Icon } from '../../../../shared/ui/icon/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {}
