class Dog {  
    sound = "barking";  
}  
class Lion {  
    sound = "roaring";  
}  
class Goat {  
    sound = "bleat";  
    swim(){  
        console.log("Cannot Swim!");  
    }  
}  
let lion: Lion = new Dog();  
let dog: Dog = new Lion(); 
let lionTwo: Lion = new Goat(); 
console.log("Lion Sound: "+lion.sound);  
console.log("Dog sound: "+dog.sound);  
console.log("Lion sound: "+lionTwo.sound);  