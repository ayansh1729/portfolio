import React from 'react'
import "./About_content.css"
import { Link } from 'react-router-dom';
import img3 from "../assets/img2.jpeg"

function About_content() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a react front-end developer.I create responsive secure websites for my clients</p>
            <Link to="/contact" className='btn'>Contact</Link>
        </div>
        <div className="right">
            <div className="image__container">
                <div className="img__top">
                    <img src={img3} className='img'></img>
                </div>
                <div className="img__bottom">
                    <img src={img3} className='img'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About_content;