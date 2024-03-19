import React from 'react'
import "./Pricing.css"
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <div className="pricing__main">
        <div className="card-container">
            <div className="card">
                <h3>Basic</h3>
                <span className="line">
                </span>
                <p className='btc'>$100</p>
                <p>-3 Days-</p>
                <p>-3 Pages-</p>
                <p>-3 Pages-</p>
                <p>-3 Pages-</p>
                <Link to ="/contact" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>Basic</h3>
                <span className="line"></span>
                <p className='btc'>$100</p>
                <p>-3 Days-</p>
                <p>-3 Pages-</p>
                <p>-3 Pages-</p>
                <p>-3 Pages-</p>
                <Link to ="/contact" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>Basic</h3>
                <span className="line"></span>
                <p className='btc'>$100</p>
                <p>-3 Days-</p>
                <p>-3 Pages-</p>
                <p>-3 Pages-</p>
                <p>-3 Pages-</p>
                <Link to ="/contact" className="btn">Purchase Now</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing