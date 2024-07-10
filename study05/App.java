package study05;

public class App {
    
    public static void main(String[] args) {
        
        // while (true) {
        //     System.out.println(1);
        //     break;
        // }

        // int i = 1;
        // do{
        //     if( i > 1) { break; }
        //     System.out.println(i);
        //     i++;
        // } while (true);
        
        
        /*
        int a = 1;
        for( ; a < 10 ; a++ ){
            for ( int b = 1 ; b < 10 ; b++ ){
               System.out.println(a + " * " + b + " = " + (a*b)+ "\t |"); 
            }
            System.out.println("---------------------------------");
        }
         */

        /*
        String[] c = new String[] {"가", "나", "다"};
        for(String c1 : c){
            System.out.println(c1);
        }
        */

        String[][] d = new String[][] {{"가", "나"}, {"다", "라"}};
        
        for(String i[] : d){
            for(String j : i){
                System.out.println(j);
            }
        }


    }
}
