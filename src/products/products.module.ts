// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Components
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent],
  imports: [BrowserModule, RouterModule],
  exports: [ProductListComponent, ProductItemComponent],
})
export class ProductsModule {}
