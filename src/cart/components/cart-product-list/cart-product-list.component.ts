import { Component } from '@angular/core';

import { ShoppingStoreService } from 'src/app/services/shopping-store.service';

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss'],
})
export class CartProductListComponent {
  public constructor(
    public readonly shoppingStoreService: ShoppingStoreService
  ) {}
}
