const Pool=require('pg').Pool;

const pool=new Pool({
    user:'postgres',
    host:"localhost",
    database:"studentrecords",
    password:"mohityadav",
    port:5432
});

module.exports=pool;