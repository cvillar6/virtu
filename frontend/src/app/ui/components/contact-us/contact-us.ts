import { AfterViewInit, Component } from '@angular/core';
import { ContactUsForm } from '../contact-us-form/contact-us-form';

declare var VANTA: any;

@Component({
  selector: 'app-contact-us',
  imports: [ContactUsForm],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css'
})
export class ContactUs implements AfterViewInit {
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
      color: '#666666',
      backgroundColor: '#122954',
      points: 20.00,
    })
  }

}
