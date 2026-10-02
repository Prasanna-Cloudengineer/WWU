import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject, numberAttribute } from '@angular/core';

/**
 * Adds an `is-visible` class when the host element scrolls into view.
 * Respects prefers-reduced-motion by revealing immediately without animation.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input({ alias: 'appReveal', transform: numberAttribute }) delay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    host.classList.add('reveal');

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      host.classList.add('is-visible');
      return;
    }

    if (this.delay) {
      host.style.transitionDelay = `${this.delay}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            host.classList.add('is-visible');
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
