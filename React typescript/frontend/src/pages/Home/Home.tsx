import React from 'react'
import './home.css'
import { useSelector } from 'react-redux'
import Instructor from '../../components/Instructor/Instructor'
import User from '../../components/User/User'
import Membership from '../../components/Membership/Membership'
import Dashboard from '../../components/Dashboard/Dashboard'
import SideBar from '../../components/SideBar/SideBar'
import Navbar from '../../components/Navbar/Navbar'


interface account {
    loggedIn: boolean,
    instructor: instructor
}

interface view {
    display: string
}
  
interface RootState{
    account: account,
    view: view
}

interface instructor {
    firstName: string,
    lastName: string,
    address: string,
    contact: string,
    type: string
}


const Home = () => {

    // const {view} = useSelector((state:RootState)=> state)

  return (
    <div className='home'>
        <SideBar/>

        <section className="home__view">
            <Navbar/>

            <div className="home--view">
                {
                    // view.display === "home"? <Dashboard/> : view.display === "instructor"? <Instructor/> : view.display === "user"? <User/> : <Membership/>
                    <Dashboard/>
                }
            </div>
        </section>
    </div>
  )
}

export default Home