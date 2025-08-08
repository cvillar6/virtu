import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Strapi {
  private http = inject(HttpClient);
  private apiURL = environment.apiURL;
  private apiToken = environment.apiToken;

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json'
    });
  }

  getContentType(contentType: string): Observable<any> {
    return this.http.get(`${this.apiURL}/api/${contentType}?populate=*`, { headers: this.getHeaders() });
  }

  getSingleItem(contentType: string, id: number, componentsToPopulate?: string[]): Observable<any> {
    let url = `${this.apiURL}/api/${contentType}/${id}`;

    if (componentsToPopulate && componentsToPopulate.length > 0) {
      url += '?';
      componentsToPopulate.forEach((component, index) => {
        if (index > 0) url += '&';
        url += `populate[${index}]=${component}`;
      });
    } else {
      url += '?populate=*';
    }

    return this.http.get(url, { headers: this.getHeaders() });
  }
}
