import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySection } from './industry-section';

describe('IndustrySection', () => {
  let component: IndustrySection;
  let fixture: ComponentFixture<IndustrySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
