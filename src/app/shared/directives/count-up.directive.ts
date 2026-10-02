import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';

/**
 * Animates a number counting up from 0 to [countTo] once the host scrolls
 * into view. Renders the target value immediately if reduced motion is set.
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input({ alias: 'appCountUp', required: true }) countTo!: number;
  @Input() suffix = '';
  @Input() duration = 1400;

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      host.textContent = `${this.countTo}${this.suffix}`;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animate(host);
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(host);
  }

  private animate(host: HTMLElement): void {
    const start = performance.now();
    const target = this.countTo;

    const step = (now: number) => {
      const progress = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      host.textContent = `${value}${this.suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
