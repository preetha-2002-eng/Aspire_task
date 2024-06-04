import java.util.*;

class ListExample{
public static void main(String[] args){
//Linked List
List list= new LinkedList();
list.add(2);
list.add(8);
list.add(5);
list.add(6);
list.add(7);
list.add(3);
list.add(4);
list.add(null);
list.add(null);
System.out.println(list);
ListIterator<Integer> it = list.listIterator();
while (it.hasNext()) {
System.out.println(it.next());
}

//Array List
ArrayList<String> employeeName1=new ArrayList<String>();
employeeName1.add("John");
employeeName1.add("Anitha");
employeeName1.add("Geetha");
employeeName1.add(1,"David");

System.out.println(employeeName1);
employeeName1.remove("John");
System.out.println(employeeName1);

}
}