import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService ,
    private cartService:CartService,
    private router: Router) {}


  login() {
    console.log('Attempting login with username:', this.username);
  this.authService.login(this.username, this.password).subscribe(
    isLoggedIn => {
      if (isLoggedIn) {
        console.log('Login successful');

        // Check if there's a product to be added to the cart after login
        const productId = this.authService.getProductToBeAddedAfterLogin();
        if (productId !== null) {
          // Add product to the cart
          this.addToCartForUser(productId);
          this.authService.clearProductToBeAddedAfterLogin();
        } else {
          // Navigate to the default return URL or home
          const returnUrl = this.authService.getRedirectUrl() || '/home';
          this.authService.setRedirectUrl('');
          this.router.navigate([returnUrl]);
        }
      } else {
        alert('Invalid username or password');
      }
    },
    error => {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  );
}

private addToCartForUser(productId: number) {
  const productIdStr = productId.toString();
  // Same logic as the addToCartForUser method in the other component
  console.log(`Product ${productId} added to cart`);
  this.cartService.addProductToCart(productIdStr).subscribe(() => {
    // Redirect to the cart page after adding the product
    this.router.navigate(['/cart']);
  });
}

  redirectToSignup() {
    this.router.navigate(['/signup']);
  }
}
