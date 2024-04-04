//Title : Duck typing
//Author : Preetha I
let studentEntries = new Set();  
  
studentEntries.add("Preetha");  
studentEntries.add("Rama");  
studentEntries.add("Priya");  
studentEntries.add("Nithia");   
studentEntries.add("Saranya");   
    
console.log(studentEntries);   
   
console.log(studentEntries.has("Kohli"));        
console.log(studentEntries.has(10));        
  
console.log(studentEntries.size);    
    
console.log(studentEntries.delete("Saranya"));      
   
studentEntries.clear();   
  
console.log(studentEntries);  
