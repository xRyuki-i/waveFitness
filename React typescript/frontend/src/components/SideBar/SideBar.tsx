import React from 'react'
import "./sidebar.css"
import {IoIosFitness} from "react-icons/io"
import {ImUser} from "react-icons/im"
import {GiBiceps} from "react-icons/gi"
import {MdLogout} from "react-icons/md"
import {AiFillHome} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { accountReducers } from '../../reducers/account'
import { useNavigate } from 'react-router'
// import { viewReducers } from '../../reducers/view'

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

const SideBar = () => {

    let path = window.location.pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {account} = useSelector((state:RootState) => state)
    // const {view} = useSelector((state:RootState)=> state)

    const logoutReq = () => {
        console.log("fetching logout")
        dispatch(accountReducers.fetch_logout_success())
    }

    const viewDashboard = () => {
        // dispatch(viewReducers.fetch_view_home())
        navigate('/');
    }

    const viewInstructor = () => {
        // dispatch(viewReducers.fetch_view_instructor())
        navigate('/instructors');
    }

    const viewUser = () => {
        // dispatch(viewReducers.fetch_view_user())\
        navigate('/users');
    }

    const viewMembership = () => {
        // dispatch(viewReducers.fetch_view_membership())
        navigate('/memberships');
    }

  return (
    <nav className="home__sidebar">
            <div className="sidebar__interact">
                <label className="sidebar--logo logo">
                    WaveFitness
                </label>
                {
                    path === "/"?
                    <div className="sidebar--nav  nav--activate" onClick={viewDashboard}>
                        <h3>Dashboard</h3><AiFillHome className='nav--icon'/>
                    </div>
                    :
                    <div className="sidebar--nav" onClick={viewDashboard}>
                        <h3>Dashboard</h3><AiFillHome className='nav--icon'/>
                    </div>
                }

                {
                    path === "/instructors"?
                    <div className="sidebar--nav nav--activate" onClick={viewInstructor}>
                        <h3>Instructors</h3><GiBiceps className='nav--icon'/>
                    </div>
                    :
                    <div className="sidebar--nav" onClick={viewInstructor}>
                        <h3>Instructors</h3><GiBiceps className='nav--icon'/>
                    </div>
                }

                {
                    path === "/users"?
                    <div className="sidebar--nav nav--activate" onClick={viewUser}>
                        <h3>Users</h3><ImUser className='nav--icon'/>   
                    </div>
                    :
                    <div className="sidebar--nav" onClick={viewUser}>
                        <h3>Users</h3><ImUser className='nav--icon'/>   
                    </div>
                }

                {
                    path === "/memberships"?
                    <div className="sidebar--nav nav--activate" onClick={viewMembership}>
                        <h3>Membership</h3><IoIosFitness className='nav--icon'/>  
                    </div>
                    :
                    <div className="sidebar--nav" onClick={viewMembership}>
                        <h3>Membership</h3><IoIosFitness className='nav--icon'/>  
                    </div>
                }

                {/* <div className="sidebar--nav" onClick={viewDashboard}>
                    <h3>Dashboard</h3><AiFillHome className='nav--icon'/>
                </div>
                <div className="sidebar--nav" onClick={viewInstructor}>
                    <h3>Instructors</h3><GiBiceps className='nav--icon'/>
                </div>
                <div className="sidebar--nav" onClick={viewUser}>
                    <h3>Users</h3><ImUser className='nav--icon'/>   
                </div>
                <div className="sidebar--nav" onClick={viewMembership}>
                    <h3>Membership</h3><IoIosFitness className='nav--icon'/>  
                </div> */}
            </div>
            
            <section className="sidebar__instructor">
                <div className="instructor__info">
                    <label className='instructor--name'>{account.instructor.firstName}</label>
                    <label className='instructor--type'>{account.instructor.type}</label>

                </div>
                <div className="sidebar--logout">
                    <MdLogout className='logout' onClick={logoutReq}/>
                </div>
            </section>
        </nav>
  )
}

export default SideBar