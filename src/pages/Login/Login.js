import React, { useState } from "react";
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
            <div>---- Login -----</div>

            <div className='form-page'>


                <div className='form-container'>
                    <div className='form-left-side-pic'>
                        <img className="form-pic1" alt='form-pic1' src={FormPic} />

                    </div>

                    <form onSubmit={loginSubmit}
                        className='main-form'>
                        <h3>Sign Up</h3>

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


                        <p className="forgot-password text-right">
                            Already registered
                            <NavLink to="/sign-up" >
                                Sign up?
                            </NavLink>
                        </p>
                    </form>
                </div>

            </div>
        </div>
    );

}