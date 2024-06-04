import java.util.*;

class SetExample{
public static void main(String[] args){
//Hash Set
Set set=new HashSet();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
System.out.println(set);
System.out.println(set.contains(5));
Iterator<Integer> iterator = set.iterator();
while (iterator.hasNext()) {
System.out.println(iterator.next());
}
set.remove(3);
System.out.println(set);


//Tree Set
Set set1=new TreeSet();
set1.add(5);
set1.add(6);
set1.add(1);
set1.add(4);
set1.add(2);
set1.add(3);
System.out.println(set1);


}
}