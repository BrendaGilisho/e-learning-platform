import React, { useState } from "react";
import './Sign-up.css'
import axios, { Axios } from 'axios';

// import { Image } from "cloudinary-react"

import { NavLink } from "react-router-dom";

import FormPic from '../../assets/images/form1.jpg'
import BgImg from '../../assets/images/bg.jpg'

export default function SignUp() {

    const [firstNameValue, setFirstName] = useState('')
    const [lastNameValue, setLastName] = useState('')
    const [emailValue, setEmail] = useState('')
    const [passwordValue, setPassword] = useState('')

    const [imageSelected, setImageSelected] = useState('')

    const uploadImage = () => {
        const formData = new formData();
        formData.append("file", imageSelected);
        ImageData.append("upload_preset", "pnvaylnb");

        Axios.post("https://api.cloudinary.com/v1_1/joan-gilisho/image/upload", formData)
            .then((response) => {
                console.log(response)
            });
    };

    const formSubmit = (event) => {
        // event.preventDefault();

        const registeredUser = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            email: emailValue,
            password: passwordValue

        }
        console.log(registeredUser)
        axios.post('http://localhost:8080/app/signup', registeredUser)

            .then(response => console.log(response.data))

            .catch(error => {
                // error.json(error)
                console.log(error)
            })

        // window.location = '/home'


    }


    return (
        <div>        
            {/* <div>---- Sign up -----</div> */}


            <div className='form-page'
               style={{
                // backgroundImage: 'url('+BgImg+')',
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
                // height: "100%",
                // width: "100%",
                // opacity: "20%"
                // color: "#f5f5f5"
              }}
               >


                <div className='form-container'>
                    {/* <div className='form-left-side-pic'>
                        <img className="form-pic1" alt='form-pic1' src={FormPic} />

                    </div> */}

                    <form onSubmit={formSubmit}
                        className='main-form'>
                        <h3 className='sign-up-title'>Sign Up</h3>

                        <div className='form-group'>
                            <div className="firstname">
                                {/* <label>First name</label> */}
                                <input type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    value={firstNameValue}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="lastname">
                                {/* <label>Last name</label> */}
                                <input type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    value={lastNameValue}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className="email">
                                {/* <label>Email address</label> */}
                                <input type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={emailValue}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="password">
                                {/* <label>Password</label> */}
                                <input type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={passwordValue}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {/* <div>
                                <input
                                    type='file'
                                    onChange={(e) => setImageSelected(e.target.files[0])}
                                />
                                <button onClick={uploadImage}>Upload Image</button>

                            </div> */}
                        </div>

                        <button type="submit"
                            onClick={formSubmit}
                            className="btn-sign-up">
                            REGISTER
                        </button>


                        <p className="forgot-password">
                            Already registered
                            <NavLink to="/login">
                               <button className="or-login"> Sign in? </button>
                            </NavLink>
                        </p>
                        {/* <Image
                            style={{ width: 100 }}
                            cloudName="joan-gilisho"
                            publicId="https://res.cloudinary.com/joan-gilisho/image/upload/v1639419711/leer/van_legs_man_159350_1366x768_oyblgu.jpg" /> */}

                    </form>


                </div>

            </div>
        </div>
    );

}