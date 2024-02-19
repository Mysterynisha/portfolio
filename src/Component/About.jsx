import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div>
       <img src='profile.jpeg' alt='default' className='img1'></img>
        </div>
        <div className='abspan'>
           <h1 className='ah'>About <span>Me</span> </h1>
           <h2  className='ah'>Front-end Developer!</h2>
         <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum eum, et dicta tempora reprehenderit <br/>corrupti quasi? Atque blanditiis ut laudantium, a eius dicta provident, quisquam sint inventore consequuntur dolorem.
           Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Mollitia harum eum, et dicta tempora<br/> reprehenderit corrupti quasi? Atque blanditiis ut laudantium, a eius dicta provident, quisquam sint inventore consequuntur dolorem.
            </p>
           <button className='btn'>More About Me</button>
        </div>
    </div>
  )
}

export default About