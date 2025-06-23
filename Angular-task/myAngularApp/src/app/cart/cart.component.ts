import { Component , OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';


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
  availableSizes: string[];
}
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.fetchProductDetails().subscribe(products => {
        this.products = products;
        this.updateTotalPrice();
      });
    });
  }

  fetchProductDetails(): Observable<Product[]> {
    const productIds = this.cartItems.map(item => item.productId);
    return forkJoin(productIds.map(id =>
      this.cartService.getProductsByIds([id]) // Pass an array with one id
    )).pipe(
      map(productsArrays => productsArrays.flat()) // Flatten the array of arrays
    );
  }

  findProduct(productId: string): Product | undefined {
    return this.products.find(product => product.id === productId);
  }

  removeFromCart(productId: string): void {
    this.cartService.removeProductFromCart(productId).subscribe(() => {
      // No need to manually reload, the subscription will trigger UI update
    });
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => {
      const product = this.findProduct(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  checkout(): void {
    const navigationExtras = {
      state: {
        items: this.cartItems.map(item => ({
          ...item,
          product: this.findProduct(item.productId)
        }))
      }
    };


    console.log('Navigating to checkout with items:', navigationExtras.state.items);
 
    this.router.navigate(['/checkout'], navigationExtras);
  }
  
 
}
