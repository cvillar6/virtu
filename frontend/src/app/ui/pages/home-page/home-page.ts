import { Component } from '@angular/core';
import { ContactUs } from '../../components/contact-us/contact-us';
import { DataCraft } from '../../components/data-craft/data-craft';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { HeroFeatures } from '../../components/hero-features/hero-features';
import { Results } from '../../components/results/results';
import { SmarterSolutions } from '../../components/smarter-solutions/smarter-solutions';
import { TrustedBy } from '../../components/trusted-by/trusted-by';
import { IHeroBanner } from '../../interfaces/hero-banner';

@Component({
  selector: 'app-home-page',
  imports: [HeroBanner, TrustedBy, SmarterSolutions, HeroFeatures, DataCraft, Results, ContactUs],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  heroBanner: IHeroBanner = {
    title: 'Through Smarter Insights',
    subtitle: 'Drive Better Health',
    description: 'Uncover risk, elevate care quality, and act on what matters—because real outcomes start with real intelligence.',
    backgroundImage: 'bg-home-hero',
    displayButton: true,
  }
}