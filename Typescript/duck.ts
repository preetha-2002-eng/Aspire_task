//Title : Duck typing
//Author : Preetha I
//Date : 25/3/2024
class Student {  
    name = "Student_Ravi";  
}  
class Staff {  
    name = "Staff_Reka";  
}  
class Principal {  
    name = "Principal_Kumar";  
    makeAdmission(){  
        console.log("Admit Student");  
    }  
}  
let student: Student = new Staff();  
let staff: Staff = new Student(); 
let student2: Student = new Principal(); 
console.log("Student name: "+student.name);  
console.log("Staff name: "+staff.name);  
console.log("Student2 name: "+student2.name);  
