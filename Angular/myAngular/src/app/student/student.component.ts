import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
   studentName:string="Preetha I";
   studentMark:Number=490;
   joinDate:Date=new Date;
   message:String="This is Event Binding"
   displayMessage(){
    alert(this.message)
   }
  

}
