const mongoose = require('mongoose')
const studentSchema = require('./models/student_model')

mongoose.connect('mongodb://localhost/practice_db_2')

const db = mongoose.connection

db.on("error",()=>{
    console.log("failed to connect")
})

db.once("open",()=>{
    console.log('successfully connected!!')
    init()
})

async function init (){
    const student = {
        name : "mohan",
        age : 25
    }
   const s =  await studentSchema.create(student)
   console.log(s)
    
}