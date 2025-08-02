import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { Contact } from '../../../services/contact';


@Component({
  selector: 'app-contact-us-form',
  imports: [InputTextModule, TextareaModule, ButtonModule, ReactiveFormsModule],

  templateUrl: './contact-us-form.html',
  styleUrl: './contact-us-form.css'
})
export class ContactUsForm {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
  });

  private contactService = inject(Contact);

  onSubmit() {
    this.contactService.sendContact(this.form.value).subscribe((res) => {
      console.log(res);
    });
  }

}
