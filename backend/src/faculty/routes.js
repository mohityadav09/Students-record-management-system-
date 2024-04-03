const {Router}=require('express');
const controller=require('./controller')
const router=Router();

router.get('/fac/courses/:id',controller.ALLCourses);
router.get('/fac/students/:id',controller.AllStudents);
router.get('/fac/request/:id',controller.ALlRequestedCourse);
router.post('/fac/approve',controller.ApproveCourse);

router.delete('/fac/delete',controller.DeleteRequestedCourse);

router.post('/fac/grades',controller.ADDGRades);

router.get('/fac/students/course/:id',controller.ALLStudentsINcourse);
router.post('/fac/login',controller.LoginFaculty);
router.get('/fac/details/:id',controller.StudentDetail);

module.exports=router;