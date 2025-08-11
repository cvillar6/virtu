import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { Strapi } from '../../../services/strapi';
import { ContactUs } from '../../components/contact-us/contact-us';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { New } from '../../components/new/new';
import { IPagination } from '../../../services/interfaces/pagination';
import { INewResponse } from '../../../services/interfaces/new-response';

@Component({
  selector: 'app-news-page',
  imports: [HeroBanner, CommonModule, PaginatorModule, ContactUs, New],
  templateUrl: './news-page.html',
  styleUrl: './news-page.css'
})
export class NewsPage {
  private strapiService = inject(Strapi);

  first: number = 1;
  rows: number = 6;

  pagination: WritableSignal<IPagination> = signal({
    page: 1,
    pageCount: 0,
    pageSize: 6,
    total: 0
  });

  news$: Observable<INewResponse> = toObservable(this.pagination).pipe(
    switchMap((pagination) =>
      this.strapiService.getContentType('news', pagination).pipe(
        map((response) => {
          if (response.data && response.data.length > 0) {
            return {
              data: response.data.map((oNew: any) => ({
                documentID: oNew.documentId,
                title: oNew.Title,
                description: oNew.Description,
                image: oNew.Image.url,
                content: oNew.Content,
              })),
              meta: response.meta.pagination
            };
          }
          return {
            data: [],
            meta: pagination
          };
        }),
        catchError(() => {
          return of({
            data: [],
            meta: pagination
          });
        }),
      )
    )
  );

  onPageChange(event: PaginatorState) {
    this.pagination.set({
      page: (event.page ?? 1) + 1,
      pageCount: event.pageCount ?? 0,
      pageSize: event.rows ?? 6,
      total: 0
    });
  }
}
