import React from "react";
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'


export default function Navbar() {
    return (
        <div>
            <div className='nav' >

                <div className='navbar-menu'>
                    <NavLink to="/" className='home-nav'>
                        LOGO
                    </NavLink>

                    {/* <form action='/' method='get' > */}
                    <div className='search-container'>
                        <input className='search-bar'
                            type='text'
                            id='header-search'
                            placeholder='Search for anything'
                        />
                        <button type='submit' className='search-btn'> <FaSearch /> </button>

                    </div>
                    {/* </form> */}

                    <Link to="/AllCourses" className='home-nav'>
                        Courses
                    </Link>

                    <Link to="/JoinRoom" className='home-nav'>
                        Common Room
                    </Link>

                    <Link to="/AllCourses" className='home-nav'>
                        Contact us
                    </Link>

                    <Link to="/Sign-up" className='home-nav'>
                        Sign up
                    </Link>

                    <NavLink to="/Login" className='home-nav'>
                        Login
                    </NavLink>

                </div>


            </div>


        </div>
    );
}
