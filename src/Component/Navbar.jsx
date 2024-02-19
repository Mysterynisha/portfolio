import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
        <div><h1>Portfolio</h1></div>
        <div className='navdetail'>
            <div>
            <a href='Home'>Home</a>
            </div>
            <div>
            <a href='About'>About</a>
            </div>
            <div>
            <a href='Services'>Service</a>
            </div>
            <div>
            <a href='Skills'>Skills</a>
            </div>
            <div>
            <a href='Project'>Project</a>
            </div>
            <div>
            <a href='contact'>contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar