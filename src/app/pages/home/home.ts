import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { CapabilityStrip } from './sections/capability-strip/capability-strip';
import { About } from './sections/about/about';
import { Stats } from './sections/stats/stats';
import { Services } from './sections/services/services';
import { WhyUs } from './sections/why-us/why-us';
import { TechEcosystem } from './sections/tech-ecosystem/tech-ecosystem';
import { DevSupport } from './sections/dev-support/dev-support';
import { Industries } from './sections/industries/industries';
import { Process } from './sections/process/process';
import { Engagement } from './sections/engagement/engagement';
import { Testimonials } from './sections/testimonials/testimonials';
import { Faq } from './sections/faq/faq';
import { FinalCta } from './sections/final-cta/final-cta';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    CapabilityStrip,
    About,
    Stats,
    Services,
    WhyUs,
    TechEcosystem,
    DevSupport,
    Industries,
    Process,
    Engagement,
    Testimonials,
    Faq,
    FinalCta,
    Contact
  ],
  templateUrl: './home.html'
})
export class Home {}
