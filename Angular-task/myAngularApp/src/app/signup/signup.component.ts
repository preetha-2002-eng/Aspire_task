import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.userService.getUserByEmail(this.email).subscribe(existingUser => {
      if (existingUser.length > 0) {
        alert('You already have an account');
      } else {
        const newUser = {
          username: this.username,
          email: this.email,
          password: this.password
        };

        this.userService.createUser(newUser).subscribe(() => {
          alert('Signup successful');
          this.router.navigate(['/login']);
        });
      }
    });
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
