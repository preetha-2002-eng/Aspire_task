import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AccountHolder} from './bank.model';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  accountInput:string="SavingsAccount";

  holders:AccountHolder[]=[{accountNumber:98452764,accountHolderName:"Ravina",typeOfAccount:"SavingsAccount",
    balance:35000,bankName:"HDFC"},
  {accountNumber:65478326,accountHolderName:"Karthik",typeOfAccount:"SavingsAccount",
  balance:21000,bankName:"ICICI"},
  {accountNumber:89765432,accountHolderName:"Mani",typeOfAccount:"BusinessAccount",
  balance:45000,bankName:"SBI"},
  {accountNumber:39872456,accountHolderName:"John",typeOfAccount:"SavingsAccount",
  balance:50000,bankName:"SBI"},
  {accountNumber:67584839,accountHolderName:"Kavitha",typeOfAccount:"SalaryAccount",
  balance:60000,bankName:"HDFC"},
  {accountNumber:77886655,accountHolderName:"Geetha",typeOfAccount:"BusinessAccount",
  balance:30000,bankName:"HDFC"},
  {accountNumber:78654321,accountHolderName:"Seetha",typeOfAccount:"SalaryAccount",
  balance:80000,bankName:"ICICI"},
  {accountNumber:45256835,accountHolderName:"Ram",typeOfAccount:"SalaryAccount",
  balance:90000,bankName:"SBI"},
  {accountNumber:946872343,accountHolderName:"Nivetha",typeOfAccount:"BusinessAccount",
  balance:10000,bankName:"ICICI"}
  ];

  getStatus(balance: number): string {
    switch (true) {
      case (balance >= 10000 && balance < 20000):
        return "Inactive";
      case (balance >= 20000 && balance<= 60000):
        return "Active";
      case (balance > 60000):
        return "Loyal";
      default:
        return "Unknown";
    }
  }
}
