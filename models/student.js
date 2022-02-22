import mongoose from "mongoose";

//create instance or schema
const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A',
    }    
});

//create a model of schema
const student = mongoose.model("student", studentSchema);

//export model,

export default student;