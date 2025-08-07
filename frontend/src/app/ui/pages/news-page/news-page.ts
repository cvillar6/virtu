import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Strapi } from '../../../services/strapi';
import { ContactUs } from '../../components/contact-us/contact-us';
import { New } from '../../components/new/new';
import { INew } from '../../interfaces/new';

@Component({
  selector: 'app-news-page',
  imports: [CommonModule, PaginatorModule, ContactUs, New],
  templateUrl: './news-page.html',
  styleUrl: './news-page.css'
})
export class NewsPage {
  private strapiService = inject(Strapi);

  first: number = 0;
  rows: number = 10;

  news$: Observable<INew[]> = this.strapiService.getContentType('news').pipe(
    map((response) => {
      if (response.data && response.data.length > 0) {
        return response.data.map((oNew: any) => ({
          documentID: oNew.documentId,
          title: oNew.Title,
          description: oNew.Description,
          image: oNew.Image.url,
          content: oNew.Content,
        }));
      }
      return [];
    }),
    catchError(() => {
      return of([]);
    }),
    tap((news) => console.log(news))
  );

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }
}
