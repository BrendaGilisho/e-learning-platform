import React from "react";
import './TopCourses.css'
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FaStar } from "react-icons/fa";

import Img1 from '../../assets/images/form1.jpg'
import PythonImg from '../../assets/images/py1.jpg'
import JSImg from '../../assets/images/js.jpg'

export default function TopCourses() {

    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 700,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true


    };

    return (
        <div className='top-courses'>
            <h1 className='top-title'> Top Courses </h1>
            <Slider {...settings}>
                <div className='top-course-1'>
                    {/* <h3>1</h3> */}
                    <Link to='/course'>
                        <div className='python-course'>
                            <div className='python-img'>
                                <img className='course1-img' src={PythonImg} />
                            </div>
                            <div className='python-description'>
                                <div className='skew-bg'>
                                    <div className='description-py'>
                                        <h3>Python for Beginners</h3>

                                    </div>
                                    <div className='py-stars'>
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='top-course-2'>
                    {/* <h3>2</h3> */}
                    <Link to='/course'>
                        <div className='js-course'>
                            <div className='js-img'>
                                <img className='course2-img' src={JSImg} />
                            </div>
                            <div className='js-description'>
                                <div className='skew-bg'>
                                    <div className='description-js'>
                                        <h3>Python for Data Science</h3>

                                    </div>
                                    <div className='js-stars'>
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='top-course-3'>
                    {/* <h3>3</h3> */}
                    <Link to='/course'>
                        <div className='js-course'>
                            <div className='js-img'>
                                <img className='course2-img' src={JSImg} />
                            </div>
                            <div className='js-description'>
                                <div className='skew-bg'>
                                    <div className='description-js'>
                                        <h3>JavaScript</h3>

                                    </div>
                                    <div className='js-stars'>
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                </div>

                <div className='top-course-4'>
                    {/* <h3>4</h3> */}
                    <Link to='/course'>
                        <div className='js-course'>
                            <div className='js-img'>
                                <img className='course2-img' src={JSImg} />
                            </div>
                            <div className='js-description'>
                                <div className='skew-bg'>
                                    <div className='description-js'>
                                        <h3>Java</h3>

                                    </div>
                                    <div className='js-stars'>
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className='top-course-5'>
                    {/* <h3>5</h3> */}
                    <Link to='/course'>
                        <div className='js-course'>
                            <div className='js-img'>
                                <img className='course2-img' src={JSImg} />
                            </div>
                            <div className='js-description'>
                                <div className='skew-bg'>
                                    <div className='description-js'>
                                        <h3>C#</h3>

                                    </div>
                                    <div className='js-stars'>
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className='top-course-6'>
                    {/* <h3>6</h3> */}
                    <Link to='/course'>
                        <div className='js-course'>
                            <div className='js-img'>
                                <img className='course2-img' src={JSImg} />
                            </div>
                            <div className='js-description'>
                                <div className='skew-bg'>
                                    <div className='description-js'>
                                        <h3>Advanced CSS</h3>

                                    </div>
                                    <div className='js-stars'>
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                        < FaStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            </Slider>



        </div>
    );
}