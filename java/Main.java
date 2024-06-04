import java.util.*;

class Main{
public static void main(String[] args){

//Exception Handling
Scanner sc = new Scanner(System.in);
int age;
System.out.print("Enter your age: ");
age = sc.nextInt();

try {
if (age > 18) {
System.out.println("Welcome to vote.");
} else {
throw new UneligibleToVoteException("You are not eligible to vote.");
}
} 
catch (UneligibleToVoteException exception) {
System.out.println(exception.getMessage());
}
}
}

class UneligibleToVoteException extends Exception {
String message=" ";
UneligibleToVoteException(String message) {
this.message = message;
}

public String getMessage() {
return this.message;
}
}
