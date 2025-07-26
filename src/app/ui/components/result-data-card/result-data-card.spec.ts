import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDataCard } from './result-data-card';

describe('ResultDataCard', () => {
  let component: ResultDataCard;
  let fixture: ComponentFixture<ResultDataCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultDataCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultDataCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
