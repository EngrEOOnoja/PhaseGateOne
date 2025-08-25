import org.junit.jupiter.api.Test;
import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.assertEquals;

/*javac -cp junit-platform-console-standalone-1.9.2.jar MenstrualCycleCalculator.java MenstrualCycleCalculatorTest.java
java -jar junit-platform-console-standalone-1.9.2.jar -cp . --select-class MenstrualCycleCalculatorTest*/


public class MenstrualCycleCalculatorTest {

    @Test
    public void testGetNextPredictedPeriod() {
    	//Arrange
        LocalDate lastPeriod = LocalDate.of(2025, 8, 20);
        int cycleLength = 28;
        LocalDate expected = LocalDate.of(2025, 9, 17);
        
	
	//Act
        LocalDate result = MenstrualCycleCalculator.getNextPredictedPeriod(lastPeriod, cycleLength);
        
        //Assert
        assertEquals(expected, result);
    }

    @Test
    public void testGetPredictedOvulationDate() {
    		//Arrange

        LocalDate nextPeriod = LocalDate.of(2025, 9, 17);
        LocalDate expected = LocalDate.of(2025, 9, 3);
	
	//Act
        LocalDate result = MenstrualCycleCalculator.getPredictedOvulationDate(nextPeriod);
         
          //Assert
        assertEquals(expected, result);
    }

    @Test
    public void testGetFertileWindowStart() {
    	//Arrange
        LocalDate nextPeriod = LocalDate.of(2025, 9, 17);
        LocalDate expected = LocalDate.of(2025, 8, 29);
	
	//Act
        LocalDate result = MenstrualCycleCalculator.getFertileWindowStart(nextPeriod);
      
         //Assert
        assertEquals(expected, result);
    }

    @Test
    public void testGetFertileWindowEnd() {
    	//Arrange
        LocalDate nextPeriod = LocalDate.of(2025, 9, 17);
        LocalDate expected = LocalDate.of(2025, 9, 4);
	
	//Act
        LocalDate result = MenstrualCycleCalculator.getFertileWindowEnd(nextPeriod);
       
       //Assert
        assertEquals(expected, result);
    }
}