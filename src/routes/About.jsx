import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import About_content from '../components/About_content'

function About() {
  return (
    <div>
        <Navbar/>
        <Heroimg2 heading="ABOUT" text="I'm a Software Developer"/>
        <About_content />
        <Footer/>
      </div>
  )
}

export default About