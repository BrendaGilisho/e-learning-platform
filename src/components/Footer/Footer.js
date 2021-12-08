import React from 'react';
import './Footer.css'

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-components'>
                <div className='footer-upper-container'>
                    <div className='footer-logo'>
                        <div className='logo-foo'>
                            <h1>LOGO</h1>
                        </div>
                    </div>

                    <div className='policies'>
                        <div className='privacy'>Privacy Policy</div>
                        <div className='faqs'>Privacy Policy FAQs</div>
                        <div className='use-terms'>Terms of Use</div>
                        <div className='request-info'>Request Info</div>

                    </div>

                    <div className='contact-help'>
                        <div className='contact'>Contact Us</div>
                        <div className='help-center'>Help Center</div>
                        <div className='track-order'>Track Your Order</div>
                        <div className='return'>Start a Return</div>
                        <div className='cancellation'>Start a Cancellation</div>


                    </div>

                    <div className='customer-service'>
                        <div className='customer-s'>Customer Service</div>
                        <div children='open-days'>Open: Mon - Fri 8am - 8pm GMT</div>


                    </div>
                </div>

                <div className='socials'>
                    <FaFacebook className='facebook' />
                    <FaInstagram className='insta' />
                    <FaPinterest className='pinterest' />
                </div>

            </div>
            <div className='divider'></div>
            <div className='rights'>
                <p>Copyright 2021, Decor. All rights reserved.</p>
            </div>
        </div>
    );
}