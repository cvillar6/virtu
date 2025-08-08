import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usecase } from './usecase';

describe('Usecase', () => {
  let component: Usecase;
  let fixture: ComponentFixture<Usecase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usecase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usecase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
