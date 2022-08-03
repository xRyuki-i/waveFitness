import React from 'react'
import './memberships.css'
import Instructor from '../../components/Instructor/Instructor'
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'
import Membership from '../../components/Membership/Membership'

const Memberships = () => {
  return (
    <div className='home'>
        <SideBar/>

        <section className="home__view">
            <Navbar/>

            <div className="home--view">
                {
                    // view.display === "home"? <Dashboard/> : view.display === "instructor"? <Instructor/> : view.display === "user"? <User/> : <Membership/>
                    <Membership/>
                }
            </div>
        </section>
    </div>
  )
}

export default Memberships