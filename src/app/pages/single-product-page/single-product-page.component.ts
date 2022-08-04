import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Product,
  ShoppingStoreService,
} from 'src/app/services/shopping-store.service';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss'],
})
export class SingleProductPageComponent implements OnInit {
  public product: Product | null = null;
  public options: { value: number; description: string }[] = Array.from({
    length: 10,
  }).map((_, i) => ({
    value: i + 1,
    description: `${i + 1}`,
  }));

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    public readonly shoppingStoreService: ShoppingStoreService
  ) {}

  public onOptionValueChange(value: string): void {
    console.log(value);
  }

  public ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') as string);
    if (id) {
      this.product = this.shoppingStoreService.getSpecificProduct(id);
      return;
    }
    this.router.navigate(['/products']);
  }
}
