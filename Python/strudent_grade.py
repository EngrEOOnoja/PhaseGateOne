
def calculate_student_grades():
    number_of_students = int(input("Enter Number of Students: "))
    number_of_subjects = int(input("Enter Number of Subjects: "))

    student_names = []
    student_grades = []

    for index in range(number_of_students):
        student_name = input("Student Name: ")
        student_names.append(student_name)

            for count in range(number_of_subjects):
            grade = float(input(f"Enter grade for subject {j + 1}: "))
            grades.append(grade)

        student_grades.append(grades)

     for index in range(number_of_students):
        print(f"Student Name: {student_names[i]}")
        total = 0
        for count in range(number_of_subjects):
            print(f"Grade for subject {j + 1}: {student_grades[i][j]}")
            total += student_grades[i][j]
        average = total / number_of_subjects
        print(f"Average grade: {average:.2f}")
        print()

calculate_student_grades()

