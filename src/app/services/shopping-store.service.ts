import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

export interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingStoreService {
  public url = 'https://fakestoreapi.com/products';
  private productListSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  private cartMap: Map<Product, number> = new Map();

  public constructor(private httpClient: HttpClient) {}

  public addToCart(product: Product, quantity: number): void {
    // TODO update
    this.cartMap.set(product, quantity);
  }

  public get cartProducts(): [Product, number][] {
    return Array.from(this.cartMap.entries());
  }

  public get cartProductsPrice(): number {
    return Array.from(this.cartMap.entries()).reduce(
      (acc, curr) => acc + curr[0].price * curr[1],
      0
    );
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url).pipe(
      tap((data) => {
        this.productListSubject.next(data);
      }),
      map((data) => data)
    );
  }

  public getSpecificProduct(id: number): Product | null {
    const foundProduct = this.productListSubject.value.find(
      (obj) => obj.id === id
    );
    return foundProduct || null;
  }

  public updateTotalPrice(product: Product, quantity: number): void {
    // TODO update
    this.cartMap.set(product, quantity);
  }
}
