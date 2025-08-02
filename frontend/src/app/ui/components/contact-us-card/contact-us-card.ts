import { Component, Input } from '@angular/core';
import { CompanyData } from '../../interfaces/company-data';

@Component({
  selector: 'app-contact-us-card',
  imports: [],
  templateUrl: './contact-us-card.html',
  styleUrl: './contact-us-card.css'
})
export class ContactUsCard {
  @Input() data!: CompanyData;
}
