import React from 'react'

const Skillcomponent = ({items}) => {
  return (
    <div className='range1'>
      
    <h1>{items.icon}</h1>
    <div style={{display:"flex" ,justifyContent:"space-between",width:"100%"}}><h3>{items.name}</h3><h3 style={{color:"red"}}>{items.range}</h3></div>
    <input type='range'value={items.range} ></input>
    
    
    </div>

    
  )
}

export default Skillcomponent