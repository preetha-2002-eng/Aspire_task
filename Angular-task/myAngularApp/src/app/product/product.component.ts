import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  categoryInput: string = 'all';
  price: string = 'all';
  productdata: any;
  products: any[] = [];
  

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit() {
    this.service.getAllProducts().subscribe((data) => {
      this.productdata = data;
    });
  }

  filteredProducts() {
    return this.productdata.filter((product: any) => {
      return this.categoryFilter(product) && this.priceFilter(product);
    });
  }

  categoryFilter(product: any) {
    if (this.categoryInput === 'all') {
      return true;
    }
    return product.category === this.categoryInput;
  }

  priceFilter(product: any) {
    if (this.price === 'all') {
      return true;
    }
    const priceRange = this.price.split('-');
    const minPrice = parseInt(priceRange[0], 10);
    const maxPrice = parseInt(priceRange[1], 10);
    return product.price >= minPrice && product.price <= maxPrice;
  }
  // goToProductDetail(productId: number): void {
  //   this.router.navigate(['/products', productId]);
  // }
}