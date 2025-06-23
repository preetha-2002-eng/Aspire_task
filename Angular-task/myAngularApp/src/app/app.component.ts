import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HistoryComponent } from './history/history.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CartComponent,CheckoutComponent,HistoryComponent,ProductDetailsComponent,RouterOutlet,ProductComponent,HttpClientModule,LoginComponent,SignupComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngularApp';
  constructor(private router: Router) {}

 
  logout() {
    // Implement logout functionality here
    alert('You have logged out successfully!');
    this.router.navigate(['/home']);
  }
  
}
