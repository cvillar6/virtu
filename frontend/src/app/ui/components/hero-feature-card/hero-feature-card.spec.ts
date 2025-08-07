import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFeatureCard } from './hero-feature-card';

describe('HeroFeatureCard', () => {
  let component: HeroFeatureCard;
  let fixture: ComponentFixture<HeroFeatureCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroFeatureCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFeatureCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
