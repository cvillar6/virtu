import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Strapi } from '../../../services/strapi';
import { ContactUs } from '../../components/contact-us/contact-us';
import { Usecase } from '../../components/usecase/usecase';
import { IUsecase } from '../../interfaces/usecase';

@Component({
  selector: 'app-usecases-page',
  imports: [CommonModule, PaginatorModule, ContactUs, Usecase],
  templateUrl: './usecases-page.html',
  styleUrl: './usecases-page.css'
})
export class UsecasesPage {
  private strapiService = inject(Strapi);

  first: number = 0;
  rows: number = 10;

  usecases$: Observable<IUsecase[]> = this.strapiService.getContentType('usecases').pipe(
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
    }),
    tap((usecases) => console.log(usecases))
  );

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }
}
