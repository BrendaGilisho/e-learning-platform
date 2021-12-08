import React from "react";
import './Course.css';

import { Link } from "react-router-dom";

export default function Course(){
    return(
        <div>
            <Link to='/Dashboard'>
             <h1 className='test' >Dashboard</h1>
            </Link>
        </div>
    );
}