import React from 'react'

const Home = () => {
  return (
    <div className='home'>
        <div>
           <div className='headings'>
            <h2>Hello, Its Me</h2>
            <h1>Nisha Gupta</h1>
            <h2>And I'm a</h2>
           </div>
            <div className='para'>
                <p>I am a web Designer with experience for over
                    3 year,expertise is to create and website <br/>design,
                    Frontend design,and  many more.....
                </p>
            </div>
        </div>
        <div className='home-img'>
            <img src='profile.jpeg' alt='default'></img>
        </div>
    </div>
  )
}

export default Home