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

  public constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url).pipe(
      tap((data) => {
        this.productListSubject.next(data);
      }),
      map((data) => data)
    );
  }
}
