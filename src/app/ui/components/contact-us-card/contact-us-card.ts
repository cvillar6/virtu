import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-us-card',
  imports: [],
  templateUrl: './contact-us-card.html',
  styleUrl: './contact-us-card.css'
})
export class ContactUsCard {
  @Input() title!: string;
  @Input() value!: string;
  @Input() icon!: string;
}
