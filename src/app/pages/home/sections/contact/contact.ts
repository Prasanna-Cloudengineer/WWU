import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

const PHONE_PATTERN = /^[+]?[0-9\s\-()]{7,20}$/;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective, Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly services = [
    'Web Development',
    'Mobile App Development',
    'Development Support',
    'Software Testing',
    'DevOps & Infrastructure',
    'IT Consulting',
    'Dedicated Development Team',
    'Other'
  ];

  readonly isSubmitted = signal(false);

  private readonly fb = new FormBuilder();

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(PHONE_PATTERN)]],
    company: [''],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Mock submission — no backend connected yet.
    this.isSubmitted.set(true);
    this.form.reset();
  }
}
