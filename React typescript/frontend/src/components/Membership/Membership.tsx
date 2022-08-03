import React, { useEffect, useState } from 'react'
import { createInstructor, getInstructors } from '../../actions/accounts/instructor';
import { createMembership, getMemberships } from '../../actions/membership/membership';
import MembershipDisplay from '../Table/MembershipDisplay';

import UserDisplay from '../Table/UserDisplay';
import './membership.css';


export interface membership {
  membershipId?: number,
  type: string,
  duration: string,
  price: string
}

const Membership = () => {
  let [memberships, setMemberships] = useState<membership[]>([]);
  const [membership, setMembership] = useState<membership>({
    type: '',
    duration: '',
    price: ''
  })

const fetchMemberships = () => {
    getMemberships()
    .then((json) => {
        setMemberships(json);
        console.log(memberships)
    });
}
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const name = e.target.name;
    const value = e.target.value;
    setMembership({ ...membership, [name]: value });
  };

  const createMembHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createMembership(membership);
  }

  useEffect(()=>{
    fetchMemberships()
  },[])

  return (
    <div className='instructor'>

        <div className="instructor__display featured">
          <MembershipDisplay memberships={memberships}/>
        </div>

        <form className='instructor__form featured'>

          <label className='form__title'>Create Membership</label>

          <div className="form__component">
            <label htmlFor="Type">Membership Type:</label>
            <select className="form__text" name="type" onChange={handleChange}>
              <option value="">...</option>
              <option value="Gym">Gym</option>
              <option value="Zumba">Zumba</option>
            </select> 
          </div>

          <div className="form__component">
            <label htmlFor="Name">Duration: </label>
            <input 
                  className="form__text"
                  type="text" 
                  name="duration"
                  value={membership.duration}
                  onChange={handleChange}
                  placeholder="Duration"/>           
          </div>

          <div className="form__component">
            <label htmlFor="Address">Address:</label>
            <input 
                  className="form__text"
                  type="text" 
                  name="price"
                  value={membership.price}
                  onChange={handleChange}
                  placeholder="Price"/>            
          </div>

          {/* <div className="form__component">
            <label htmlFor="Address">Contact:</label>
            <input 
                  className="form__text"
                  type="text" 
                  name="contact"
                  value={user.contact}
                  onChange={handleChange}
                  placeholder="Contact"/>
          </div> */}

          

          <button className="form__btn" onClick={createMembHandler}>Add</button>
        </form>

    </div>
  )
}

export default Membership;