import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TabsModule } from 'primeng/tabs';
import { BookDemo } from '../../components/book-demo/book-demo';
import { Client } from '../../components/client/client';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { IAnalyticsFeature } from '../../interfaces/analytics-feature';
import { IBookDemo } from '../../interfaces/book-demo';
import { IClient } from '../../interfaces/client';
import { IHeroBanner } from '../../interfaces/hero-banner';
import { ANALYTICS_FEATURES } from '../../shared/constants/analytics-features';

@Component({
  selector: 'app-analytics-portal-page',
  imports: [HeroBanner, BookDemo, TabsModule, CarouselModule, Client],
  templateUrl: './analytics-portal-page.html',
  styleUrl: './analytics-portal-page.css'
})
export class AnalyticsPortalPage {
  heroBanner: IHeroBanner = {
    title: "Virtu's Healthcare Analytics Platform",
    subtitle: 'Make Smarter, Faster Decisions with',
    newImage: 'images/analytics-portal.svg',
  }

  analyticsFeatures: IAnalyticsFeature[] = ANALYTICS_FEATURES;

  clients: IClient[] = [
    {
      name: 'Sandra M.',
      description: "From a leadership standpoint, the flexibility of the platform is huge. Whether you’re running one clinic or multiple it adapts to your needs. We've expanded to three new locations, and Virtu scaled with us seamlessly — no major leaming curves, no downtime.",
      position: 'Clinic Administrator',
      image: 'images/client-1.svg',
    },
    {
      name: 'Jhon Michaels',
      description: "From a leadership standpoint, the flexibility of the platform is huge. Whether you’re running one clinic or multiple it adapts to your needs. We've expanded to three new locations, and Virtu scaled with us seamlessly — no major leaming curves, no downtime.",
      position: 'Physician',
      image: 'images/client-2.svg',
    },
    {
      name: 'Jhon Nguyen',
      description: "From a leadership standpoint, the flexibility of the platform is huge. Whether you’re running one clinic or multiple it adapts to your needs. We've expanded to three new locations, and Virtu scaled with us seamlessly — no major leaming curves, no downtime.",
      position: 'Healthcare Administrator',
      image: 'images/client-3.svg',
    },
  ];

  bookDemo: IBookDemo = {
    title: 'Ready to transform your operations and elevate patient care?',
    description: "Join the growing number of healthcare teams using Virtu's Analytics Portal to take control of their data and drive better outcomes.",
    buttonText: 'Request a Demo Today',
    buttonLink: '/contact-us',
  }
}
