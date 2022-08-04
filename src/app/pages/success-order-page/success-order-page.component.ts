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

  public constructor(
    public readonly shoppingStoreService: ShoppingStoreService,
    private router: Router
  ) {}

  public ngOnInit(): void {}

  public onNewOrder(): void {
    this.router.navigate(['/products']).then((isSuccess) => {
      if (isSuccess) {
        this.shoppingStoreService.setState({ cart: [], order: null });
      }
    });
  }
}
