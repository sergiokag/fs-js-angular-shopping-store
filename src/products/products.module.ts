// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductItemComponent } from './components/product-item/product-item.component';

// Components
import { ProductListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent],
  imports: [BrowserModule],
  exports: [ProductListComponent, ProductItemComponent],
})
export class ProductsModule {}
