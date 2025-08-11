import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Strapi } from '../../../services/strapi';
import { Blog } from '../../components/blog/blog';
import { DynamicContent } from '../../components/dynamic-content/dynamic-content';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { IBlog } from '../../interfaces/blog';
import { IBlogResponse } from '../../../services/interfaces/blog-response';

@Component({
  selector: 'app-blog-page',
  imports: [HeroBanner, CommonModule, DynamicContent, Blog],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.css'
})
export class BlogPage {
  private route = inject(ActivatedRoute);
  private strapi = inject(Strapi);

  blog$: Observable<IBlog | null> = this.route.params.pipe(
    switchMap((params: Params) => this.strapi.getSingleItem('blogs', params['id'])),
    map((response) => {
      if (response.data) {
        return {
          documentID: response.data.documentId,
          title: response.data.Title,
          description: response.data.Description,
          image: response.data.Image.url,
          content: response.data.Content,
        };
      }
      return null;
    }),
    catchError(() => {
      return of(null);
    })
  );

  relatedBlogs$: Observable<IBlogResponse> = this.strapi.getContentType('blogs', { page: 1, pageCount: 0, pageSize: 3, total: 0 }).pipe(
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
          meta: response.meta
        };
      }
      return {
        data: [],
        meta: {
          page: 1,
          pageCount: 0,
          pageSize: 3,
          total: 0
        }
      };
    }),
    catchError(() => {
      return of({
        data: [],
        meta: {
          page: 1,
          pageCount: 0,
          pageSize: 3,
          total: 0
        }
      });
    })
  );
}
