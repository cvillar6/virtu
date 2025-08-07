import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasePage } from './usecase-page';

describe('UsecasePage', () => {
  let component: UsecasePage;
  let fixture: ComponentFixture<UsecasePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsecasePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsecasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
