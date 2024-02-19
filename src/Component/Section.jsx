import React from 'react'
import { CgMailForward } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Section = () => {
  return (
    <div className='section'>
     <div className='contact'>
     <center> <h2>Contact <span>Me</span></h2></center>
      <b>Let's Work Together</b>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, eum! Quaerat cumque aliquid maiores qui veritatis voluptas atque dicta molestias recusandae nam? Provident quasi doloribus nihil consectetur quae. Reiciendis, minus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus blanditiis natus omnis, amet asperiores deserunt. Consequatur quia tempora excepturi voluptates, labore sed facere ea officiis voluptatibus quas numquam dicta obcaecati.
      </p>
      <h2><CgMailForward  size={30}/> contact@gmail.com</h2>
       <h2><FiPhoneCall size={30}/> 0123456789</h2>
       <div>
       <h1>
       < FaFacebook /> 
       < FaTwitter />
       <FaInstagram />
       <FaLinkedinIn />

       </h1>
       </div>
     </div>

     <div className='form'>
        <form >
            
            <input type='text' placeholder='Enter Your Name'></input>
            <br/>
            <input type='email' placeholder='Enter Your Email'></input>
            <br/>
            <input type='text' placeholder='Enter Your Subject'></input>
            <br/>
            <textarea placeholder='Enter Your Message'></textarea>
            <br/>
            <button>Submit</button>
        
        </form>
     </div>
    </div>
  )
}

export default Section