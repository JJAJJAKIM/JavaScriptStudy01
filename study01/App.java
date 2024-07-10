package study01;

public class App {
    int b;

    public App() {}
    public App(int b){
        this.b = b;
    }

    public static void main(String[] a) {
        System.out.println("Study01 JAVA 시작!");

        int i = 1;
        final int k = 3;
        print();
        System.out.println(print(i));

    }
    static void print(){
        System.out.println("출력");
    }

    static int print(int a){
        return a;
    }

}