const {Router}=require('express');
const router=Router();
const controller=require('./controller');

router.get('/admin/students',controller.AllStudents);

module.exports=router;