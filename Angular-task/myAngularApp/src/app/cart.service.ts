import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable, forkJoin, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

interface CartItem {
  productId: string;
  quantity: number;
  size?: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  availableSizes: string[]
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = 'http://localhost:3000/cart';
  private productsUrl = 'http://localhost:3000/products';

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.http.get<CartItem[]>(this.cartUrl).subscribe(items => {
      this.cartItemsSubject.next(items);
    });
  }

  addToCart(product: Product, quantity: number): void {
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find(item => item.productId === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentItems.push({ productId: product.id, quantity });
    }

    this.updateCartItems([...currentItems]);
  }

  removeProductFromCart(productId: string): Observable<void> {
    return this.http.get<any[]>(`${this.cartUrl}?productId=${productId}`).pipe(
      switchMap((cartItems) => {
        if (cartItems.length > 0) {
          const cartItemId = cartItems[0].id; // Extract the cart item's ID
          const url = `${this.cartUrl}/${cartItemId}`; // Create the full URL for deletion
          return this.http.delete<void>(url).pipe(
            tap(() => {
              const updatedItems = this.cartItemsSubject.value.filter(item => item.productId !== productId);
              this.updateCartItems(updatedItems);
            })
          );
        } else {
          return of();
        }
      })
    );
  }

  private updateCartItems(items: CartItem[]): void {
    this.cartItemsSubject.next(items);
    this.saveCartItems(items).subscribe();
  }
  
  private saveCartItems(items: CartItem[]): Observable<void> {
    return forkJoin(
      items.map(item => this.http.post<void>(this.cartUrl, item))
    ).pipe(map(() => {}));
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$.pipe(map(items => items));
  }

  

  getProductsByIds(ids: string[]): Observable<Product[]> {
    return forkJoin(ids.map(id =>
      this.http.get<Product>(`${this.productsUrl}/${id}`).pipe(
        catchError(() => of(null))
      )
    )).pipe(
      map(products => products.filter(product => product !== null) as Product[])
    );
  }

  

  addProductToCart(productId: string, quantity: number = 1): Observable<any> {
    return this.http.post<any>(this.cartUrl, { productId, quantity }).pipe(
      tap(() => this.loadCartItems())
    );
  }
}


