import React, { useState, useEffect } from "react";
import './EnrolledCourses.css'

import ProgressBar from "@ramonak/react-progress-bar";


export default function EnrolledCourses() {
    // const Example = () => {
    //     return <ProgressBar completed={60} />;
    //   };
    return (
        <div className='enrolled-courses'>
            <h1>Here...</h1>
            <ProgressBar
                completed={80}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label" />


        </div>
    );
}