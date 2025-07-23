import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-contact-us-form',
  imports: [InputTextModule, TextareaModule, ButtonModule],
  templateUrl: './contact-us-form.html',
  styleUrl: './contact-us-form.css'
})
export class ContactUsForm {

}
