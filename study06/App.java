package study06;

public class App {
    public static void main(String[] args) {
        
        String[][] a = new String[][] {{"*"}, {"*", "*"}, {"*", "*", "*"}};
        /*
        for (String i[] : a){
            for(String j : i){
                System.out.print(j);
            }
            System.out.println("");
        }
         */
        /*
        for (String i[] : a){
            for(String j : i){
                System.out.print(j);
            }
            System.out.println("");
        }
             */
        /*
        for (int i = a.length-1; i>= 0; i--){
            for(int j = 0; j<a[i].length; j++){
                System.out.print(a[i][j]);
            }
            System.out.println();
        }
         */

        int c = 3;
        
        for (int  i =  0; i < a.length; i++){
            for(int j = c-1; j >= 0 ; j--){
                if(j < a[i].length){
                    // System.out.println(j + ":" + c);
                    System.out.print(a[i][j]);
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

        for (int i = a.length-1; i>= 0; i--){
            for(int j = c-1; j >= 0 ; j--){
                if(j < a[i].length){
                    // System.out.println(j + ":" + c);
                    System.out.print(a[i][j]);
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

    }
}
