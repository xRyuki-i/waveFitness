import React, { useEffect, useState } from 'react'
import { getInstructors } from '../../actions/accounts/instructor'
import "./table.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { instructor } from '../Instructor/Instructor';



export const Display = ({instructors}:{instructors:instructor[]}) => {
  return (
    <TableContainer className='table' component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {instructors.map((instructor:instructor) => (
            <TableRow
              key={instructor.instructorId}
            >
              <TableCell component="th" scope="row">
                {instructor.firstName}
              </TableCell>
              <TableCell align="right">{instructor.lastName}</TableCell>
              <TableCell align="right">{instructor.address}</TableCell>
              <TableCell align="right">{instructor.contact}</TableCell>
              <TableCell align="right">{instructor.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Display