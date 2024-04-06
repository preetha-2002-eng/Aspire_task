//Title : Employee class
//Author : Preetha I
//Date : 02/04/2024

import java.util.Scanner;

public class Employee {
    private int id;
    private String name;
    private String department;
    private int age;
    private double salary;
    
    public Employee(int id,String name,String department, int age) {
        this.id=id;
        this.name = name;
        this.department=department;
        this.age = age;
    }
    public double getSalary(){
        return 200000.0;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter employee ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter employee name: ");
        String name = scanner.nextLine();

        System.out.print("Enter employee Department: ");
        String department = scanner.nextLine();
        
        System.out.print("Enter employee age: ");
        int age = scanner.nextInt();
        
    
        
        Employee employee = new Employee(id,name,department,age);
        
        System.out.println("\nEmployee Details:");
        System.out.println("Employee Id: " + employee.id);
        System.out.println("Employee Name: " + employee.name);
        System.out.println("Employee Department: " + employee.department);
        System.out.println("Employee Age: " + employee.age);
        System.out.println("Employee Salary: " + employee.getSalary());
        
        scanner.close();
    }
}
