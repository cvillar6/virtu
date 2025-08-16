import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionalHealthPage } from './correctional-health-page';

describe('CorrectionalHealthPage', () => {
  let component: CorrectionalHealthPage;
  let fixture: ComponentFixture<CorrectionalHealthPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrectionalHealthPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectionalHealthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
