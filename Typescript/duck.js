//Title : Duck typing
//Author : Preetha I
//Date : 22/3/2024
var Student = /** @class */ (function () {
    function Student() {
        this.name = "Student_Ravi";
    }
    return Student;
}());
var Staff = /** @class */ (function () {
    function Staff() {
        this.name = "Staff_Reka";
    }
    return Staff;
}());
var Principal = /** @class */ (function () {
    function Principal() {
        this.name = "Principal_Kumar";
    }
    Principal.prototype.makeAdmission = function () {
        console.log("Admit Student");
    };
    return Principal;
}());
var student = new Staff();
var staff = new Student();
var student2 = new Principal();
console.log("Student name: " + student.name);
console.log("Staff name: " + staff.name);
console.log("Student2 name: " + student2.name);
