import React from "react";
// import Navbar from '../../components/Navbar/Navbar'

import Hero from "../../components/HeroSection/HeroSection";
import TopCourses from "../../components/TopCourses/TopCourses";
import Frameworks from "../../components/Frameworks/Frameworks";
import Users from "../../components/Users/Users";


export default function Home() {
    return (
        <div>
            {/* < Navbar /> */}
            {/* <h1>Home up and running ...</h1> */}

            < Hero />
            < TopCourses />
            < Frameworks />
            < Users />

        </div>
    );
}


