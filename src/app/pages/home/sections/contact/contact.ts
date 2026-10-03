import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { Icon } from '../../../../shared/ui/icon/icon';

// FormSubmit.co forwards each submission to this inbox (no backend needed).
const MAIL_ENDPOINT = 'https://formsubmit.co/ajax/support.workwitus@gmail.com';

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
  readonly isSending = signal(false);
  readonly errorMessage = signal('');

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

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.isSending()) {
      return;
    }

    this.isSending.set(true);
    this.errorMessage.set('');

    const v = this.form.getRawValue();
    try {
      const response = await fetch(MAIL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New enquiry from ${v.name} - ${v.service}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: v.email,
          Name: v.name,
          Email: v.email,
          Phone: v.phone,
          Company: v.company || '-',
          Service: v.service,
          Message: v.message
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === 'false' || result.success === false) {
        throw new Error(`Mail request failed: ${result.message ?? response.status}`);
      }
      this.isSubmitted.set(true);
      this.form.reset();
    } catch (reason: unknown) {
      console.error('Mail request failed', reason);
      this.errorMessage.set(
        'Sorry, we could not send your message. Please try again or email support.workwitus@gmail.com.'
      );
    } finally {
      this.isSending.set(false);
    }
  }
}
