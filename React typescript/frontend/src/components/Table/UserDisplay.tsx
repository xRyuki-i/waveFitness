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
import { user } from '../User/User';



export const UserDisplay = ({users}:{users:user[]}) => {
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
          {users.map((user:user) => (
            <TableRow
              key={user.userId}
            >
              <TableCell component="th" scope="row">
                {user.firstName}
              </TableCell>
              <TableCell align="right">{user.lastName}</TableCell>
              <TableCell align="right">{user.address}</TableCell>
              <TableCell align="right">{user.contact}</TableCell>
              <TableCell align="right">{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserDisplay;