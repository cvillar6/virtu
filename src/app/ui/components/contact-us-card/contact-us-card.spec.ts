import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCard } from './contact-us-card';

describe('ContactUsCard', () => {
  let component: ContactUsCard;
  let fixture: ComponentFixture<ContactUsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
