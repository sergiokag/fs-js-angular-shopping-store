import { HttpClient } from '@angular/common/http';
import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import AWN from 'awesome-notifications';
import { NotificationService } from './notification.service';
import { ShoppingStoreService } from './shopping-store.service';

describe('ShoppingStoreService', () => {
  let service: ShoppingStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useFactory: () => jasmine.createSpyObj<HttpClient>(HttpClient.name, ['get'], {}),
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
  })

  it('should initialized', () => {
    expect(service).toBeTruthy();
  });
});
