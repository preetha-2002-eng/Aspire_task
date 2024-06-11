import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { BankComponent } from './bank/bank.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CubePipe } from './cube.pipe'; 
import { ShirtSizePipe } from './shirt-size.pipe';
import { GenderPipe } from './gender.pipe';
import { ProductdetComponent } from './productdet/productdet.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplatedrivenFormComponent } from './templatedriven-form/templatedriven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplatedrivenFormComponent,ReactiveFormComponent,ProductComponent,HttpClientModule,GenderPipe,ShirtSizePipe,ProductdetComponent,CubePipe,CommonModule ,RouterLink,RouterOutlet,StudentComponent,FormsModule,ShopComponent,BankComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngular';
  joinDate: Date= new Date();
}
