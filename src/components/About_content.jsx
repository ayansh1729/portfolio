import React, { useState } from 'react';
import "./About_content.css";
import { Document, Page, pdfjs } from 'react-pdf';
import resumePdf from "../assets/resume.pdf"; // Replace with the actual path to your resume PDF

const PDFViewer = () => {
  return (
    <div className="pdf-container">
      <iframe src={resumePdf} className="pdf-iframe" />
    </div>
  );
};

function About_content() {
  return (
    <div className="about flex">
      <div className="resume__container flex">
        <h1>Resume</h1>
        <div className="my__line"></div>
        <div className="quotes">
          <p className="quote">"If your thirst is strong enough water isn't far away ..." - Ayansh</p>
          <p className="quote"> - "Even if you do RIGHT things for WRONG resons...RIGHT results will happen..." - </p>
          {/* Add more quotes as needed */}
        </div>
        <PDFViewer />
      </div>
    </div>
  );
}

export default About_content;

