import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Strapi } from '../../../services/strapi';
import { Blog } from '../../components/blog/blog';
import { ContactUs } from '../../components/contact-us/contact-us';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { IBlog } from '../../interfaces/blog';

@Component({
  selector: 'app-blogs-page',
  imports: [HeroBanner, PaginatorModule, ContactUs, CommonModule, Blog],
  templateUrl: './blogs-page.html',
  styleUrl: './blogs-page.css'
})
export class BlogsPage {
  private strapiService = inject(Strapi);

  first: number = 0;
  rows: number = 10;

  blogs: Observable<IBlog[]> = this.strapiService.getContentType('blogs').pipe(
    map((response) => {
      if (response.data && response.data.length > 0) {
        return response.data.map((blog: any) => ({
          documentID: blog.documentId,
          title: blog.Title,
          description: blog.Description,
          image: blog.Image.url,
          content: blog.Content,
        }));
      }
      return [];
    }),
    catchError(() => {
      return of([]);
    }),
    tap((blogs) => console.log(blogs))
  );

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }

}
