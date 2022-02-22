import student from "../models/student.js";
import StudentData from "../models/student.js";

export const getStudent = async (req, res)=>{
   try {
       const allStudents = await StudentData.find(); //go to module and find all student data avaible and save in allStudent
       res.status(200).json(allStudents);
    } catch (error) {
       res.status(404).json({message:error.message})
   }
}

export const createStudent = async (req,res)=>{
    const student = req.body;

    const newStudent = new StudentData(student) // create new model based off the req.body
    try {
        await newStudent.save(); // saved in database as it is
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const deleteStudent = async (req,res) =>{
        const id = req.params.id;

    try {
        await StudentData.findByIdAndRemove(id).exec();
        res.send("successfully deleted!")
    } catch (error) {
        console.log(error);
    }
    
}