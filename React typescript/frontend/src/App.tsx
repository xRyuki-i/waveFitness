import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Interface } from 'readline';
import Instructors from './pages/Instructors/Instructors';
import Users from './pages/Users/Users';
import Memberships from './pages/Memberships/Memberships';
import { PrivateRoute } from './Protected';

interface account {
  loggedIn: boolean
}

interface RootState{
  account: account
}



function App() {

  const {account} = useSelector((state: RootState) => state)

  return (
      <Routes>
        <Route path='/' 
          element={
            account.loggedIn? <Home/> : <Login/>
            // true? <Home/> : <Login/>
          } />
        {/* <Route path='/1' element={<Login/>} /> */}
        {/* <Route path='/instructors' element={<Instructors/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/memberships' element={<Memberships/>} /> */}
        <Route path='/instructors' element={<PrivateRoute auth={account.loggedIn}/>}>
          <Route  path='/instructors' element={<Instructors/>}/>
        </Route>

        <Route path='/memberships' element={<PrivateRoute auth={account.loggedIn}/>}>
          <Route  path='/memberships' element={<Memberships/>}/>
        </Route>

        <Route path='/users' element={<PrivateRoute auth={account.loggedIn}/>}>
          <Route  path='/users' element={<Users/>}/>
        </Route>
      </Routes>
  );
}

export default App;
