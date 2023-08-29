import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navlinks">
            <div className="gpt3logo">GPT-3</div>
            <div className="links">
                <a href="">Home</a>
                <a href="">What os GPT?</a>
                <a href="">Open AI</a>
                <a href="">Case Studies</a>
                <a href="">Library</a>
            </div>
        </div>
        <div className="buttons">
            <a href="" className='nobgbutton'>Sign In</a>
            <Button buttonName='Sign Up'/>
        </div>
    </div>
  )
}

export default Navbar