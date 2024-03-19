import React from 'react'
import "./Footer.css"
import { FaFacebook, FaHome, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'

function Footer() {
  return (
    <div className='main__footer'>
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{
                    colot: "white",marginRight: "2rem"
                }} />
                <p>IIITDM Kancheepuram</p>
                <p>Melakottaiyur, Chennai 600127 </p>
            </div>
            <div className="phone">
                <FaPhone size={20} style={{
                    colot: "white",marginRight: "2rem"
                }} />
                <p>+91 6201451767</p>
            </div>
            <div className="email">
                <FaMailBulk size={20} style={{
                    colot: "white",marginRight: "2rem"
                }} />
                <p>augustinadwin@gmail.com</p>
            </div>
        </div>
        <div className="right">
            <h4>About me</h4>
            <p>I am Ayansh, a third-year student at IIITDM Kancheepuram, majoring in Computer Science with a focus on Artificial Intelligence. In my internship at a US-based startup, I took on the role of data preprocessing, demonstrating my proficiency in refining and managing crucial datasets. Additionally, my collaborative spirit shone through as I played a pivotal role in a winning team at the Vasist hackathon organized by our college. With a solid foundation in AI and practical experience in data science, I am enthusiastic about making meaningful contributions in the field.</p>
            <div className="social">
                <FaFacebook size={30} style={{color: "white",marginRight: "1rem"}} />
                <FaTwitter size={30} style={{color: "white",marginRight: "1rem"}} />
                <FaLinkedin size={30} style={{color: "white",marginRight: "1rem"}} />
            </div>
        </div>
    </div>
  )
}

export default Footer