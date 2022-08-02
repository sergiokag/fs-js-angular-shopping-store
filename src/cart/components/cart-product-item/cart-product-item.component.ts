import { Component } from '@angular/core';
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
    public readonly shoppingStoreService: ShoppingStoreService
  ) {}

  public onAmountChange(product: Product, quantity: string): void {
    const quantityNum = +quantity;
    if (quantityNum) {
      this.shoppingStoreService.updateTotalPrice(product, quantityNum);
      return;
    }
    this.shoppingStoreService.removeProduct(product);
  }
}
