import java.util.Scanner;

public class StudentGrade {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter Number of Students : ");
        int numberOfStudents = input.nextInt();
        input.nextLine(); 

        System.out.print("Enter Number of Subjects : ");
        int numberOfSubjects = input.nextInt();
        input.nextLine(); 

        String[] studentNames = new String[numberOfStudents];
        double[][] studentGrades = new double[numberOfStudents][numberOfSubjects];
        double[] studentAverages = new double[numberOfStudents];
        int[] studentPositions = new int[numberOfStudents];

        for (int index = 0; index < numberOfStudents; index++) {
            System.out.print("Student Name :");
            studentNames[index] = input.nextLine();

            double total = 0;
            for (int count = 0; count < numberOfSubjects; count++) {
                while (true) {
                    System.out.print("Enter grade for subject " + (count + 1) );
                    studentGrades[index][count] = input.nextDouble();
                    input.nextLine(); 
                    if (studentGrades[index][count] >= 0 && studentGrades[index][count] <= 100) {
                        break;
                    } else {
                        System.out.println("Score Must Be between 0 - 100 Try again");
                    }
                }
                total += studentGrades[index][count];
            }
            studentAverages[index] = total / numberOfSubjects;
        }
        
        
         System.out.println("Student Name: " + studentNames[index]);
            System.out.println("Grades:");
            for (int count = 0; count < numberOfSubjects; count++) {
                System.out.println("Grade for subject " + (count + 1) + ": " + studentGrades[index][count]);
            }
            System.out.println("Average grade: " + studentAverages[index]);
            System.out.println();
        }


     
         

        for (int index = 0; index < numberOfStudents; index++) {
            System.out.print(studentNames[index] + "\t");
            for (int count = 0; count < numberOfSubjects; count++) {
                System.out.print(studentGrades[index][count] + "\t");
            }
           System.out.printf("%.2f\t%d\n", studentAverages[index], studentPositions[index]);

        }
                
    }
    
}



