import { HttpClient } from '@angular/common/http';
import { Provider } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SingleProductPageComponent } from './single-product-page.component';

describe('SingleProductPageComponent', () => {
  let component: SingleProductPageComponent;
  let fixture: ComponentFixture<SingleProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleProductPageComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: HttpClient,
          useFactory: () =>
            jasmine.createSpyObj<HttpClient>(HttpClient.name, ['get'], {}),
        },
      ] as Provider[],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
