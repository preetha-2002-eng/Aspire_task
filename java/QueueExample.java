import java.util.*;

class QueueExample{
public static void main(String[] args){

//Queue
Queue<Integer> numbers=new LinkedList();
numbers.offer(1);
numbers.offer(2);
numbers.offer(3);
System.out.println(numbers);

numbers.poll();
  
System.out.println(numbers);
System.out.println(numbers.peek());



}
}