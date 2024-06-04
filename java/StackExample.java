import java.util.*;

class StackExample{
public static void main(String[] args){
Stack<String> employeeName=new Stack<String>();
employeeName.push("John");
employeeName.push("Anitha");
employeeName.push("Geetha");
System.out.println(employeeName);
employeeName.pop();
System.out.println(employeeName);


}
}