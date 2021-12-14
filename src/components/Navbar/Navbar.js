import React from "react";
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa'
import Logo1 from '../../assets/images/logo2.png'

export default function Navbar() {
    return (
        <div>
            <div className='nav' >

                <div className='navbar-menu'>
                    <NavLink to="/" className='home-nav'>
                        <img className='logo' src={Logo1} />
                    </NavLink>

                    {/* <form action='/' method='get' > */}
                    <div className='search-container'>
                        <input className='search-bar'
                            type='text'
                            id='header-search'
                            placeholder='Search for courses'
                        />
                        {/* <button type='submit' className='search-btn'> <FaSearch /> </button> */}

                    </div>
                    {/* </form> */}

                    <Link to="/AllCourses" className='home-nav'>
                        Courses
                    </Link>

                    <Link to="/ChatRoom" className='home-nav'>
                        Common Room
                    </Link>

                    <Link to="/AllCourses" className='home-nav'>
                        Contact us
                    </Link>

                    <div className="dropdown">
                        <button className="dropbtn">Sign up/In</button>
                        <div className="dropdown-content">
                            <Link to="/Sign-up">SignUp </Link>
                            <Link to="/Login">Login</Link>
                        </div>
                    </div>
                    

                </div>


            </div>


        </div>
    );
}
