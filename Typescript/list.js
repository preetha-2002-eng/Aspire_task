var numbers = [1, 2, 3, 4, 5];
console.log("Numbers:");
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    console.log(number);
}
numbers.push(6);
console.log("Updated Numbers:");
for (var _a = 0, numbers_2 = numbers; _a < numbers_2.length; _a++) {
    var number = numbers_2[_a];
    console.log(number);
}
var fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits:");
for (var _b = 0, fruits_1 = fruits; _b < fruits_1.length; _b++) {
    var fruit = fruits_1[_b];
    console.log(fruit);
}
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
fruits[1] = "Grapes";
console.log("Updated Fruits:");
for (var _c = 0, fruits_2 = fruits; _c < fruits_2.length; _c++) {
    var fruit = fruits_2[_c];
    console.log(fruit);
}
