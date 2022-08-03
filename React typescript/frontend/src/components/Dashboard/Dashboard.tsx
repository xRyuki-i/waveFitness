import { type } from '@testing-library/user-event/dist/type'
import React, { SetStateAction, useEffect, useState } from 'react'
import { getInstructors } from '../../actions/accounts/instructor'
import { totalInstructors, totalMemberships, totalUsers } from '../../actions/total/total'
import Instructor from '../Instructor/Instructor'
import TotalCount from '../TotalCount/TotalCount'
import './dashboard.css'

export interface total {
  instructor: IPropTotal,
  membership: IPropTotal,
  user: IPropTotal
}

export type IPropTotal = {
  count: number|undefined,
  title: string
}

const Dashboard = () => {

  const totals = [
    {title:"Instructor", count: 0},
    {title:"Membership Plans", count:0},
    {title:"User", count:0}
  ]

  const [instructor, setInstructor] = useState<any>([])
  const [user, setUser] = useState<any>([])
  const [membership, setMembership] = useState<any>([])

  const fetchAllTotals = () => {
    totalInstructors()
    .then((json) => {
      setInstructor({...totals[0], count:json.count});
    });
    totalMemberships()
    .then((json) => {
      setMembership({...totals[1], count:json.count});
    });
    totalUsers()
    .then((json) => {
      setUser({...totals[2], count:json.count});
    });
  }

  useEffect(()=>{
    fetchAllTotals()
  },[]) 

  return (
    <div className="dashboard">
        <TotalCount {...instructor}/>
        <TotalCount {...membership}/>
        <TotalCount {...user}/>
    </div>
  )
}

export default Dashboard