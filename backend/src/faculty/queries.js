const ALLCourses = ` SELECT id, name, department_id
FROM course
WHERE faculty_id = $1
`;

const AllStudents = `SELECT id, name, email,department_id
FROM students
WHERE students.id IN (
    SELECT student_id
    FROM enrolled_course
    WHERE course_id IN (
        SELECT id
        FROM course
        WHERE faculty_id = $1
    )
)
`;

const ALLStudentsINcourse=`SELECT id, name, email, enrollment_year,department_id
FROM students
WHERE students.id IN(SELECT student_id FROM enrolled_course WHERE course_id=$1);
`;

const StudentDetail=`SELECT id, name, email,department_id
FROM students
WHERE id=$1`;

const ALlRequestedCourse = `
SELECT s.id AS student_id, s.name AS student_name,
    s.department_id as department_name,
       c.id AS course_id, c.name AS course_name,
       rc.request_letter
FROM students AS s
JOIN requested_course AS rc ON s.id = rc.student_id
JOIN course AS c ON c.id = rc.course_id
WHERE c.faculty_id = $1;
`;

const ApproveCourse=`
INSERT INTO enrolled_course (student_id,course_id)
VALUES ($1,$2);
`;

const DeleteRequestedCourse=`
 DELETE FROM requested_course
 WHERE student_id=$1 AND course_id=$2;
`;

const ADDGRades=`
INSERT INTO grades (student_id,course_id,grade) VALUES ($1,$2,$3);
`;

const LoginFaculty=`SELECT id,name,email FROM faculty
WHERE email=$1 AND password=$2;
`;



module.exports = {
    ALLCourses,
    AllStudents,
    ALlRequestedCourse,
    ApproveCourse,
    DeleteRequestedCourse,
    ADDGRades,
    ALLStudentsINcourse,
    LoginFaculty,
    StudentDetail
}