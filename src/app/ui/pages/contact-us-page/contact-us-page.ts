import { Component } from '@angular/core';
import { ContactUsCard } from '../../components/contact-us-card/contact-us-card';
import { ContactUsForm } from '../../components/contact-us-form/contact-us-form';

@Component({
  selector: 'app-contact-us-page',
  imports: [ContactUsCard, ContactUsForm],
  templateUrl: './contact-us-page.html',
  styleUrl: './contact-us-page.css'
})
export class ContactUsPage {
  contactUs = [
    {
      title: 'Office Address',
      value: '3003 N. Commerce Pkwy, Miramar, FL 33025',
      icon: 'map-marker'
    },
    {
      title: 'Phone Number',
      value: 'T. 1.888.569.4201',
      icon: 'phone'
    },
    {
      title: 'Email Address',
      value: 'info@virtumedical.com',
      icon: 'envelope'
    },
  ]
}
