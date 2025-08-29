import { Injectable } from '@angular/core';
import { IStandaloneModule } from '../interfaces/standalone-module';
import { STANDALONE_MODULES } from '../shared/constants/standalone-modules';

@Injectable({
  providedIn: 'root'
})
export class StandaloneModule {
  private standaloneModules: IStandaloneModule[] = STANDALONE_MODULES;

  getStandaloneModule(id: string): IStandaloneModule | undefined {
    return this.standaloneModules.find(module => module.id === id);
  }
}
