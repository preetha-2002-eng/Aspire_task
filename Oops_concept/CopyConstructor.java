//Titlle : Copy Constructor
//Author : Preetha I
//Date : 03/04/2024

class Person {
    private String name;
    private int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public Person(Person other) {
        this.name = other.name;
        this.age = other.age;
    }
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

public class CopyConstructor {
    public static void main(String[] args) {
        Person person1 = new Person("Ram", 30);
        Person person2 = new Person(person1);
        System.out.println("Person 1:");
        person1.displayInfo();
        System.out.println("Person 2:");
        person2.displayInfo();
    }
}
