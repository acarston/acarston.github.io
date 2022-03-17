import java.util.Scanner;

public class FunctionInputs {
    static int coefficient = 0; //should be doubles
    static int degree = 0;

    public static void askForInput() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a function of x: ");
        static String function = scanner.next();
        System.out.println("Calculate derivative of order... ");
        static int order = scanner.next();
        String numbers = "0123456789";
        String coefficientString = "";
        int count = 0;
        ArrayList sections = new ArrayList();
        ArrayList section = new ArrayList();
        String alphabet = "qwertyuiopasdfghjklzcvbnm^()/"; //doesn't include x
        String[] specialOperators = {"sin", "cos", "tan", "cot", "sec", "cosec", "ln", "^", "(", ")", "/"} //other values?

        while (count < function.length()) {
            String character = function.substring(count, count + 1);
            
            if (character == "x") {
                sections.add(section);
            }
            
            else if (numbers.contains(character)) { //numbers or operators should contain a decimal, slash
                while (numbers.contains(character)) {
                    character = function.substring(count, count + 1);
                    coefficientString += character;
                    count ++;
                }
                coefficient = Integer.parseInt(coefficientString);
                section.add(coefficient);
            }
            else if (alphabet.contains(character)) {
                String inputedOperator = "";
                boolean shouldBreak = false;
                while (alphabet.contains(character) && !shouldBreak) {
                    character = function.substring(count, count + 1);
                    inputedOperator += character;
                    for (String operator : specialOperators) {
                        if (inputedOperator == operator) {
                            count ++;
                            shouldBreak = true;
                        }
                    }
                    count ++;
                    section.add(inputedOperator);
                }
            }
            else {
                System.out.println("Your function contains an incomputable character. Please try again.");
                break;
            }
        }
    }
}