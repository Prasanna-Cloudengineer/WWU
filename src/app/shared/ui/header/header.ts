import { Component, HostListener, signal } from '@angular/core';
import { Icon } from '../icon/icon';
import { NAV_LINKS } from '../../data/nav.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  readonly navLinks = NAV_LINKS;
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
