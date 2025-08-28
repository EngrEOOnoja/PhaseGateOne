import java.util.Scanner;

public class StudentGrade {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

       
        System.out.print("Enter Number of Students: ");
        int numberOfStudents = input.nextInt();
        input.nextLine(); // Consume newline left-over

        System.out.print("Enter Number of Subjects: ");
        int numberOfSubjects = input.nextInt();
        input.nextLine(); // Consume newline left-over

        String[] studentNames = new String[numberOfStudents];
        double[][] studentGrades = new double[numberOfStudents][numberOfSubjects];

        for (int i = 0; i < numberOfStudents; i++) {
            System.out.print("Student Name: ");
            studentNames[i] = input.next();

            for (int j = 0; j < numberOfSubjects; j++) {
           	while(true){
                System.out.print("Enter grade for subject " + (j + 1) + ": ");
                studentGrades[i][j] = input.nextDouble();
                if(studentGrades[i][j] >= 0 && studentGrades[i][j] < 101){
                		break;                
                }
                else{
                	System.out.println("Score Must Be between 0 - 100 Try again");
                	}
                 }
             }
       }
	
              for (int i = 0; i < numberOfStudents; i++) {
            System.out.println( studentNames[i]);
            double total = 0;
            int position = ;
            for (int j = 0; j < numberOfSubjects; j++) {
            	if(position[
                System.out.print(  (j + 1) + " : " + studentGrades[i][j] + "\t");
                
                total += studentGrades[i][j];
            }
            double average = total / numberOfSubjects;
            System.out.println("Total grade: " + "\t");
             System.out.print("====================================== ");
            System.out.println("Total grade: " + total + "\t");
            System.out.println("Average grade: " + average + "\t");
            
           }
        }
    }

