//length
const fruits = ["blueberry","banana", "apple", "peach"];
console.log("-----------Length Method--------------");
console.log(fruits.length); 

//push method
fruits.push("mango");
console.log("-----------Push Method--------------");
console.log(fruits);

//shift method
fruits.shift("kiwi");
console.log("-----------Shift Method--------------");
console.log(fruits);

//reverse method
const colors = ["red", "yellow", "blue"];
console.log("-----------Reverse Method--------------");
console.log(colors.reverse() );

//pop method
colors.pop();
console.log("-----------Pop Method--------------");
console.log(colors);

//concat method
const arr = fruits.concat(colors);
console.log("-----------concat Method--------------");
console.log(arr);

//slice method
const array = [1, 2, 3, 4, 5];
array.splice(2, 1); 
console.log(array); 

const newArray = array.slice(2);
console.log(newArray);


