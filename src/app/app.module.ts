// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from 'src/products/products.module';
import { CartModule } from 'src/cart/cart.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { SuccessOrderPageComponent } from './pages/success-order-page/success-order-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    NotFoundPageComponent,
    ProductsListPageComponent,
    CartPageComponent,
    SingleProductPageComponent,
    SuccessOrderPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ProductsModule,
    CartModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
