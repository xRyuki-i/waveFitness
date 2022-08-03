import React, { useEffect, useState } from 'react'
import { createInstructor, getInstructors } from '../../actions/accounts/instructor';
import { Display } from '../Table/Display';
import './instructor.css';

interface ICreateInterface {
  firstName: string,
  lastName: string,
  address: string,
  contact: string,
  type: string
}

export interface instructor {
  instructorId: number,
  firstName: string,
  lastName: string,
  address: string,
  contact: string,
  type: string
}

const Instructor = () => {
  let [instructors, setInstructors] = useState<instructor[]>([]);
  const [instructor, setInstructor] = useState<ICreateInterface>({
    firstName: '',
    lastName: '',
    address: '',
    contact: '',
    type: ''
  })

const fetchInstructors = () => {
    getInstructors()
    .then((json) => {
        setInstructors(json);
    });
}
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const name = e.target.name;
    const value = e.target.value;
    setInstructor({ ...instructor, [name]: value });
  };

  const createInstHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createInstructor(instructor);
  }

  useEffect(()=>{
    fetchInstructors()
  },[])

  return (
    <div className='instructor'>

        <div className="instructor__display featured">
          <Display instructors={instructors}/>
        </div>

        <form className='instructor__form featured'>

          <label className='form__title'>Create Instructor</label>

          <div className="form__component">
            <label htmlFor="Name"> First Name:</label>
            <input 
                  className="form__text"
                  type="text" 
                  name="firstName"
                  value={instructor.firstName}
                  onChange={handleChange}
                  placeholder="First Name"/>
          </div>

          <div className="form__component">
            <label htmlFor="Name">Last Name: </label>
            <input 
                  className="form__text"
                  type="text" 
                  name="lastName"
                  value={instructor.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"/>           
          </div>

          <div className="form__component">
            <label htmlFor="Address">Address:</label>
            <input 
                  className="form__text"
                  type="text" 
                  name="address"
                  value={instructor.address}
                  onChange={handleChange}
                  placeholder="Address"/>            
          </div>

          <div className="form__component">
            <label htmlFor="Address">Contact:</label>
            <input 
                  className="form__text"
                  type="text" 
                  name="contact"
                  value={instructor.contact}
                  onChange={handleChange}
                  placeholder="Contact"/>
          </div>

          <div className="form__component">
            <label htmlFor="Type">Type:</label>
            <select className="form__text" name="type" onChange={handleChange}>
              <option value="">...</option>
              <option value="Gym">Gym</option>
              <option value="Zumba">Zumba</option>
            </select> 
          </div>

          <button className="form__btn" onClick={createInstHandler}>Add</button>
        </form>

    </div>
  )
}

export default Instructor