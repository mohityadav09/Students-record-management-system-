const pool=require("../../db");
const query=require("./queries");

const AllStudents = (req, res) => {
    try {
        pool.query(query.AllStudents, (err, result) => {
            if (err) {
                throw err; // This will be caught by the catch block
            }
            res.status(200).send(result.rows);
        });
    } catch (err) {
        res.status(500).send({ error: err.message }); // Sending error response within catch block
    };
};


const StudentsSearch=(req,res)=>{
    try{
       
        pool.query(query.StudentsByYear, (err, result) => {
            if (err) {
                throw err; // This will be caught by the catch block
            }
            res.status(200).send(result.rows);
        });

    }catch(err) {
        res.status(500).send({error:err.message});
    }
}

module.exports= {
    AllStudents,
};