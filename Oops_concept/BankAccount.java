//Titlle : Method overloading(complie time polymorphism)
//Author : Preetha I
//Date : 02/04/2024

public class BankAccount {
    private String accountNumber;
    private double balance;
      public BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    public void deposit(double amount) {
        balance += amount;
        System.out.println(amount + " deposited. New balance: " + balance);
    }
    public void deposit(double amount, String description) {
        balance += amount;
        System.out.println(amount + " deposited for " + description + ". New balance: " + balance);
    }
    public static void main(String[] args) {
        BankAccount account = new BankAccount("9877562856", 10000.0);
        account.deposit(500.0);
        account.deposit(200.0, "monthly salary"); 
    }
}
