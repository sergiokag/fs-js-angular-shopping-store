import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { CartProductItemComponent } from './components/cart-product-item/cart-product-item.component';
import { CartProductListComponent } from './components/cart-product-list/cart-product-list.component';

@NgModule({
  declarations: [
    CartFormComponent,
    CartProductListComponent,
    CartProductItemComponent,
  ],
  imports: [BrowserModule, FormsModule],
  exports: [
    CartFormComponent,
    CartProductListComponent,
    CartProductItemComponent,
  ],
})
export class CartModule {}
