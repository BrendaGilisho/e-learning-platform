// import BgImg from '../../assets/images/nav-hero.jpg' style={{ backgroundImage: `url(${BgImg})` }}
import React from "react";
import './Users.css'
import { Link } from "react-router-dom";

import HeroImg from '../../assets/images/hero-b.png'

import Student from '../../assets/images/person1.jpg'
import Tutor from '../../assets/images/3.jpg'

export default function Users() {
    return (
        <div className='users-container' >

            <div className='hero-section'>
                <div className='student-welcome'>
                    <h1 className='welcome'> Become a Student </h1>
                    <h4 className='p'>Give students skills .... blah blah..</h4>
                    <Link className='courses-btn' to='/'>
                        <button className='btn'> Start Learning </button>
                    </Link>

                </div>

                <div className='student-img'>
                    <img className='studentImg' src={Student} />

                </div>

            </div>

            <div className='hero-section'>

                <div className='hero-img'>
                    <img className='tutorImg' src={Tutor} />

                </div>

                <div className='be-tutor'>
                    <h1 className='welcome'> Become an instructor </h1>
                    <h4 className='p'>Give students skills .... blah blah..</h4>
                    <Link className='courses-btn' to='/'>
                        <button className='btn'> Start teaching </button>
                    </Link>

                </div>



            </div>

        </div>
    );
}