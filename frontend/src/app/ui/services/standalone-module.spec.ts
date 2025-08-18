import { TestBed } from '@angular/core/testing';

import { StandaloneModule } from './standalone-module';

describe('StandaloneModule', () => {
  let service: StandaloneModule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandaloneModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
