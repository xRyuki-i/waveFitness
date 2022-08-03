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
import { membership } from '../Membership/Membership';



export const MembershipDisplay = ({memberships}:{memberships:membership[]}) => {
  return (
    <TableContainer className='table' component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Membership Type</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memberships.map((membership:membership) => (
            <TableRow
              key={membership.membershipId}
            >
              <TableCell component="th" scope="row">
                {membership.type}
              </TableCell>
              <TableCell align="right">{membership.duration}</TableCell>
              <TableCell align="right">{membership.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MembershipDisplay;