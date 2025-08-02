import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarterSolutionCard } from './smarter-solution-card';

describe('SmarterSolutionCard', () => {
  let component: SmarterSolutionCard;
  let fixture: ComponentFixture<SmarterSolutionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmarterSolutionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmarterSolutionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
