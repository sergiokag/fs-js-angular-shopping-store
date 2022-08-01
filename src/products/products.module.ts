// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { ProductListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [BrowserModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
