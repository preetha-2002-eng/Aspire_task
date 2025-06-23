import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  product: any;
  selectedSize: string = '';
  selectedImage: string = '';

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private cartService:CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) {
      const id = parseInt(productId, 10); // Convert string to number
      this.productService.getProductById(id).subscribe((data: any) => {
        this.product = data;
        this.selectedImage = this.product.images[0];
      });
    } else {
      console.error('Product ID is null');
    }
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  addToCart(productId: number) {
    if (this.authService.isAuthenticated()) {
      // User is authenticated, proceed with adding to the cart
      this.addToCartForUser(productId);
    } else {
      // Store the productId and redirect to login page
      this.authService.setProductToBeAddedAfterLogin(productId);
      this.router.navigate(['/login']);
    }
  }
  
  private addToCartForUser(productId: number) {
    
  const productIdStr = productId.toString();

    this.cartService.addProductToCart(productIdStr).subscribe(
      () => {
        console.log(`Product ${productId} added to cart`);
        this.router.navigate(['/cart']);  // Redirect to the cart page
      },
      error => {
        console.error('Failed to add product to cart', error);
      }
    );
  }
  
  buyNow() {
    console.log('Proceeding to buy the product:', this.product.name);
    // Implement buy logic here
  }

}
