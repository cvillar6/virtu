import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { Contact } from '../../../services/contact';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-contact-us-form',
  imports: [
    InputTextModule,
    TextareaModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
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

  messageSent = signal(false);
  isSubmitting = signal(false);

  onSubmit() {
    this.isSubmitting.set(true);
    this.contactService.sendContact(this.form.value).pipe(
      catchError(() => {
        return of(false);
      }),
      finalize(() => {
        this.isSubmitting.set(false);
      })
    ).subscribe((res) => {
      if (res) {
        this.messageSent.set(true);
        this.form.reset();
      }
    });
  }

}
