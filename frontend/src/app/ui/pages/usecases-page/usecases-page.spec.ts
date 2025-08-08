import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasesPage } from './usecases-page';

describe('UsecasesPage', () => {
  let component: UsecasesPage;
  let fixture: ComponentFixture<UsecasesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsecasesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsecasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
