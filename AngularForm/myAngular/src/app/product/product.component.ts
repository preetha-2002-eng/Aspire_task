import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.2.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  categoryInput:string="Stationary";

  products:product[]=[{productId:101,productName:"iphone",cost:100000,category:"Electronics"},
  {productId:102,productName:"Simcard",cost:400,category:"Electronics"},
  {productId:103,productName:"Bag",cost:2500,category:"Stationary"},
  {productId:104,productName:"PowerBank",cost:5000,category:"Electronics"},
  {productId:105,productName:"File",cost:50,category:"Stationary"},
  {productId:106,productName:"Maaza",cost:70,category:"Beverages"},
  {productId:107,productName:"Mobile",cost:50000,category:"Electronics"},
  {productId:108,productName:"Cola",cost:80,category:"Beverages"},
  {productId:109,productName:"Limka",cost:85,category:"Beverages"},
  {productId:110,productName:"Charger",cost:500,category:"Electronics"},
  {productId:111,productName:"Pencil",cost:20,category:"Stationary"},
  {productId:112,productName:"Laptop",cost:55000,category:"Electronics"},
  {productId:113,productName:"Pen",cost:50,category:"Stationary"},
  {productId:114,productName:"Mirinda",cost:70,category:"Beverages"}
  ];
}
