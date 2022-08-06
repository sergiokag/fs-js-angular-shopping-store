import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  shareReplay,
  tap,
} from 'rxjs';

import { NotificationService } from './notification.service';

import { OrderDetails } from 'src/cart/components/cart-form/cart-form.component';

export interface ShoppingStoreState {
  cart: Product[];
  products: Product[];
  order: OrderDetails | null;
}
export interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingStoreService {
  public readonly url = 'https://fakestoreapi.com/products';
  public readonly cartProducts$: Observable<Product[]>;
  public readonly cartProductsPrice$: Observable<number>;
  public readonly clientName$: Observable<string>;

  #state: BehaviorSubject<ShoppingStoreState>;

  public constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService
  ) {
    const initialState: ShoppingStoreState = {
      cart: [],
      products: [],
      order: null,
    };

    this.#state = new BehaviorSubject<ShoppingStoreState>(initialState);
    this.cartProducts$ = this.#state
      .asObservable()
      .pipe(map((state) => state.cart));
    this.cartProductsPrice$ = this.cartProducts$.pipe(
      map((cart) =>
        cart.reduce(
          (acc, currProd) =>
            (acc += currProd.quantity ? currProd.price * currProd.quantity : 0),
          0
        )
      )
    );
    this.clientName$ = this.#state
      .asObservable()
      .pipe(map((state) => state.order?.fullName ?? ''));
  }

  public getState(): ShoppingStoreState {
    return this.#state.value;
  }

  public setState(partialState: Partial<ShoppingStoreState>): void {
    const currentState = this.#state.getValue();
    const nextState = Object.assign({}, currentState, partialState);

    this.#state.next(nextState);
  }

  public addToCart(product: Product | null, quantity: number): void {
    if (!product || !quantity) {
      return;
    }

    product.quantity = quantity;

    const updatedCart = [
      ...this.#state.getValue().cart.filter((prdct) => prdct.id !== product.id),
      product,
    ];
    this.setState({ cart: updatedCart });

    this.notificationService.notifier.info('Product added to cart!', {
      position: 'top-right',
      durations: {
        info: 1000,
      },
    });
  }

  public getProducts(): Observable<Product[]> {
    // trick to avoid reaching the fakestoreapi
    if (this.#state.getValue().products.length) {
      return this.#state.asObservable().pipe(map((state) => state.products));
    }

    return this.httpClient.get<Product[]>(this.url).pipe(
      tap((data) => {
        this.setState({ products: data });
        this.notificationService.notifier.success('Products have loaded!');
      }),
      catchError((error) => {
        console.error(error);
        return [];
      })
    );
  }

  public getSpecificProduct(id: number): Product | null {
    const foundProduct = this.#state
      .getValue()
      .products.find((obj) => obj.id === id);
    return foundProduct || null;
  }

  public updateTotalPrice(product: Product, quantity: number): void {
    const currentCart = this.#state.getValue().cart;
    const foundProduct = currentCart.find((obj) => obj.id === product.id);
    if (foundProduct) {
      const updatedCart = currentCart.map((obj) => {
        if (obj.id === foundProduct.id) {
          return {
            ...obj,
            quantity: quantity,
          };
        }
        return obj;
      });
      this.setState({ cart: updatedCart });
    }
  }

  public removeProduct(product: Product): void {
    const currentCart = this.#state.getValue().cart;
    const filteredCart = currentCart.filter((prd) => prd.id !== product.id);

    this.setState({ cart: filteredCart });
  }
}
