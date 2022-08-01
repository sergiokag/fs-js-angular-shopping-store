import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Product,
  ShoppingStoreService,
} from 'src/app/services/shopping-store.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products$: Observable<Product[]> = of([]);

  public constructor(
    private readonly shoppingStoreService: ShoppingStoreService
  ) {}

  public ngOnInit(): void {
    this.products$ = this.shoppingStoreService.getProducts();
  }
}
