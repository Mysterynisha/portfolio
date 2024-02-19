import React from 'react'

import Blogcomponent from './Blogcomponent';

const Blog = () => {
  return (
    <div className='blog'>
      <div><h1 className='service'>My <span>Services</span></h1></div>
      <div className='blog_card'>
      <Blogcomponent/>
      <Blogcomponent/>
      <Blogcomponent/>
      <Blogcomponent/>
            </div>
            </div>
  )
}

export default Blog