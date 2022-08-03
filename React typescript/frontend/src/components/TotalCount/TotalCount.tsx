import React from 'react'
import { IPropTotal } from '../Dashboard/Dashboard'
import './totalCount.css'

const TotalCount = (total:any) => {
  return (
    <div className="total__count featured">
        <div className="count--title">{total.title}</div>
        <div className="count">{total.count}</div>
    </div>
  )
}

export default TotalCount
