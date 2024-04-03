const express=require('express');
const cors=require('cors');
const app=express();
const studentRoutes=require('./src/student/routes');
const faclutyRoutes=require('./src/faculty/routes');
const adminRoutes =require('./src/admin/routes');
app.use(cors());
app.use(express.json());
app.use(studentRoutes);
app.use(faclutyRoutes);
app.use(adminRoutes);
port=5000;
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})