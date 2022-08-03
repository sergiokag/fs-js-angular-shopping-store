import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingStoreService } from 'src/app/services/shopping-store.service';
import { OrderDetails } from 'src/cart/components/cart-form/cart-form.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  public constructor(
    private shoppingStoreService: ShoppingStoreService,
    private router: Router
  ) {}

  public ngOnInit(): void {}

  public onFormSubmission(order: OrderDetails): void {
    this.shoppingStoreService.order = order;
    this.router.navigate(['/success']);
  }
}
