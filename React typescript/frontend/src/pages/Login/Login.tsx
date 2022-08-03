import React, { useState } from "react";
import './login.css';
import {Footer} from "../../components/Footer/Footer";
import {Header} from '../../components/Header/Header'
import { loginReq } from "../../actions/accounts/accounts";
import { useDispatch } from "react-redux";
import { accountReducers } from "../../reducers/account";

interface ILoginData {
    username: string;
    password: string;
}

const Login = () => {

    const dispatch = useDispatch();

    const [login, setLogin] = useState<ILoginData>({
        username: '',
        password: ''
    })

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({...login, [name]:value})
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(`The ${login.username} and ${login.password} were submitted`)
        loginReq(login, dispatch)
    }

    return(
        <div className="login__page">
            <Header/>

            <section className="login__view">
                <form className="login__form" onSubmit={handleSubmit}>

                    <label htmlFor="Contact us" className="login--title">Login</label>

                    {/* <hr /> */}

                        {/* <label htmlFor="Email">Username :</label> */}
                        <input 
                            className="login__text"
                            type="text" 
                            name="username"
                            value={login.username}
                            onChange={handleChange}
                            placeholder="Username"/>

                        {/* <label htmlFor="Password">Password :</label> */}
                        <input 
                            className="login__text"
                            type="password" 
                            name="password"
                            value={login.password}
                            onChange={handleChange}
                            placeholder="Password"/>

                        <button className="login__submit" type="submit">Login</button>

                        {/* <hr></hr> */}
                </form>

                <div className="login__image">
                </div>
            </section>

            
            <Footer/>
        </div>

        
    )
  
}

export default Login