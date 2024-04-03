const {Router}=require('express');
const controller=require('./controller')
const router=Router();

router.get('/student/profile/:id',controller.getStudentDetails);

router.get('/student/courses/:id',controller.enrolledCourses);

router.post('/student/request/:id',controller.requestCourse);

router.get('/student/grades/:id',controller.getGrades);

router.post('/student/login',controller.LoginStudent);

router.get('/student/notenrolled/:id',controller.NotEnrolledCourses);

module.exports=router;