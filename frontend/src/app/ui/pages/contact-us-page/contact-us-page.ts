import { AfterViewInit, Component } from '@angular/core';
import { ContactUsCard } from '../../components/contact-us-card/contact-us-card';
import { ContactUsForm } from '../../components/contact-us-form/contact-us-form';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { ICompanyData } from '../../interfaces/company-data';

declare var VANTA: any;
@Component({
  selector: 'app-contact-us-page',
  imports: [HeroBanner, ContactUsCard, ContactUsForm],
  templateUrl: './contact-us-page.html',
  styleUrl: './contact-us-page.css'
})
export class ContactUsPage implements AfterViewInit {
  contactUs: ICompanyData[] = [
    {
      title: 'Office Address',
      value: '3003 N. Commerce Pkwy, Miramar, FL 33025',
      icon: 'images/map-marker.svg'
    },
    {
      title: 'Phone Number',
      value: 'T. 1.888.569.4201',
      icon: 'images/phone.svg'
    },
    {
      title: 'Email Address',
      value: 'info@virtumedical.com',
      icon: 'images/envelope.svg'
    },
  ]

  ngAfterViewInit(): void {
    VANTA.NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: '#4d4d4d',
      backgroundColor: '#122954',
      points: 20.00,
    })
  }

}
