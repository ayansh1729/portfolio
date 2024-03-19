import React from 'react'
import img2 from "../assets/img2.jpeg"
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
  return (
        <div className="project-card">
                <img src={props.imgsrc} alt="imgage"></img>
                <h2 className="project__title">
                {props.title}
            </h2>
            <div className="pro__details">
            <p>{props.text}</p>
            <div className="pro__buttons">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to="https://Google.com" className="btn">Source</NavLink>
            </div>
            </div>
        </div>
  )
}

export default WorkCard