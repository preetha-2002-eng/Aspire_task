import java.util.*;

class MapExample{
public static void main(String[] args){

Map<Integer,String> map = new HashMap<>();
map.put(101,"Ram");
map.put(102,"Ravi");
map.put(103,"Raj");
map.put(104,"kumar");
System.out.println(map.entrySet());
System.out.println(map.keySet());
System.out.println(map.values());
System.out.println(map.containsKey(102));
map.remove(101);
System.out.println(map);

}

}