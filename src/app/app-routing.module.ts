// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { SuccessOrderPageComponent } from './pages/success-order-page/success-order-page.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'products',
    component: ProductsListPageComponent,
  },
  {
    path: 'products/:id',
    component: SingleProductPageComponent,
  },
  {
    path: 'success',
    component: SuccessOrderPageComponent,
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
