import React, { useState, useEffect } from 'react';
import './BecomeStudent.css'



export default function BecomeStudent() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let slider = setInterval(() => {
            index === 5 ? setIndex(index - index) : setIndex(index + 1);
        }, 3000);
        return () => clearInterval(slider);
    }, [index]);

    const imagesAndText = [
        {
            image:
                'https://res.cloudinary.com/joan-gilisho/image/upload/v1639469475/leer/person3_nocxgz.jpg',
        },
        {
            image:
                'https://res.cloudinary.com/joan-gilisho/image/upload/v1639470719/leer/AdobeStock_132869900-860x420_jcudpg.jpg',
        },
        {
            image:
                'https://res.cloudinary.com/joan-gilisho/image/upload/v1639470716/leer/https_3A_2F_2Fspecials-images.forbesimg.com_2Fimageserve_2F60a6da6ec305ee12e2cc74ed_2FYoung-man--college-student-studying-for-an-exam-at-home_2F960x0_yvmr5b.jpg',
        },
        {
            image:
                'https://res.cloudinary.com/joan-gilisho/image/upload/v1639470715/leer/focused-african-student-looking-at-laptop-holding-book-doing-research-picture-id1144287280_jiltue.jpg',
        },
        {
            image:
                'https://res.cloudinary.com/joan-gilisho/image/upload/v1639470865/leer/guy-studying_brhadh.jpg',
        },
        {
            image:
                'https://res.cloudinary.com/joan-gilisho/image/upload/v1639469434/leer/person2_fhl6ej.jpg',
        }
    ];


    return (
        <div >
            <h1>Fade...</h1>

            <div className="overlayon">
                <img className="fade-img" src={imagesAndText[index].image} alt="askus" loading="lazy" />
            </div>

        </div>
    );
}