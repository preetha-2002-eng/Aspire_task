import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

interface CartItem {
  productId: string;
  quantity: number;
  size?: string;
  product: Product;
}

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  availableSizes: string[]
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  address: string = '';
  paymentMethod: string = '';
  products: Product[] = [];
  availableSizes: { [key: string]: string[] } = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = history.state['items'] || [];

  if (!this.cartItems.length) {
    console.error('No items in cart to fetch details for.');
  } else {
    this.fetchProductDetails().subscribe((products) => {
      this.products = products;
      this.availableSizes = this.extractAvailableSizes(products);
      this.calculateTotalPrice();
    });
  }
  }




  fetchProductDetails(): Observable<Product[]> {
    const productIds = this.cartItems.map(item => item.productId);

    return forkJoin(
      productIds.map(id =>
        this.http.get<Product>(`http://localhost:3000/products/${id}`).pipe(
          catchError(error => {
            console.error(`Error fetching product with ID ${id}:`, error);
            return of(null);
          })
        )
      )
    ).pipe(
      map(products => {
        return products.filter(p => p !== null) as Product[];
      })
    );
  }

  extractAvailableSizes(products: Product[]): { [key: string]: string[] } {
    const sizes: { [key: string]: string[] } = {};
    products.forEach(product => {
      sizes[product.id] = product.availableSizes;
    });
    return sizes;
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => {
      const product = this.findProduct(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  placeOrder(): void {
    if (!this.address || !this.paymentMethod) {
      alert('Please complete all required fields.');
      return;
    }

    const order = {
      items: this.cartItems,
      address: this.address,
      paymentMethod: this.paymentMethod,
      totalPrice: this.totalPrice
    };

    this.http.post('http://localhost:3000/orders', order).subscribe(() => {
      this.router.navigate(['/order-confirmation']);
    });
  }

  

  findProduct(productId: string): Product | undefined {
    return this.products.find(product => product.id === productId);
  }
}
