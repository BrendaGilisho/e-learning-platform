import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BecomeStudent.css'



export default function BecomeStudent() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let slider = setInterval(() => {
            index === 2 ? setIndex(index - index) : setIndex(index + 1);
        }, 2500);
        return () => clearInterval(slider);
    }, [index]);

    const imagesAndText = [
        {
            image:
                'https://res.cloudinary.com/joan-gilisho/image/upload/v1639469475/leer/person3_nocxgz.jpg',
        },
       
        {
            image:
                'https://res.cloudinary.com/joan-gilisho/image/upload/v1639470716/leer/https_3A_2F_2Fspecials-images.forbesimg.com_2Fimageserve_2F60a6da6ec305ee12e2cc74ed_2FYoung-man--college-student-studying-for-an-exam-at-home_2F960x0_yvmr5b.jpg',
        },
        
        {
            image:
                'https://res.cloudinary.com/joan-gilisho/image/upload/v1639470865/leer/guy-studying_brhadh.jpg',
        }
        
    ];


    return (
        <div >
            <div className='student-div'>

                <div className="overlayon">
                    <img className="fade-img" src={imagesAndText[index].image} alt="askus" loading="lazy" />
                </div>

                <div className='student-welcome'>
                    <h1 className='welcome-std'> Become a Student </h1>
                    <h4 className='p'>Join our community to learn new skills and apply them</h4>
                    <Link className='courses-btn' to='/AllCourses'>
                        <button className='btn'> Start Learning </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}