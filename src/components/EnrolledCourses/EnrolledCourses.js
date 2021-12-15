import React, { useState, useEffect } from "react";
import './EnrolledCourses.css'

import ProgressBar from "@ramonak/react-progress-bar";


export default function EnrolledCourses() {
    // const Example = () => {
    //     return <ProgressBar completed={60} />;
    //   };
    return (
        <div className='enrolled-courses'>
            <h2>Enrolled Course</h2>
            <div className='course1'>
                <h4>Python</h4>
                <ProgressBar
                    completed={60}
                    className="wrapper"
                    barContainerClassName="container"
                    completedClassName="barCompleted"
                    labelClassName="label" />

            </div>

            <div className='course1'>
                <h4>JavaScript</h4>
                <ProgressBar
                    completed={60}
                    className="wrapper"
                    barContainerClassName="container"
                    completedClassName="barCompleted"
                    labelClassName="label" />

            </div>

            <div className='course1'>
                <h4>Node JS</h4>
                <ProgressBar
                    completed={60}
                    className="wrapper"
                    barContainerClassName="container"
                    completedClassName="barCompleted"
                    labelClassName="label" />

            </div>
        </div>
    );
}