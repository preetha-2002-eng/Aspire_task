//Titlle : Inheritance (single inheritance, multilevel inheritance, hierarchical inheritance)
//Author : Preetha I
//Date : 03/04/2024

class Person {
    String name;
    int age;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// single inheritance
class Student extends Person {
    int rollNumber;
    public Student(String name, int age, int rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    void displayStudentInfo() {
        displayInfo();
        System.out.println("Roll Number: " + rollNumber);
    }
}

// multilevel inheritance
class CollegeStudent extends Student {
    String collegeName;
    public CollegeStudent(String name, int age, int rollNumber, String collegeName) {
        super(name, age, rollNumber);
        this.collegeName = collegeName;
    }
    void displayCollegeStudentInfo() {
        displayStudentInfo(); 
        System.out.println("College Name: " + collegeName);
    }
}

// hierarchical inheritance
class SchoolStudent extends Student {
    String schoolName;
    public SchoolStudent(String name, int age, int rollNumber, String schoolName) {
        super(name, age, rollNumber);
        this.schoolName = schoolName;
    }
    void displaySchoolStudentInfo() {
        displayStudentInfo(); 
        System.out.println("School Name: " + schoolName);
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Student student = new Student("Ravi",19,201);
        System.out.println("Student Information:");
        student.displayStudentInfo();
        CollegeStudent collegeStudent = new CollegeStudent("Geetha", 20, 101, "IFET College of Engineering");
        System.out.println("College Student Information:");
        collegeStudent.displayCollegeStudentInfo();
        SchoolStudent schoolStudent = new SchoolStudent("Dinesh", 15, 501, "FSDA English hr. sec. School");
        System.out.println("School Student Information:");
        schoolStudent.displaySchoolStudentInfo(); 
    }
}
