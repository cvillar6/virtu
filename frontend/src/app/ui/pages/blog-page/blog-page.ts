import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Strapi } from '../../../services/strapi';
import { Blog } from '../../components/blog/blog';
import { DynamicContent } from '../../components/dynamic-content/dynamic-content';
import { IBlog } from '../../interfaces/blog';

@Component({
  selector: 'app-blog-page',
  imports: [CommonModule, DynamicContent, Blog],
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
          image: environment.apiURL + response.data.Image.url,
          content: response.data.Content,
        };
      }
      return null;
    }),
    catchError(() => {
      return of(null);
    })
  );

  relatedBlogs$: Observable<IBlog[]> = this.strapi.getContentType('blogs').pipe(
    map((response) => {
      if (response.data && response.data.length > 0) {
        return response.data.map((blog: any) => ({
          documentID: blog.documentId,
          title: blog.Title,
          description: blog.Description,
          image: environment.apiURL + blog.Image.url,
          content: blog.Content,
        }));
      }
      return [];
    }),
    catchError(() => {
      return of([]);
    })
  );
}
