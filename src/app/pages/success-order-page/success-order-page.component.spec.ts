import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA, Provider } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SuccessOrderPageComponent } from './success-order-page.component';

describe('SuccessOrderPageComponent', () => {
  let component: SuccessOrderPageComponent;
  let fixture: ComponentFixture<SuccessOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessOrderPageComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: HttpClient,
          useFactory: () =>
            jasmine.createSpyObj<HttpClient>(HttpClient.name, ['get'], {}),
        },
      ] as Provider[],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
