// import BgImg from '../../assets/images/nav-hero.jpg' style={{ backgroundImage: `url(${BgImg})` }}
import React from "react";
import './HeroSection.css'
import { Link } from "react-router-dom";

import HeroImg from '../../assets/images/hero-b.png'


export default function Hero() {
    return (
        <div className='hero-container' >

            <div className='hero-section'>
                <div className='hero-welcome'>
                    {/* <h1 className='welcome'>Welcome!</h1> */}
                    <div className='typewriter'>
                        <h1>Welcome...Learn without limit!</h1>
                    </div>

                    <h4 className='p'>Build skills, connect with others and get certified</h4>
                    <Link className='courses-btn' to='/course'>
                        <button className='btn'> Explore Courses </button>
                    </Link>

                </div>

                <div className='hero-img'>
                    <img className='heroImg' src={HeroImg} />

                </div>

            </div>

        </div>
    );
}
