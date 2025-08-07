import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Strapi {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:1337';
  private apiToken = 'asd'

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json'
    });
  }

  getContentType(contentType: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/${contentType}?populate=*`, { headers: this.getHeaders() });
  }

  getSingleItem(contentType: string, id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/${contentType}/${id}?populate=*`, { headers: this.getHeaders() });
  }
}
