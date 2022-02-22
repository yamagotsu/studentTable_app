import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";

const app = express();


//set up bodyparser
app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));

//set up cors
app.use(cors());

//express middleware first param path for all routes in student.js second param is studentRoutes imported
app.use("/students", studentRoutes);

//database connection url
const CONNECTION_URL = "mongodb+srv://sonjack:freepizza2@cluster0.ydr00.mongodb.net/First-Mern?retryWrites=true&w=majority";
//assign PORT variables to port environment if set or port 5000
const PORT = process.env.PORT || 5000;





//mongoose connection function
mongoose.connect(CONNECTION_URL
    ).then(()=>app.listen(PORT, (req,res)=>{
    console.log(`Server is up and running on port: ${PORT}!`)
})).catch((err)=> {
    console.log(err.message)
});

