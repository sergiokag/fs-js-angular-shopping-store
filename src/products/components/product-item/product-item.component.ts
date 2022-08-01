import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/shopping-store.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() public product: Product | null = null;

  constructor() {}

  ngOnInit(): void {}
}
