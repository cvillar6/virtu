import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Strapi } from '../../../services/strapi';
import { DynamicContent } from '../../components/dynamic-content/dynamic-content';
import { New } from '../../components/new/new';
import { INew } from '../../interfaces/new';

@Component({
  selector: 'app-new-page',
  imports: [CommonModule, DynamicContent, New],
  templateUrl: './new-page.html',
  styleUrl: './new-page.css'
})
export class NewPage {
  private route = inject(ActivatedRoute);
  private strapi = inject(Strapi);

  new$: Observable<INew | null> = this.route.params.pipe(
    switchMap((params: Params) => this.strapi.getSingleItem('news', params['id'])),
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

  relatedNews$: Observable<INew[]> = this.strapi.getContentType('news').pipe(
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
    })
  );
}
