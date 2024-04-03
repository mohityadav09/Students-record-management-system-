const pool=require("../../db");
const query=require("./queries");

const ALLCourses=(req,res)=>{
    const id=req.params.id;
    
    pool.query(query.ALLCourses,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    });
};

const AllStudents=(req,res)=>{
    const id=req.params.id;
    
    pool.query(query.AllStudents,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    });
};


const ALlRequestedCourse=(req,res)=>{
    const id=req.params.id;
    pool.query(query.ALlRequestedCourse,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    });
};

const ApproveCourse=(req,res)=>{
    const {student_id,course_id}=req.body;
    pool.query(query.ApproveCourse,[student_id,course_id],(err,result)=>{
        if(err) throw err;
        res.status(200).send({result:"Approved course"});
    });
};

const DeleteRequestedCourse=(req,res)=>{
    const {student_id,course_id}=req.body;
    pool.query(query.DeleteRequestedCourse,[student_id,course_id],(err,result)=>{
        if(err) throw err;
        res.status(200).send({result:"Deleted Succesfully"});
    })
}

const ADDGRades=(req,res)=>{
    const {student_id,course_id,grade}=req.body;
    pool.query(query.ADDGRades,[student_id,course_id,grade],(err,result)=>{
        if(err) throw err;
        res.status(200).send({result:"Grades added succesfully"});
    })
}

const ALLStudentsINcourse=(req,res)=>{
  const id=req.params.id;
  pool.query(query.ALLStudentsINcourse,[id],(err,result)=>{
    if(err) throw err;
    res.status(200).send(result.rows);
  });
};


const LoginFaculty=(req,res)=>{
    const {email,password}=req.body;
    pool.query(query.LoginFaculty,[email,password],(err,result)=>{
        if(err) throw err;
        else{
            if(result.rows.length >0){
                res.status(200).send(result.rows);
            }
            else{
                res.send({result:"No user found"});
            }
        };
    });
};

const StudentDetail=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(query.StudentDetail,[id],(err,result)=>{
        if(err) throw err;
        else{
            if(result.rows.length >0){
                res.status(200).send(result.rows);
            }
            else{
                res.send({result:"No Student found"});
            }
        };
    });
}

module.exports={
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