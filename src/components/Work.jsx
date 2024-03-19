import React from 'react'
import "./Work.css"
import { NavLink } from 'react-router-dom'
import Workdb from "./Workdb"
import WorkCard from './WorkCard'

function Work(props) {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {Workdb.map((val,ind)=>{
                return(
                    <WorkCard 
                        key = {ind}
                        title = {val.title}
                        imgsrc = {val.imgsrc}
                        text = {val.text}
                        view = {val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work