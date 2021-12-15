import React from "react";
import './Frameworks.css'
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import JSImg from '../../assets/images/js.jpg'
import Angular from '../../assets/images/angular.png'
import Django from '../../assets/images/django.png'
import Laravel from '../../assets/images/laravel.png'
import Vue from '../../assets/images/vue.png'




export default function Frameworks() {

    var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 700,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true


    };

    return (
        <div>
            <h1 className='f-title'> Frameworks </h1>
            <Slider {...settings}>
                <div className='top-course-1'>
                    {/* <h3>1</h3> */}
                    <Link to='/course'>
                        <div className='framework-card'>
                            <div className='python-img'>
                                <img className='course1-img' src={Angular} />
                            </div>
                            <div className='python-description'>
                                <div className='skew-bg'>
                                    <div className='description-py'>
                                        <h3>Angular</h3>

                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='top-course-2'>
                    {/* <h3>2</h3> */}
                    <Link to='/course'>
                        <div className='framework-card'>
                            <div className='js-img'>
                                <img className='course2-img' src={Django} />
                            </div>
                            <div className='js-description'>
                                <div className='skew-bg'>
                                    <div className='description-py'>
                                        <h3>Django</h3>

                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='top-course-3'>
                    {/* <h3>3</h3> */}
                    <Link to='/course'>
                        <div className='framework-card'>
                            <div className='js-img'>
                                <img className='course2-img' src={Laravel} />
                            </div>
                            <div className='js-description'>
                                <div className='skew-bg'>
                                    <div className='description-py'>
                                        <h3>Laravel</h3>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </Link>


                </div>

                <div className='top-course-4'>
                    {/* <h3>4</h3> */}
                    <Link to='/course'>
                        <div className='framework-card'>
                            <div className='js-img'>
                                <img className='course2-img' src={Vue} />
                            </div>
                            <div className='js-description'>
                                <div className='skew-bg'>
                                    <div className='description-py'>
                                        <h3>Vue</h3>

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