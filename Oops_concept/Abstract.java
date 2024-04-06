//Titlle : Abstract class
//Author : Preetha I
//Date : 03/04/2024

abstract class Person {
    public String name;
    public int age;
    abstract void displayInfo();
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    public int rollNumber;
    public String course;
    public Student(String name, int age, int rollNumber, String course) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.course = course;
    }
    @Override
    void displayInfo() {
        System.out.println("Name: " + super.name);
        System.out.println("Age: " + super.age);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Course: " + course);
    }
}

public class Abstract {
    public static void main(String[] args) {
        Student student = new Student("Kumar", 20, 101, "Computer Science");
        System.out.println("Student Information:");
        student.displayInfo();
    }
}
