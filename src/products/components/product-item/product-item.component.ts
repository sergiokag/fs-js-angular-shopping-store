import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

import {
  Product,
  ShoppingStoreService,
} from 'src/app/services/shopping-store.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product | null = null;
  public options: { value: number; description: string }[] = Array.from({
    length: 10,
  }).map((_, i) => ({
    value: i + 1,
    description: `${i + 1}`,
  }));

  public constructor(
    private readonly shoppingStoreService: ShoppingStoreService,
    private readonly notificationService: NotificationService
  ) {}

  public onAddToCart(product: Product | null, quantity: string): void {
    if (!product) {
      return;
    }
    this.shoppingStoreService.addToCart(product, +quantity);
    this.notificationService.notifier.info('Product added to cart!', {
      position: 'top-right',
      durations: {
        info: 1000,
      },
    });
  }

  ngOnInit(): void {}
}
