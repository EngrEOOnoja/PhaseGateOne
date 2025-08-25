import java.time.LocalDate;
import java.util.Scanner;

public class MenstrualCycleCalculator{
static Scanner input = new Scanner(System.in);
	public static void main (String []args){
	System.out.print("Enter the first day of your last period (Year e.g 2025): ");
        int year = input.nextInt();

        System.out.print("Enter the first day of your last period (Month e.g 08): ");
        int month = input.nextInt();

        System.out.print("Enter the first day of your last period (Day e.g 20): ");
        int day = input.nextInt();

        System.out.print("Enter your average cycle length in days (e.g., 28): ");
        int cycleLength = input.nextInt();

        System.out.print("Enter your average period duration in days (e.g., 5): ");
        int periodDuration = input.nextInt();

	  LocalDate lastPeriodDate;
        try {
            lastPeriodDate = LocalDate.of(year, month, day);
        } catch (Exception e) {
            System.out.println("Invalid date entered.");
            return;
        }

        LocalDate nextPeriod = getNextPredictedPeriod(lastPeriodDate, cycleLength);
        LocalDate ovulationDate = getPredictedOvulationDate(nextPeriod);
        LocalDate fertileWindowStart = getFertileWindowStart(nextPeriod);
        LocalDate fertileWindowEnd = getFertileWindowEnd(nextPeriod);

        System.out.println("\nResults:");
        System.out.println("Next Predicted Period Date: " + nextPeriod);
        System.out.println("Predicted Ovulation Date: " + ovulationDate);
        System.out.println("Fertile Window: From " + fertileWindowStart + " to " + fertileWindowEnd);

	
	
	}
public static LocalDate getNextPredictedPeriod(LocalDate lastPeriod, int cycleLength){
    return lastPeriod.plusDays(cycleLength);
}

public static LocalDate getPredictedOvulationDate(LocalDate nextPeriod){
    return nextPeriod.minusDays(14);
}

public static LocalDate getFertileWindowStart(LocalDate nextPeriod) {
    return getPredictedOvulationDate(nextPeriod).minusDays(5);
}

public static LocalDate getFertileWindowEnd(LocalDate nextPeriod) {
    return getPredictedOvulationDate(nextPeriod).plusDays(1);
}
	
}


