import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2';
import Pricing from '../components/Pricing';
import Work from '../components/Work';

function Project() {
  return (
    <div>
        <Navbar/>
        <Heroimg2 heading="PROJECTS." text = "Some of my projects."/>
        <Work/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Project;