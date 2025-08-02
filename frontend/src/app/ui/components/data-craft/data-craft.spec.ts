import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCraft } from './data-craft';

describe('DataCraft', () => {
  let component: DataCraft;
  let fixture: ComponentFixture<DataCraft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCraft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCraft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
