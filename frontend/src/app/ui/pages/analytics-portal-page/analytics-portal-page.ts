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
    title: 'Virtu’s Analytics Portal',
    subtitle: 'Make Smarter, Faster Decisions with',
    description: "Virtu's Analytics Portal is a powerful platform that helps healthcare providers manage the daily complexity of running a facility — from data and operations to patient care and finances — all in one place. \n\nWith 9 purpose-built features, the portal turns complex data into clear, actionable insights — helping your team move faster, improve care quality, and stay financially strong.",
  }

  analyticsFeatures: IAnalyticsFeature[] = ANALYTICS_FEATURES;

  clients: IClient[] = [
    {
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      position: 'CEO',
      image: 'images/client-1.svg',
    },
    {
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      position: 'CEO',
      image: 'images/client-1.svg',
    },
    {
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      position: 'CEO',
      image: 'images/client-1.svg',
    },
  ];



  bookDemo: IBookDemo = {
    title: 'Ready to transform your operations and elevate patient care?',
    description: "Join the growing number of healthcare teams using Virtu's Analytics Portal to take control of their data and drive better outcomes.",
    buttonText: 'Request a Demo Today',
    buttonLink: '/contact-us',
  }
}
