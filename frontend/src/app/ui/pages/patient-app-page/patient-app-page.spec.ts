import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppPage } from './patient-app-page';

describe('PatientAppPage', () => {
  let component: PatientAppPage;
  let fixture: ComponentFixture<PatientAppPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientAppPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
