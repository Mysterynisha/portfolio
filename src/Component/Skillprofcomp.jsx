import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Skillprofcomp = ({prof}) => {
  return (
    <div>
    
    
    <div style={{ width: 200, height: 200 }}>
  <CircularProgressbar value={prof.percentage} text={`${prof.percentage}%` }/>
   <h3>{prof.skills}</h3>
</div>

    </div>
  )
}

export default Skillprofcomp