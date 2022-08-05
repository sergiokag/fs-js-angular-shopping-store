import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA, Provider } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CartPageComponent } from './cart-page.component';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPageComponent],
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

    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
