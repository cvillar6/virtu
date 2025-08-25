import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { BookDemo } from '../../components/book-demo/book-demo';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { KeyFeature } from '../../components/key-feature/key-feature';
import { IStandaloneModule } from '../../interfaces/standalone-module';
import { StandaloneModule } from '../../services/standalone-module';

@Component({
  selector: 'app-standalone-module-page',
  imports: [HeroBanner, AccordionModule, KeyFeature, BookDemo, CommonModule],
  templateUrl: './standalone-module-page.html',
  styleUrl: './standalone-module-page.css'
})
export class StandaloneModulePage {
  private standaloneModule = inject(StandaloneModule);
  private activatedRoute = inject(ActivatedRoute);

  activePanel: number = 0;

  standaloneModule$: Observable<IStandaloneModule | undefined> = this.activatedRoute.params.pipe(
    switchMap((params: Params) => {
      const module = this.standaloneModule.getStandaloneModule(params['id']);
      if (module) {
        return of(module);
      }
      return of(undefined);
    }),
    catchError(() => {
      return of(undefined);
    })
  );
}
