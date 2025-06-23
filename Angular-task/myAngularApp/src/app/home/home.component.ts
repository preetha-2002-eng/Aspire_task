import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  services = [
    {
      image: 'assets/service1.jfif',
      name: 'Quality Clothing',
      description: 'We provide high-quality clothing items that are both stylish and durable.'
    },
    {
      image: 'assets/service2.jpg',
      name: 'Fast Delivery',
      description: 'Get your orders delivered quickly with our efficient shipping options.'
    },
    {
      image: 'assets/service3.jfif',
      name: 'Customer Support',
      description: 'Our customer support team is always here to help you with your needs.'
    },
    {
      image: 'assets/service4.jfif',
      name: 'Easy Returns',
      description: 'Not satisfied with your purchase? Enjoy hassle-free returns.'
    }
  ];

  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmitContactForm() {
    alert('Your message has been submitted successfully!');
    this.contactForm = { name: '', email: '', message: '' };
  }

  

}
