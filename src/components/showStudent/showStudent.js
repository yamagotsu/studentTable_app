import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useState, useEffect } from "react";
import { ClassNames } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ShowStudent() {

  const [studentsList, setStudentList] = useState([]);
  
  //connect delete function with database
  const deleteStudent = (id)=>{
    axios.delete(`http://localhost:5000/students/${id}`).then( ()=> {
    window.location.reload(false);
    })
  }

  //calls itself whenever the page loads will excute whatever is in here
  useEffect(()=>{
    axios.get("http://localhost:5000/students").then((allStudents) =>{
      setStudentList(allStudents.data);
    })
  },[]);

  return (   
    <TableContainer component={Paper}>
    <h2>All Students</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Registration Number</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell> 
            <TableCell align="right">Action</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell> 
              <TableCell align="right">
              <IconButton aria-label="delete" className={ClassNames.margin} onClick={()=>deleteStudent(student._id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>

              </TableCell>            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>   
  );
}
