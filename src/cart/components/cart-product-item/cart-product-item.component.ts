import { Component, Input } from '@angular/core';
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
  @Input() public product: Product = {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    quantity: 0,
    rating: {
      rate: 0,
      count: 0,
    },
  };

  public constructor(
    public readonly shoppingStoreService: ShoppingStoreService,
    private readonly notificationService: NotificationService
  ) {}

  public onAmountChange(product: Product, quantity: string): void {
    const quantityNum = +quantity;
    if (quantityNum) {
      this.shoppingStoreService.updateTotalPrice(product, quantityNum);
      this.notificationService.notifier.success('Product updated!', {
        position: 'top-right',
        durations: {
          success: 1500,
        },
      });
      return;
    }

    this.shoppingStoreService.removeProduct(product);
    this.notificationService.notifier.info('Product removed!', {
      position: 'top-right',
      durations: {
        info: 1500,
      },
    });
  }
}
