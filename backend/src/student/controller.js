const pool=require("../../db");
const query=require("./queries");
const getStudentDetails=(req,res)=>{
    const id =parseInt(req.params.id);
    pool.query(query.getStudentDetails,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    });
};


const enrolledCourses=(req,res)=>{
    const id =parseInt(req.params.id);
    pool.query(query.enrolledCourses,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    });
};


const requestCourse=(req,res)=>{
    console.log(req.body);
    const {course_id,request_letter}=req.body;
    const student_id=parseInt(req.params.id);
    
    pool.query(query.requestCourse,[student_id,course_id,request_letter],(err,result)=>{
        if(err) throw err;
        res.status(200).send({result:"succesfully requested"});
    });

}

const getGrades=(req,res)=>{
    const id =parseInt(req.params.id);
    pool.query(query.getGrades,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    });
};

const LoginStudent=(req,res)=>{
    const {email,password}=req.body;
    
    pool.query(query.LoginStudent,[email,password],(err,result)=>{
        if(err) throw err;
        else{
            if(result.rows.length >0){
                res.status(200).send(result.rows);
            }
            else{
                res.send({result:"no user found"});
            }
        }
    }); 

  
};

const NotEnrolledCourses=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(query.NotEnrolledCourses,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).send(result.rows);
    })
}

module.exports={
    getStudentDetails,
    enrolledCourses,
    requestCourse,
    getGrades,
    LoginStudent,
    NotEnrolledCourses
}