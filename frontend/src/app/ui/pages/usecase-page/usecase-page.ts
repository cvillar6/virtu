import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Strapi } from '../../../services/strapi';
import { DynamicContent } from '../../components/dynamic-content/dynamic-content';
import { Usecase } from '../../components/usecase/usecase';
import { IUsecase } from '../../interfaces/usecase';

@Component({
  selector: 'app-usecase-page',
  imports: [CommonModule, DynamicContent, Usecase],
  templateUrl: './usecase-page.html',
  styleUrl: './usecase-page.css'
})
export class UsecasePage {
  private route = inject(ActivatedRoute);
  private strapi = inject(Strapi);

  usecase$: Observable<IUsecase | null> = this.route.params.pipe(
    switchMap((params: Params) => this.strapi.getSingleItem('usecases', params['id'], ['Image', 'Data', 'Info', 'Info.Image'])),
    map((response) => {
      if (response.data) {
        return {
          documentID: response.data.documentId,
          title: response.data.Title,
          description: response.data.Description,
          image: response.data.Image.url,
          content: response.data.Content,
          extendedDescription: response.data.ExtendedDescription,
          data: response.data.Data.map((item: any) => ({
            id: item.id,
            quantity: item.Quantity,
            description: item.Description,
          })),
          info: {
            id: response.data.Info.id,
            content: response.data.Info.Content,
            image: response.data.Info.Image.url,
          },
        };
      }
      return null;
    }),
    catchError(() => {
      return of(null);
    })
  );

  relatedUsecases$: Observable<IUsecase[]> = this.strapi.getContentType('usecases').pipe(
    map((response) => {
      if (response.data && response.data.length > 0) {
        return response.data.map((usecase: any) => ({
          documentID: usecase.documentId,
          title: usecase.Title,
          description: usecase.Description,
          image: usecase.Image.url,
          content: usecase.Content,
          extendedDescription: usecase.ExtendedDescription,
        }));
      }
      return [];
    }),
    catchError(() => {
      return of([]);
    })
  );
}
