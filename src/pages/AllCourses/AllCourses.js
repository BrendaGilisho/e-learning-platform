import React from "react";
import './AllCourses.css'
import { Link, NavLink } from "react-router-dom";

import Python from '../../assets/images/py1.jpg'
import Java from '../../assets/images/java.png'
import Go from '../../assets/images/go.png'
import R from '../../assets/images/r.jpg'
import CSS from '../../assets/images/css.jpg'
import JS from '../../assets/images/js.png'
import JQ from '../../assets/images/jquery.png'





export default function AllCourses() {
    return (
        <div>
            {/* <Link to='/Course'>
                <h1 className='test'>Python</h1>
            </Link> */}

            <div className='outdoor-main'>
                <div className='outdoor-container'>

                    <div className='categories'>
                        <div className='category-menu'>

                            <div className='shop-by-category'>
                                <div className='shop-by-category-title'>Top Programming Languages</div>
                                <NavLink to='/Course' className='patio'>
                                    Java
                                </NavLink>
                                <NavLink to='/Course' className='gardening-lawn'>
                                    C++
                                </NavLink>
                                <NavLink to='/Course' className='grills-cooking'>
                                    C#
                                </NavLink>
                                <NavLink to='/Course' className='outdoor-storage'>
                                    Python
                                </NavLink>
                                <NavLink to='/Course' className='umbrellas-shade'>
                                    JavaScript
                                </NavLink>
                                <NavLink to='/Course' className='cushion-covers'>
                                    Go
                                </NavLink>
                                <NavLink to='/Course' className='entertainment'>
                                    Swift
                                </NavLink>
                                <NavLink to='/Course' className='beach-pool'>
                                    Rust
                                </NavLink>

                            </div>

                            <div className='shop-by-brand'>
                                <div className='shop-by-brand-title'>Front-End</div>
                                <NavLink to='/Course' className='hn-outdoor'>
                                    HTML & CSS
                                </NavLink>
                                <NavLink to='/Course' className='woodard'>
                                    JavaScript
                                </NavLink>
                                <NavLink to='/Course' className='design-toscano'>
                                    TypeScript
                                </NavLink>
                                <NavLink to='/Course' className='best-selling-home'>
                                    JQuery
                                </NavLink>

                            </div>

                            <div className='shop-outdoor-by'>
                                <div className='shop-outdoor-by-title'>Back-End</div>
                                <NavLink to='/Course' className='new-product'>
                                    NodeJS
                                </NavLink>
                                <NavLink to='/Course' className='top-selling'>
                                    Python
                                </NavLink>
                                <NavLink to='/Course' className='quick-shipping'>
                                    PHP
                                </NavLink>


                            </div>

                            <div className='shop-by-collection'>
                                <div className='shop-by-collection-title'>Frameworks</div>
                                <NavLink to='/Course' className='patio-collection'>
                                    Spring Boot
                                </NavLink>
                                <NavLink to='/Course' className='garden-collection'>
                                    React
                                </NavLink>
                                <NavLink to='/Course' className='garden-collection'>
                                    Angular
                                </NavLink>


                            </div>

                        </div>
                    </div>



                    <div className='outdoor-living'>
                        <div className='outdoor-sample-pictures'>

                            <div className='outdoor-pics-row1'>
                                <div className='row1-pic1'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={Python} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            Python
                                        </NavLink>
                                    </div>

                                </div>
                                <div className='row1-pic2'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={Java} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            Java
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic3'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={Go} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            Go
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic4'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={R} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            R
                                        </NavLink>
                                    </div>


                                </div>

                            </div>


                            <div className='outdoor-pics-row2'>
                                <div className='row1-pic1'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={CSS} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            Advanced CSS
                                        </NavLink>
                                    </div>

                                </div>
                                <div className='row1-pic2'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={JS} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            JavaScript
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic3'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={JQ} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            JQuery
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic4'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={Python} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            TypeScript
                                        </NavLink>
                                    </div>


                                </div>

                            </div>
                            <div className='outdoor-pics-row3'>
                                <div className='row1-pic1'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={Python} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            NodeJs
                                        </NavLink>
                                    </div>

                                </div>
                                <div className='row1-pic2'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={Python} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            React
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic3'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={Python} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            PHP
                                        </NavLink>
                                    </div>


                                </div>
                                <div className='row1-pic4'>
                                    <div className='patio-sets'>
                                        <NavLink to='/Course'>
                                            <img className='hanging-chair' src={Python} />
                                        </NavLink>
                                    </div>
                                    <div className='patio-set-name'>
                                        <NavLink to='/Course'>
                                            Angular
                                        </NavLink>
                                    </div>


                                </div>


                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}