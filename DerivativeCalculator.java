import java.util.Scanner;

public class DerivativeCalculator {
    public static void main(String[] args) {
        askForInput();
        String derivativeFunction, lineEquation, derivativeAtPoint = "";
        if (order == 1) derivativeFunction = function.returnDerivativeFunction();
        else derivativeFunction = function.returnDerivativeFunctionOfOrderMagnituteGreaterThanOne();
        lineEquation = function.returnLineEquation();
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Would you like to calculate at a point? (y or n)")
        String choice = scanner.next();
        if (choice == "y") {
            System.out.println("Calculate at x = ");
            double static point = scanner.nextDouble();
            double derivative = function.returnDerivativeAtPoint();
            System.out.println("Derivative: " + derivative);
        }

        System.out.println("Derivative function: " + derivativeFunction + "\nLine Equation: " + lineEquation + "\n\nProgram terminated.");
    }
}