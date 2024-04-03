const AllStudents=`SELECT * FROM students`;

const StudentsByYear=`SELECT * FROM students WHERE enrollment_year =$1`;

const StudentsByCourse=`SELECT * FROM students WHERE id IN 
(
SELECT student_id FROM enrolled_course WHERE course_id=$1
)`;

const StudentsByDepartment=`SELECT * FROM students WHERE department_id =$1`;

const AllFaculty=`SELECT * FROM faculty`;

const UpdateStudent=`UPDATE students 
SET id=$1,name=$2,email=$3,enrollment_year=$4,password=$5,department_id=$6
WHERE id=$7
`;

const DeleteStudentById=`DELETE FROM students
WHERE id=$1
`;



module.exports = {
    AllStudents,
    StudentsByYear
}