import { HttpClient } from '@angular/common/http';
import { Provider } from '@angular/core';
import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import AWN from 'awesome-notifications';
import { NotificationService } from './notification.service';
import { Product, ShoppingStoreService } from './shopping-store.service';

describe('ShoppingStoreService', () => {
  let service: ShoppingStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useFactory: () =>
            jasmine.createSpyObj<HttpClient>(HttpClient.name, ['get'], {}),
        },
        {
          provide: NotificationService,
          useFactory: () =>
            jasmine.createSpyObj<NotificationService>(
              NotificationService.name,
              [],
              {
                notifier: new AWN(),
              }
            ),
        },
      ] as Provider[],
    });
  });

  beforeEach(() => {
    const httpClientSpy = TestBed.inject(HttpClient);
    const notificationServiceSpy = TestBed.inject(NotificationService);
    service = new ShoppingStoreService(httpClientSpy, notificationServiceSpy);
  });

  it('should initialized', () => {
    expect(service).toBeTruthy();
  });

  describe('setState', () => {
    it('should add a product to state products', fakeAsync(() => {
      // Arrange
      const products: Product[] = [
        {
          id: 1,
          title: 'Test Product Title 1',
          price: 1000,
          description: 'Test Product Description 1',
          category: 'Test Category',
          image: 'https://picsum.photos/200/200',
          quantity: 1,
          rating: {
            rate: 2,
            count: 2,
          },
        },
      ];

      // Act
      service.setState({ products });
      tick(1000);
      const state = service.getState();

      // Assert
      expect(state.products.length).toBe(1);
      expect(state.products[0].title).toBe('Test Product Title 1');
      flush();
    }));

    it('should add and remove a product to state', fakeAsync(() => {
      // Arrange
      const products: Product[] = [
        {
          id: 1,
          title: 'Test Product Title 1',
          price: 1000,
          description: 'Test Product Description 1',
          category: 'Test Category',
          image: 'https://picsum.photos/200/200',
          quantity: 1,
          rating: {
            rate: 2,
            count: 2,
          },
        },
      ];

      // Act
      service.setState({ products });
      tick(1000);
      service.setState({ products: [] });
      const state = service.getState();

      // Assert
      expect(state.products.length).toBe(0);
      flush();
    }));
  });

  describe('addToCart', () => {
    it('should not add products to cart When empty products', () => {
      // Arrange
      const setStateSpy = spyOn(service, 'setState');
      // Act
      service.addToCart(null, 0);
      // Assert
      expect(setStateSpy).not.toHaveBeenCalled();
    });

    it('should add products to cart', fakeAsync(() => {
      // Arrange
      const product: Product = {
        id: 1,
        title: 'Test Product Title 1',
        price: 1000,
        description: 'Test Product Description 1',
        category: 'Test Category',
        image: 'https://picsum.photos/200/200',
        quantity: 1,
        rating: {
          rate: 2,
          count: 2,
        },
      };

      // Act
      service.addToCart(product, 2);
      tick(1000);
      const state = service.getState();

      // Assert
      expect(state.cart.length).toBe(1);
      expect(state.cart[0].quantity).toBe(2);
      flush();
    }));
  });
});
