import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StudentComponent } from './student/student.component';
import { BankComponent } from './bank/bank.component';
import { ProductdetComponent } from './productdet/productdet.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplatedrivenFormComponent } from './templatedriven-form/templatedriven-form.component';

export const routes: Routes = [
    {
        path:"shop",
        component:ShopComponent

    },
    {
        path:"student",
        component:StudentComponent
  
    }
    ,
    {
        path:"product",
        component:ProductdetComponent
  
    }
    ,
    {
        path:"bank",
        component:BankComponent
  
    },
    {
        path:"rform",
        component:ReactiveFormComponent
  
    },
    {
        path:"tform",
        component:TemplatedrivenFormComponent
    },
    
    {
        path:"**",
        component:ShopComponent
  
    }
];
