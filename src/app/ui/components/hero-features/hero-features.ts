import { Component } from '@angular/core';
import { HeroFeatureCard } from '../hero-feature-card/hero-feature-card';

@Component({
  selector: 'app-hero-features',
  imports: [HeroFeatureCard],
  templateUrl: './hero-features.html',
  styleUrl: './hero-features.css'
})
export class HeroFeatures {
  readonly FEATURES = [
    {
      title: 'Powerful Dashboards -No Code Required',
      description: 'Create dynamic dashboards and visualizations without writing a single line of code. AI-assisted tools surface trends automatically, helping your team make smarter decisions, faster.',
      image: '/images/hero-feature-1.svg'
    },
    {
      title: 'See the Big Picture in Real Time',
      description: 'Turn complex data into clear, interactive visuals that update instantly -so your team can act on what’s happening right now.',
      image: '/images/hero-feature-2.svg'
    },
    {
      title: 'Smarter Workflows, Less Guesswork',
      description: 'Quickly find the insights that matter most. Uncover opportunities to improve performance, retain patients, and prevent disenrollment. ',
      image: '/images/hero-feature-3.svg'
    },
    {
      title: 'Seamless Integration, Maximum Efficiency',
      description: 'Connect effortlessly with your existing systems to keep data flowing, reduce errors, and enhance collaboration across departments.',
      image: '/images/hero-feature-4.svg'
    }
  ]
}
