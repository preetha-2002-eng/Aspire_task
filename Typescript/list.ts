//Title : List 
//Author : Preetha I
//Date : 25/3/2024
let employee_id: number[] = [101, 102, 103, 104, 105];
console.log("Employee_ID:");
for (let id of employee_id) {
    console.log(id);
}
employee_id.push(106);
console.log("Updated Employee_ID:");
for (let id of employee_id) {
    console.log(id);
}


let employee_name: string[] = ["Ram", "Ravi", "Kumar"];
console.log("Employee_Name:");
for (let name of employee_name) {
    console.log(name);
}
console.log("First employee:", employee_name[0]);
console.log("Second employee:", employee_name[1]);
employee_name[1] = "Reka";
console.log("Updated Employee_Name:");
for (let name of employee_name) {
    console.log(name);
}


