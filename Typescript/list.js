//Title : List 
//Author : Preetha I
//Date : 25/3/2024
var employee_id = [101, 102, 103, 104, 105];
console.log("Employee_ID:");
for (var _i = 0, employee_id_1 = employee_id; _i < employee_id_1.length; _i++) {
    var id = employee_id_1[_i];
    console.log(id);
}
employee_id.push(106);
console.log("Updated Employee_ID:");
for (var _a = 0, employee_id_2 = employee_id; _a < employee_id_2.length; _a++) {
    var id = employee_id_2[_a];
    console.log(id);
}
var employee_name = ["Ram", "Ravi", "Kumar"];
console.log("Employee_Name:");
for (var _b = 0, employee_name_1 = employee_name; _b < employee_name_1.length; _b++) {
    var name_1 = employee_name_1[_b];
    console.log(name_1);
}
console.log("First employee:", employee_name[0]);
console.log("Second employee:", employee_name[1]);
employee_name[1] = "Reka";
console.log("Updated Employee_Name:");
for (var _c = 0, employee_name_2 = employee_name; _c < employee_name_2.length; _c++) {
    var name_2 = employee_name_2[_c];
    console.log(name_2);
}
