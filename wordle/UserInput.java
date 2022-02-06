import java.util.Scanner;

public Class UserInput {
    private Scanner scanner = new Scanner(System.in);
    
    public static String getUserWord() {
        System.out.println("Enter your guess: ")
        String word = scanner.nextLine();
        return word;
    }
}