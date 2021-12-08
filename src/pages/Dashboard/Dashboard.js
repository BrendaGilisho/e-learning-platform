import React from "react";
import './Dashboard.css'
import { Link } from "react-router-dom";

import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet, FaCalendar, FaClock } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";

import AvatarImage from '../../assets/images/bree.jpeg'

export default function Dashboard() {
    return (
        <div className='dash-container'>
            {/* <h1> dash ... </h1> */}
            <div className='Container'>
                <div className='ProfileContainer'>
                    <img className='Avatar' src={AvatarImage} />
                    <p className='Name'>Gilisho Brenda</p>
                    <Link to='/Course'>
                        <p className='Account'>Account</p>
                    </Link>
                    {/* <div className='Badge' content="Pro Level" > Student </div> */}
                </div>
                <div className='LinksContainer'>
                    <div className='Links'>
                        <Link className='Link' to='/Course'>
                            <RiHomeLine className='svg' />
                            <h3>Dashboard</h3>
                        </Link>
                        <Link className='Link' to='/Course'>
                            <RiFileCopyLine className='svg' />
                            <h3>Projects</h3>
                        </Link>
                        <Link className='Link' to='/Course'>
                            <FaWallet className='svg' />
                            <h3>Invoices</h3>
                        </Link>
                        <Link className='Link' to='/Course'>
                            <AiOutlinePieChart className='svg' />
                            <h3>Reports</h3>
                        </Link>
                        <Link className='Link' to='/Course'>
                            <FaClock className='svg' />
                            <h3>Progress</h3>
                        </Link>
                        <Link className='Link' to='/Course'>
                            <FaCalendar className='svg' />
                            <h3>Calendar</h3>
                        </Link>
                    </div>
                    <div className='ContactContainer'>
                        <span>Having troubles?</span>
                        <a className='tr-lnk' href="#">Contact us </a>
                    </div>
                </div>
            </div>


        </div>
    );
}