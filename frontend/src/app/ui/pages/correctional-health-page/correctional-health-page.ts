import { Component } from '@angular/core';
import { BookDemo } from '../../components/book-demo/book-demo';
import { CoreValue } from '../../components/core-value/core-value';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { KeyFeature } from '../../components/key-feature/key-feature';
import { IBookDemo } from '../../interfaces/book-demo';
import { ICoreValue } from '../../interfaces/core-value';
import { IKeyFeature } from '../../interfaces/key-feature';
import { IHeroBanner } from '../../interfaces/hero-banner';

@Component({
  selector: 'app-correctional-health-page',
  imports: [HeroBanner, CoreValue, KeyFeature, BookDemo],
  templateUrl: './correctional-health-page.html',
  styleUrl: './correctional-health-page.css'
})
export class CorrectionalHealthPage {
  heroBanner: IHeroBanner = {
    title: 'Correctional Electronic Medical Records - EHR',
    subtitle: 'EHR Platform for',
    description: 'Virtu’s correctional EHR platform is purpose-built for correctional facilities—giving clinicians, administrators, and support staff a powerful system designed to meet the unique demands of incarcerated care.',
  }
  features: ICoreValue[] = [
    {
      title: 'Continuity of Care in Complex Environments',
      description: 'Track patient care across time, sites, and settings— with workflows designed for intake, rounds, custody coordination, and reintegration using our correctional EHR.',
      icon: 'pi pi-heart'
    },
    {
      title: 'Streamlined Clinical Documentation',
      description: 'Replace paper and fragmented systems with real-time records, automated charting, and easy-to-navigate patient profiles.',
      icon: 'pi pi-heart'
    },
    {
      title: 'Smarter Workflows, Fewer Errors',
      description: 'Eliminate duplication and reduce risk with guided documentation and centralized task management.',
      icon: 'pi pi-heart'
    },
    {
      title: 'Faster, Safer Decision-Making',
      description: 'Gain visibility into labs, medications, risks, and trends to support timely, informed care delivery across disciplines with our correctional electronic medical records.',
      icon: 'pi pi-heart'
    },
  ]

  keyFeatures: IKeyFeature[] = [
    {
      title: 'Role-Based Access & Data Security',
      description: 'Control access by role, use multi-factor authentication, and maintain full audit trails for compliance and oversight with our correctional EHR.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Standards-Based Interoperability',
      description: 'Connect seamlessly with labs, pharmacies, and national health systems using HL7 and FHIR protocols.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Real-Time Analytics',
      description: 'Monitor population health, flag at-risk individuals, track medication adherence, and optimize staffing using our correctional electronic medical records.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Offline Data Capture',
      description: 'Enable uninterrupted care delivery in facilities with limited power or connectivity—data syncs automatically when back online.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Mobile-Friendly Interface',
      description: 'Equip teams with tablets for use during rounds, in remote blocks, or across locations.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Real-Time Alerts & Secure Chat',
      description: 'Respond to urgent needs and coordinate care instantly with built-in, HIPAA-compliant messaging.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
  ]

  bookDemo: IBookDemo = {
    title: 'Ready to modernize healthcare behind the walls?',
    description: 'Let’s bring clarity, accountability, and compassion to every step of the correctional care journey with our correctional EHR.',
    buttonText: 'Book a Demo',
    buttonLink: '/contact-us'
  }
}
