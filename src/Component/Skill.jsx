import React from 'react';
import Skillcomponent from './Skillcomponent';
import Skillprofcomp from './Skillprofcomp';
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

const Skill = () => {
  let skildata=[
    {
      name:"HTML",
      range:90,
      icon: <TiHtml5/>
    },
    {
      name:"CSS",
      range:70,
      icon:<FaCss3/>
    },
    {
      name:"Javascript",
      range:70,
      icon:<TbBrandJavascript/>
    },
    {
      name:"React.js",
      range:50,
      icon:<FaReact/>
    }
  ]

  const profskill = [
    {
      skills: "Creativity",
      percentage: 90
    },
    {
      skills: "Communication",
      percentage: 50
    },
    {
      skills: "Team Spirit",
      percentage: 60
    }
  ];

  return (
    <div className='skill'>
      <h1>My <span>Skill</span></h1>
      <div>
        <div>
          <h2><u>Technical Skills</u></h2>
        </div>
        {
          skildata.map((item, key) => (
            <Skillcomponent items={item} />
          ))
        }
      </div>
      <div>
        <div>
          <h2><u>Professional Skills</u></h2>
          {
            profskill.map((indx, key) => (
              <Skillprofcomp  prof={indx} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skill;
