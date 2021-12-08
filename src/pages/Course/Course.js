import React from "react";
import './Course.css';

import Faq from 'react-faq-component';
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import Vid1 from '../../assets/videos/vid1.mp4'
import Lecturer from '../../assets/images/py-l.jpg'


const data = {
  title: "Course Overview",
  rows: [
    {
      title: "Module 1",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Module 2",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Module 3",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "Module 4",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "Module 5",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "Module 6",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "Module 7",
      content: "v1.0.5"
    }]
}

const styles = {
  rowContentPaddingLeft: '50px',

}

export default function Course() {
  return (
    <div>
      {/* <Link to='/Dashboard'>
                <h1 className='test' >Dashboard</h1>
            </Link> */}
      <div className='top-header'>
        <div className='welcome-header'>
          <h2 className='welcome-note' > Welcome to Python Course</h2>
          <div className='stars'>
            < FaStar />
            < FaStar />
            < FaStar />
            < FaStar />

            <div>
              <div className='lec-pic-name'>
                <img className='lecturer' src={Lecturer} />
                <p className='lec-name'>Emiee Ann</p>
              </div>

            </div>
          </div>
        </div>
        <div className='enroll-card'>
          <div className='enroll-div'>
            <h4 className='enroll-h4'>Free Course </h4>
            <Link to='/Dashboard'>
              <button className='enroll-btn'>ENROLL</button>
            </Link>
          </div>
        </div>

      </div>

      <div className='course-container'>
        <div className='course-overview'>


          <Faq
            data={data}
            styles={styles} />


        </div>

        <div className='welcome-video'>
          {/* <source src={Vid1} className='video1'  type='video/mp4' /> */}
          <ReactPlayer controls url='https://youtu.be/hEgO047GxaQ' />

          <div className='course-note'>
            <p>
              Python, a powerful programming language, is used by programmers for multiple purposes. Right from web development to machine learning and data science, Python is the language used by programmers. This comprehensive course on 'Python Fundamentals for Beginners' covers all the basic and advanced concepts related to programming and Python concepts. You will get a conceptual understanding of the fundamentals of python programming, such as Flow control Statements, Functions, and Object-Oriented Programming. Learn what an algorithm is and how to use them to solve problems. Get familiar with Python basics such as Python Data Structures, Variables, Operators, Flow Control Statements, and OOPs. The entire course gives you hands-on experience in coding so that you gain practical expertise in the subject. As a beginner in Python, you should take up this course in order to get prepared for the advanced courses in Python, Data Science, or Machine Learning.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}