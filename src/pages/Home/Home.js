import React from "react";
// import Navbar from '../../components/Navbar/Navbar'

import Hero from "../../components/HeroSection/HeroSection";
import TopCourses from "../../components/TopCourses/TopCourses";
import Frameworks from "../../components/Frameworks/Frameworks";
import BecomeInstructor from "../../components/BecomeInstructor/BecomeInstructor";
import BecomeStudent from "../../components/BecomeStudent/BecomeStudent";


export default function Home() {
    return (
        <div>
            {/* < Navbar /> */}
            {/* <h1>Home up and running ...</h1> */}

            < Hero />
            < TopCourses />
            < BecomeInstructor />

            < Frameworks />
            < BecomeStudent />

        </div>
    );
}


