import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../ui/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class Contact {
  private http = inject(HttpClient);

  sendContact(data: User) {
    return this.http.post('https://formspree.io/f/mqallbzl', data);
  }
}
