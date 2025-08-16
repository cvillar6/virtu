import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPagination } from './interfaces/pagination';

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

  getContentType(contentType: string, pagination?: IPagination): Observable<any> {
    return this.http.get(`${this.apiURL}/api/${contentType}?populate=*&pagination[page]=${pagination?.page ?? 1}&pagination[pageSize]=${pagination?.pageSize ?? 10}&pagination[total]=${pagination?.total ?? 0}`, { headers: this.getHeaders() });
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
