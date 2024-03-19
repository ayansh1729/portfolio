import React from 'react';
import "./Heroimg.css";
import Introimg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';

function Heroimg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro__img" src={Introimg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hi! I'm Ayansh </p>
            <h1>Software Developer.</h1>
          <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
