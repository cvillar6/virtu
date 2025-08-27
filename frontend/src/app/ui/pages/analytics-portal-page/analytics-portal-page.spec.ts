import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsPortalPage } from './analytics-portal-page';

describe('AnalyticsPortalPage', () => {
  let component: AnalyticsPortalPage;
  let fixture: ComponentFixture<AnalyticsPortalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsPortalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsPortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
