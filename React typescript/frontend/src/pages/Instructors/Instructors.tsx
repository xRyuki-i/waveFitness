import React from 'react'
import './instructors.css'
import Instructor from '../../components/Instructor/Instructor'
import Navbar from '../../components/Navbar/Navbar'
import SideBar from '../../components/SideBar/SideBar'

const Instructors = () => {
  return (
    <div className='home'>
        <SideBar/>

        <section className="home__view">
            <Navbar/>

            <div className="home--view">
                {
                    // view.display === "home"? <Dashboard/> : view.display === "instructor"? <Instructor/> : view.display === "user"? <User/> : <Membership/>
                    <Instructor/>
                }
            </div>
        </section>
    </div>
  )
}

export default Instructors