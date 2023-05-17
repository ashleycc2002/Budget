import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontactdetailsComponent } from './formcontactdetails.component';

describe('FormcontactdetailsComponent', () => {
  let component: FormcontactdetailsComponent;
  let fixture: ComponentFixture<FormcontactdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcontactdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
