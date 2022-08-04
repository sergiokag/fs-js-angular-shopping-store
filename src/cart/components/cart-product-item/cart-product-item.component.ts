import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import {
  Product,
  ShoppingStoreService,
} from 'src/app/services/shopping-store.service';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss'],
})
export class CartProductItemComponent {
  public constructor(
    public readonly shoppingStoreService: ShoppingStoreService,
    private readonly notificationService: NotificationService,
  ) {}

  public onAmountChange(product: Product, quantity: string): void {
    const quantityNum = +quantity;
    if (quantityNum) {
      this.shoppingStoreService.updateTotalPrice(product, quantityNum);
      return;
    }
    this.shoppingStoreService.removeProduct(product);
    this.notificationService.notifier.success('Product removed!', {
      position: 'top-right',
      durations: {
        success: 1500,
      },
    });
  }
}
