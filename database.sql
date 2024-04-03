CREATE DATABASE studentrecords;

CREATE TABLE students(
    id INT PRIMARY KEY,
    email VARCHAR(220),
    name VARCHAR(220),
    enrollment_year INT,
    password VARCHAR(220)
);

 CREATE TABLE faculty(
   id VARCHAR(220) PRIMARY KEY,
    email VARCHAR(220),
    name VARCHAR(220),
    password VARCHAR(220),
    exp INT
);

 CREATE TABLE admin(
   id VARCHAR(220) PRIMARY KEY,
    email VARCHAR(220),
    name VARCHAR(220),
    password VARCHAR(220)
);



CREATE TABLE department(
   id VARCHAR(220) PRIMARY KEY,
    name VARCHAR(220),
    head VARCHAR(220)
);

 CREATE TABLE course(
    id VARCHAR(220) PRIMARY KEY,
    name VARCHAR(220),
    department_id VARCHAR(220),
    faculty_id VARCHAR(220),
     FOREIGN KEY(department_id) REFERENCES  department(id),
      FOREIGN KEY(faculty_id) REFERENCES faculty(id)
 );

CREATE TABLE grades (
  student_id INT,
  course_id VARCHAR(220),
  grade INT CHECK (grade >= 4 AND grade <= 10),
  
  PRIMARY KEY (student_id, course_id),
    FOREIGN KEY(student_id) REFERENCES students(id),
     FOREIGN KEY(course_id) REFERENCES course(id)
    
);

CREATE TABLE enrolled_course (
  student_id INT,
  course_id VARCHAR(220),
  PRIMARY KEY (student_id, course_id),
    FOREIGN KEY(student_id) REFERENCES students(id),
     FOREIGN KEY(course_id) REFERENCES course(id)
);

CREATE TABLE requested_course (
  student_id INT,
  course_id VARCHAR(220),
  request_letter VARCHAR(220),
  PRIMARY KEY (student_id, course_id),
    FOREIGN KEY(student_id) REFERENCES students(id),
     FOREIGN KEY(course_id) REFERENCES course(id)
);


 INSERT INTO students (id, email, name, enrollment_year, password)
 VALUES
     (220150008,'mohityadav@iitg.ac.in','Mohit',2022,'system@123'),
     (220150019,'ayush@iitg.ac.in','Mohit',2022,'system@123'),
     (220150010,'heet@iitg.ac.in','Mohit',2022,'system@123'),
     (220150011,'garv@iitg.ac.in','Mohit',2022,'system@123'),
     (220150012,'prince@iitg.ac.in','Mohit',2022,'system@123');
    
INSERT INTO faculty (id, email, name, password, exp)
VALUES
    ('faculty1', 'faculty1@example.com', 'Faculty 1', 'password1', 5),
    ('faculty2', 'faculty2@example.com', 'Faculty 2', 'password2', 10),
    ('faculty3', 'faculty3@example.com', 'Faculty 3', 'password3', 7);


INSERT INTO admin (id, email, name, password)
VALUES
    ('admin1', 'admin1@example.com', 'Admin 1', 'password1'),
    ('admin2', 'admin2@example.com', 'Admin 2', 'password2'),
    ('admin3', 'admin3@example.com', 'Admin 3', 'password3');

INSERT INTO department (id, name, head)
VALUES
    ('dept1', 'Department 1', 'Head of Department 1'),
    ('dept2', 'Department 2', 'Head of Department 2'),
    ('dept3', 'Department 3', 'Head of Department 3');

INSERT INTO course (id, name, department_id, faculty_id)
VALUES
    ('course1', 'Course 1', 'dept1', 'faculty1'),
    ('course2', 'Course 2', 'dept2', 'faculty2'),
    ('course3', 'Course 3', 'dept3', 'faculty3'),
    ('course4', 'Course 4', 'dept1', 'faculty1'),
    ('course5', 'Course 5', 'dept2', 'faculty2'),
    ('course6', 'Course 6', 'dept3', 'faculty3');


INSERT INTO enrolled_course (student_id, course_id)
VALUES
    (1, 'course1'),
    (2, 'course2'),
    (3, 'course3');
