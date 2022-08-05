import { Component, Input, OnInit } from '@angular/core';

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
    public readonly shoppingStoreService: ShoppingStoreService
  ) {}

  ngOnInit(): void {}
}
