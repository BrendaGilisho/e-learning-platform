import React, { useState } from "react";
import './ContactUs.css'


export default function ContactUs() {

    return (
        <div>
            {/* <div>---- Sign up -----</div> */}


            <div className='form-page'>


                <div className='form-container'>

                    <form
                        className='main-form'>
                        <h3 className='contact-title'>Contact Us</h3>
                        <p className='get-back'>We will get back within 24 Hours</p>

                        <div className='contact-group'>
                            <div className="firstname">
                                <input type="text"
                                    className="form-control"
                                    placeholder="First name"
                                />
                            </div>

                            <div className="lastname">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                />
                            </div>

                            <div className="email">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="region">
                                <label>Region</label>
                                <select className="region-choice" id="region" name="region">
                                    <option value="choose">Choose</option>
                                    <option value="america">America</option>
                                    <option value="africa">Africa</option>
                                    <option value="asia">Asia</option>
                                    <option value="australia">Australia</option>
                                    <option value="europe">Europe</option>
                                </select>
                            </div>
                            <div className="message">
                                <textarea className="message-area" placeholder="Type your Message Here...." tabindex="5" required></textarea>
                            </div>

                        </div>

                        <button type="submit"
                            className="btn-contact">
                            SUBMIT
                        </button>

                    </form>


                </div>

            </div >
        </div >
    );

}