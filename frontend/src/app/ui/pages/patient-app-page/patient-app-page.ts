import { Component } from '@angular/core';
import { BookDemo } from '../../components/book-demo/book-demo';
import { CoreValue } from '../../components/core-value/core-value';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { KeyFeature } from '../../components/key-feature/key-feature';
import { IBookDemo } from '../../interfaces/book-demo';
import { ICoreValue } from '../../interfaces/core-value';
import { IHeroBanner } from '../../interfaces/hero-banner';
import { IKeyFeature } from '../../interfaces/key-feature';

@Component({
  selector: 'app-patient-app-page',
  imports: [HeroBanner, CoreValue, KeyFeature, BookDemo],
  templateUrl: './patient-app-page.html',
  styleUrl: './patient-app-page.css'
})
export class PatientAppPage {
  heroBanner: IHeroBanner = {
    title: 'Patient Health App',
    description: 'Secure. Intuitive. Always with you.',
    video: 'videos/app.mp4',
  }

  features: ICoreValue[] = [
    {
      title: 'Total Health Visibility',
      description: 'Access your full medical history—labs, imaging, diagnoses, visits, and more—in one interactive dashboard with our EHR app.',
      icon: 'pi pi-heart'
    },
    {
      title: 'Smarter Self-Management',
      description: 'Track medications, monitor vital signs from wearable devices, and schedule appointments from anywhere.',
      icon: 'pi pi-heart'
    },
    {
      title: 'On-Demand Support',
      description: 'Chat securely with doctors, manage referrals, and locate nearby pharmacies in just a few taps using the EHR app.',
      icon: 'pi pi-heart'
    },
    {
      title: 'Continuity in Every Setting',
      description: 'Use your dynamic medical card to share critical information in emergencies or new care environments safely.',
      icon: 'pi pi-heart'
    },
    {
      title: 'Privacy and Peace of Mind',
      description: 'Control your health data with role-based permissions and end-to-end encryption for full peace of mind.',
      icon: 'pi pi-heart'
    },
  ]

  keyFeatures: IKeyFeature[] = [
    {
      title: 'Unified Health Dashboard',
      description: 'See your entire medical record—diagnoses, test results, vaccines, past visits—through clean visuals and timelines using our EHR app.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Medication & Appointment Manager',
      description: 'Never miss a dose or visit with smart reminders, virtual scheduling, and a built-in digital medicine cabinet.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Vitals Integration & Monitoring',
      description: 'Automatically log heart rate, oxygen levels, glucose and more via smartwatches or connected health devices with the EHR app.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Secure Messaging & Referrals',
      description: 'Connect directly with providers, manage specialist referrals, and ask questions—all in-app and HIPAA-compliant.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Auto-Generated Medical Card',
      description: 'Quickly share allergies, medications, and conditions with any provider to avoid delays or duplication using our EHR app.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Pharmacy Locator',
      description: 'Find nearby or preferred pharmacies, and send prescriptions with one tap.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    },
    {
      title: 'Granular Consent & Privacy Controls',
      description: 'Decide who can view your information. Built for transparency and trust—with future caregiver access capabilities via the EHR app.',
      icon: 'images/key-feature.svg',
      iconHover: 'images/key-feature-hover.svg'
    }
  ]

  bookDemo: IBookDemo = {
    title: 'Ready to Empower Your Patients?',
    description: 'Virtu’s Patient App can revolutionize engagement, improve outcomes, and return control to where it belongs—in the hands of your patients.',
    buttonText: 'Book a Demo',
    buttonLink: '/contact-us'
  }
}
