import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarterSolutions } from './smarter-solutions';

describe('SmarterSolutions', () => {
  let component: SmarterSolutions;
  let fixture: ComponentFixture<SmarterSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmarterSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmarterSolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
