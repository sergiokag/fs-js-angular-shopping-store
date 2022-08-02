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
  public cardProductsDetails: [Product, number][] = [];

  public constructor(
    public readonly shoppingStoreService: ShoppingStoreService
  ) {
    this.cardProductsDetails = this.shoppingStoreService.cartProducts;
  }

  public onAmountChange(
    product: Product,
    quantity: string
  ): void {
    this.shoppingStoreService.updateTotalPrice(product, +quantity)
  }
}
