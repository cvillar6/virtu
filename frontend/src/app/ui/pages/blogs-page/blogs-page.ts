import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { IBlogResponse } from '../../../services/interfaces/blog-response';
import { IPagination } from '../../../services/interfaces/pagination';
import { Strapi } from '../../../services/strapi';
import { Blog } from '../../components/blog/blog';
import { ContactUs } from '../../components/contact-us/contact-us';
import { HeroBanner } from '../../components/hero-banner/hero-banner';

@Component({
  selector: 'app-blogs-page',
  imports: [HeroBanner, PaginatorModule, ContactUs, CommonModule, Blog],
  templateUrl: './blogs-page.html',
  styleUrl: './blogs-page.css'
})
export class BlogsPage {
  private strapiService = inject(Strapi);

  first: number = 1;
  rows: number = 6;

  pagination: WritableSignal<IPagination> = signal({
    page: 1,
    pageCount: 0,
    pageSize: 6,
    total: 0
  });

  blogs$: Observable<IBlogResponse> = toObservable(this.pagination).pipe(
    switchMap((pagination) =>
      this.strapiService.getContentType('blogs', pagination).pipe(
        map((response) => {
          if (response.data && response.data.length > 0) {
            return {
              data: response.data.map((blog: any) => ({
                documentID: blog.documentId,
                title: blog.Title,
                description: blog.Description,
                image: blog.Image.url,
                content: blog.Content,
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
  )


  onPageChange(event: PaginatorState) {
    this.pagination.set({
      page: (event.page ?? 1) + 1,
      pageCount: event.pageCount ?? 0,
      pageSize: event.rows ?? 10,
      total: 0
    });
  }

}
