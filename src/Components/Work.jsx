import React from 'react';
import ytb from '../Components/youtube_2111748.png'
import tdo from '../Components/checklist-1614702_640.png'

function Work() {
    
  return (
    <>
    <div  id="work"  className="abt">
      <hr style={{  width: '10%' }} />
      <span className="box" >
      <p>My Work</p> 
      </span>
      
      <hr style={{  width: '60%' }} />
      </div>
      <div  className="work" >
        <div className="card">
        <img src={ytb} alt="" style={{ width: '80px' }}  /> 
        <div className="points">
        <p> <br /> Front-end </p>
        </div>
        </div>
        <p>
            <ul>  1)Front-end clone of Youtube <br /> 2)All Pages and features built using React,Redux. <br />
             3) Firebase Authentication</ul>
        </p>

        <div className="card">
        <img src={tdo} alt="" style={{ width: '90px' }}  /> 
        <div className="points">
        <p> <br /> Full-Stack App </p>
        </div>
        </div>
        
        <p>
            <ul> 1) A full stack Goal Setting app <br />2)User Authentication <br />3) Mongodb as database <br /> 4) MERN stack </ul>
        </p>
     

      </div>
    </>
  )
}

export default Work