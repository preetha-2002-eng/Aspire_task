import { Component,OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';

interface Order {
  items: CartItem[];
  address: string;
  paymentMethod: string;
  totalPrice: number;
}

interface CartItem {
  productId: string;
  quantity: number;
  size?: string;
  product?: Product; 
}

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  availableSizes: string[];
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})

export class HistoryComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      // Optionally fetch product details if not included in orders
    });
  }
}