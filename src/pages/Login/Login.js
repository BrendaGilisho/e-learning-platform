import React, { useState } from "react";
import './Login.css'

import axios from 'axios';

import { NavLink } from "react-router-dom";
import FormPic from '../../assets/images/form1.jpg'

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginSubmit = (event) => {
        event.preventDefault();

        const logInUser = {
            email: email,
            password: password

        }
        console.log(logInUser)
        axios.post('http://localhost:8080/app/login', logInUser)

            .then(response => alert(response.data.message))

            .catch(error => {
                // error.json(error)
                console.log(error)
            })

        // window.location = '/home'
        setEmail('');
        setPassword('');


    }


    return (
        <div>
            {/* <div>---- Login -----</div> */}

            <div className='form-page'>


                <div className='form-container'>
       

                    <form onSubmit={loginSubmit}
                        className='main-form'>
                        <h3 className='login-title'>Log In</h3>

                        <div className='form-group'>

                            <div className="email">
                                {/* <label>Email address</label> */}
                                <input type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="password">
                                {/* <label>Password</label> */}
                                <input type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type="submit"
                            onClick={loginSubmit}
                            className="btn-sign-up">
                            LOGIN
                        </button>


                        <p className="forgot-password">
                            Already registered
                            <NavLink to="/sign-up" >
                            <button className="or-login"> Sign up? </button>
                            </NavLink>
                        </p>
                    </form>
                </div>

            </div>
        </div>
    );

}