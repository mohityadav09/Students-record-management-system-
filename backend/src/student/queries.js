const getStudentDetails="SELECT id,name,enrollment_year,email FROM students WHERE id=$1";

const enrolledCourses="SELECT id,name FROM course WHERE id IN(SELECT course_id FROM enrolled_course WHERE student_id=$1) ";

const requestCourse="INSERT INTO requested_course (student_id,course_id,request_letter) VALUES ($1,$2,$3)";
const getGrades=`SELECT course.name AS course_name, grades.course_id, grades.grade
FROM grades

JOIN course ON course.id = grades.course_id
WHERE student_id = $1
`;

const LoginStudent=`SELECT id,name,email FROM students
WHERE email=$1 AND password=$2
`;

const NotEnrolledCourses=`
SELECT id, name, department_id 
FROM course 
WHERE id NOT IN (
    SELECT course_id FROM enrolled_course WHERE student_id = $1
)
AND id NOT IN (
    SELECT course_id FROM requested_course WHERE student_id = $1
);

`;


module.exports={
    getStudentDetails,
    enrolledCourses,
    requestCourse,
    getGrades,
    LoginStudent,
    NotEnrolledCourses
}