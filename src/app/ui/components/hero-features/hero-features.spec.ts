import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFeatures } from './hero-features';

describe('HeroFeatures', () => {
  let component: HeroFeatures;
  let fixture: ComponentFixture<HeroFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
