//Title : Javascript functions
//Author : Preetha I
//Date : 21/3/2024

// Named function
console.log("----------Named Function----------");
function calculateTotalPrice(bookPrices) {
    var totalPrice = 0;
    for (var i = 0; i < bookPrices.length; i++) {
        totalPrice += bookPrices[i];
    }
    return totalPrice;
}
var bookPrices = [20, 15, 25, 30]; 
var total = calculateTotalPrice(bookPrices);
console.log("Total price:", total);

//Anonymous function
console.log("----------Anonymous Function----------");
var names = ["Alice", "Bob"];
names.forEach(function(name) {
    console.log("Hello, " + name + "!");
});

//Arrow function
console.log("----------Arrow Function----------");
const students = ['priya', 'rama', 'preetha', 'praba', 'nithia'];
const capitalizedStudents= students.map(student => student.toUpperCase());
console.log(capitalizedStudents);

//Immediately Invoked Function Expressions (IIFE)
console.log("----------IIFE Function----------");
const counterModule = (function() {
    let count = 0;
    function increment() {
        count++;
        console.log("Counter incremented. Current count:", count);
    }
    function decrement() {
        count--;
        console.log("Counter decremented. Current count:", count);
    }
    return {
        increment,
        decrement,
    };
})();
counterModule.increment();
counterModule.increment(); 
counterModule.decrement(); 

//Call back function
console.log("----------call back Function----------");
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); 
}
function sayGoodMorning() {
    console.log("Good Morning!");
}
greet("Alice", sayGoodMorning);



