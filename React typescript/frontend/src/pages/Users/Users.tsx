import React from 'react'
import './users.css'
import Instructor from '../../components/Instructor/Instructor'
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import User from '../../components/User/User'

const Users = () => {
  return (
    <div className='home'>
        <SideBar/>

        <section className="home__view">
            <Navbar/>

            <div className="home--view">
                {
                    // view.display === "home"? <Dashboard/> : view.display === "instructor"? <Instructor/> : view.display === "user"? <User/> : <Membership/>
                    <User/>
                }
            </div>
        </section>
    </div>
  )
}

export default Users