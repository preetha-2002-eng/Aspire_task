import java.util.*;

class VectorExample{
public static void main(String[] args){
Vector<String> employeeName=new Vector<String>();
employeeName.add("John");
employeeName.add("Anitha");
employeeName.add("Geetha");
employeeName.add(1,"David");

System.out.println(employeeName);
employeeName.remove("John");
System.out.println(employeeName);


}
}