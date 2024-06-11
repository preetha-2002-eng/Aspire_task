import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface UserModel {
  name: string;
  email: string;
}

@Component({
  selector: 'app-templatedriven-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './templatedriven-form.component.html',
  styleUrl: './templatedriven-form.component.css'
})
export class TemplatedrivenFormComponent {
  model: UserModel = {
    name: '',
    email: ''
  };

  submitted = false;

  updateModel(key: keyof UserModel, value: string) {
    this.model[key] = value;
  }

  onSubmit(form: any): void {
    this.submitted = true;
    console.log('Form Data: ', form.value);
  }

}
