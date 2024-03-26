let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:");
for (let number of numbers) {
    console.log(number);
}
numbers.push(6);
console.log("Updated Numbers:");
for (let number of numbers) {
    console.log(number);
}


let fruits: string[] = ["Apple", "Banana", "Orange"];
console.log("Fruits:");
for (let fruit of fruits) {
    console.log(fruit);
}
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
fruits[1] = "Grapes";
console.log("Updated Fruits:");
for (let fruit of fruits) {
    console.log(fruit);
}


