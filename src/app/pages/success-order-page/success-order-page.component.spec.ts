import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessOrderPageComponent } from './success-order-page.component';

describe('SuccessOrderPageComponent', () => {
  let component: SuccessOrderPageComponent;
  let fixture: ComponentFixture<SuccessOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessOrderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
