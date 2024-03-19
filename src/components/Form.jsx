import React from 'react'
import "./Form.css"

function Form() {
  return (
    <div className="form">
        <form>
            <label>Your name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='text'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Enter yout message here'/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form