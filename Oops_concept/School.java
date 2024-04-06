//Titlle : Method overriding(run time polymorphism)
//Author : Preetha I
//Date : 02/04/2024

class Person {
    public String name;
    public int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}
class Student extends Person {
    public int rollNumber;
    public Student(String name, int age, int rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    @Override
    public void displayInfo() {
        super.displayInfo(); 
        System.out.println("Roll Number: " + rollNumber);
    }
}

public class School {
    public static void main(String[] args) {
        Person person1 = new Person("Mary", 30);
        Student student1 = new Student("Jack", 15, 101);
        System.out.println("Person Information:");
        person1.displayInfo();
        System.out.println("Student Information:");
        student1.displayInfo();
    }
}
