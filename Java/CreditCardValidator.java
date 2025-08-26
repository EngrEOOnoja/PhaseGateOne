import java.util.Scanner;

public class CreditCardValidator {

    public static String getCardType(String number) {
        if (number.startsWith("4")) {
            return "Visa Card";
        } else if (number.startsWith("5")) {
            return "Master Card";
        } else if (number.startsWith("37")) {
            return "American Express Card";
        } else if (number.startsWith("6")) {
            return "Discover Card";
        } else {
            return "Invalid Input";
        }
    }

    public static int getCardLength(String number) {
        return number.length();
    }

    public static String getCardValidity(String number) {
        int sum = 0;
        boolean alternate = false;

        for (int i = number.length() - 1; i >= 0; i--) {
            int digit = Integer.parseInt(String.valueOf(number.charAt(i)));

            if (alternate) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            alternate = !alternate;
        }

        return (sum % 10 == 0) ? "Valid" : "Invalid";
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a credit card number: ");
        String input = scanner.nextLine();

        System.out.println("Card Type: " + getCardType(input));
        System.out.println("Card Digit Length: " + getCardLength(input));
        System.out.println("Card Validity Status: " + getCardValidity(input));

     }
}