import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IPagination } from '../../../services/interfaces/pagination';
import { IUsecaseResponse } from '../../../services/interfaces/usecase-response';
import { Strapi } from '../../../services/strapi';
import { ContactUs } from '../../components/contact-us/contact-us';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { Usecase } from '../../components/usecase/usecase';

@Component({
  selector: 'app-usecases-page',
  imports: [HeroBanner, CommonModule, PaginatorModule, ContactUs, Usecase],
  templateUrl: './usecases-page.html',
  styleUrl: './usecases-page.css'
})
export class UsecasesPage {
  private strapiService = inject(Strapi);

  first: number = 1;
  rows: number = 6;

  pagination: WritableSignal<IPagination> = signal({
    page: 1,
    pageCount: 0,
    pageSize: 6,
    total: 0
  });

  usecases$: Observable<IUsecaseResponse> = toObservable(this.pagination).pipe(
    switchMap((pagination) =>
      this.strapiService.getContentType('usecases', pagination).pipe(
        map((response) => {
          if (response.data && response.data.length > 0) {
            return {
              data: response.data.map((usecase: any) => ({
                documentID: usecase.documentId,
                title: usecase.Title,
                description: usecase.Description,
                image: usecase.Image.url,
                content: usecase.Content,
                extendedDescription: usecase.ExtendedDescription,
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
