import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneModulePage } from './standalone-module-page';

describe('StandaloneModulePage', () => {
  let component: StandaloneModulePage;
  let fixture: ComponentFixture<StandaloneModulePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneModulePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
