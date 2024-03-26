var age = new Map();  
   
age.set("Rakesh", 40);  
age.set("Abhishek", 25);  
age.set("Amit", 30);  
   
 
for (let key of age.keys()) {  
    console.log("Map Keys= " +key);          
}  
 
for (let value of age.values()) {  
    console.log("Map Values= " +value);      
}  
console.log("The Map Enteries are: ");   
  
for (let entry of age.entries()) {  
    console.log(entry[0], entry[1]);   
}  