//Titlle : Method overriding(run time polymorphism)
//Author : Preetha I
//Date : 02/04/2024

interface BankAccount {
    void withdraw(double amount);
    void deposit(double amount);
    default void checkBalance(double balance) {
        System.out.println("Current balance: $" + balance);
    }
}
class SavingsAccount implements BankAccount {
    private double balance;
    public SavingsAccount(double balance) {
        this.balance = balance;
    }
    @Override
    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("$" + amount + " withdrawn successfully.");
        } else {
            System.out.println("Insufficient funds.");
        }
    }
    @Override
    public void deposit(double amount) {
        balance += amount;
        System.out.println("$" + amount + " deposited successfully.");
    }
    public double getBalance() {
        return balance;
    }
}

public class Bank {
    public static void main(String[] args) {
        SavingsAccount savingsAccount = new SavingsAccount(1000.0);
        savingsAccount.deposit(500.0);
        savingsAccount.withdraw(200.0);
        savingsAccount.checkBalance(savingsAccount.getBalance());
    }
}
