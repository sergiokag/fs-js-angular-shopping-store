import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { ShoppingStoreService } from 'src/app/services/shopping-store.service';

@Component({
  selector: 'app-success-order-page',
  templateUrl: './success-order-page.component.html',
  styleUrls: ['./success-order-page.component.scss'],
})
export class SuccessOrderPageComponent implements OnInit {
  public faSquareCheckIcon = faSquareCheck;
  public clientName = '';
  public orderPrice = 0;

  public constructor(private shoppingStoreService: ShoppingStoreService, private router: Router) {
    this.clientName = this.shoppingStoreService.order?.fullName ?? '';
    this.orderPrice = this.shoppingStoreService.cartProductsPrice;
  }

  public ngOnInit(): void {}

  public onNewOrder(): void {
    this.router.navigate(['/products']).then((isSuccess) => {
      if(isSuccess) {
        this.shoppingStoreService.order = null;
        this.shoppingStoreService.clearCart();
      }
    })
  }
}
