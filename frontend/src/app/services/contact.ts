import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../ui/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class Contact {
  private http = inject(HttpClient);

  sendContact(data: IUser) {
    return this.http.post('https://formspree.io/f/mqallbzl', data);
  }
}
