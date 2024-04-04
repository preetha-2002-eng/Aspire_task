//Title : Javascript builtin methods
//Author : Preetha I
//Date : 21/3/2024
//length
const employee = ["Ravi","Raja", "Ram", "Reka"];
console.log("-----------Length Method--------------");
console.log(employee.length); 

//push method
employee.push("Kumar");
console.log("-----------Push Method--------------");
console.log(employee);

//shift method
employee.shift("Abi");
console.log("-----------Shift Method--------------");
console.log(employee);

//reverse method
const employee_id = [101,102,103,104,105];
console.log("-----------Reverse Method--------------");
console.log(employee_id.reverse() );

//pop method
employee_id.pop();
console.log("-----------Pop Method--------------");
console.log(employee_id);

//concat method
const arr = employee.concat(employee_id);
console.log("-----------concat Method--------------");
console.log(arr);

//slice method
const array = [1, 2, 3, 4, 5];
array.splice(2, 1); 
console.log(array); 

const newArray = array.slice(2);
console.log(newArray);


