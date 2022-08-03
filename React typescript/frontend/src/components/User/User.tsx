import React, { useEffect, useState } from 'react'
import { createInstructor, getInstructors } from '../../actions/accounts/instructor';
import { createUser, getUsers } from '../../actions/users/users';
import { Display } from '../Table/Display';
import UserDisplay from '../Table/UserDisplay';
import './user.css';


export interface user {
  userId?: number,
  firstName: string,
  lastName: string,
  address: string,
  contact: string,
  status?: string
}

const User = () => {
  let [users, setUsers] = useState<user[]>([]);
  const [user, setUser] = useState<user>({
    firstName: '',
    lastName: '',
    address: '',
    contact: ''
  })

const fetchUsers = () => {
    getUsers()
    .then((json) => {
        setUsers(json);
    });
}
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const createUserHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUser(user);
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  return (
    <div className='instructor'>

        <div className="instructor__display featured">
          <UserDisplay users={users}/>
        </div>

        <form className='instructor__form featured'>

          <label className='form__title'>Create User</label>

          <div className="form__component">
            <label htmlFor="Name"> First Name:</label>
            <input 
                  className="form__text"
                  type="text" 
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  placeholder="First Name"/>
          </div>

          <div className="form__component">
            <label htmlFor="Name">Last Name: </label>
            <input 
                  className="form__text"
                  type="text" 
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"/>           
          </div>

          <div className="form__component">
            <label htmlFor="Address">Address:</label>
            <input 
                  className="form__text"
                  type="text" 
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  placeholder="Address"/>            
          </div>

          <div className="form__component">
            <label htmlFor="Address">Contact:</label>
            <input 
                  className="form__text"
                  type="text" 
                  name="contact"
                  value={user.contact}
                  onChange={handleChange}
                  placeholder="Contact"/>
          </div>

          {/* <div className="form__component">
            <label htmlFor="Type">Type:</label>
            <select className="form__text" name="type" onChange={handleChange}>
              <option value="">...</option>
              <option value="active">Gym</option>
              <option value="Zumba">Zumba</option>
            </select> 
          </div> */}

          <button className="form__btn" onClick={createUserHandler}>Add</button>
        </form>

    </div>
  )
}

export default User