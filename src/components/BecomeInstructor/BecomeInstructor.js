// import BgImg from '../../assets/images/nav-hero.jpg' style={{ backgroundImage: `url(${BgImg})` }}
import React from "react";
import './BecomeInstructor.css'
import { Link } from "react-router-dom";

import HeroImg from '../../assets/images/hero-b.png'

import Student from '../../assets/images/person1.jpg'
import Tutor from '../../assets/images/3.jpg'

export default function Users() {
    return (
        <div className='users-container' >

            <div className='hero-section'>
                <div className='instructor-welcome'>
                    <h1 className='welcome-inst'> Become an Instructor </h1>
                    <h4 className='p'>Join our team to pass knowledge to others</h4>
                    <Link className='courses-btn' to='/course'>
                        <button className='btn'> Apply to Join </button>
                    </Link>

                </div>

                <div className='student-img'>
                    <img className='InstructorImg' src={Student} />

                </div>

            </div>

            

        </div>
    );
}