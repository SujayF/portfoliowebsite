import React from 'react'
// import profilepic from '../Components/IMG_0822-removebg-preview.jpeg'
import {BsGlobe2} from 'react-icons/bs';
import heroimage from '../Components/heroimage.svg'
import { Typewriter } from 'react-simple-typewriter'




function Image() {
    
   
  return (
    <>
    <div className='ppic' >
        <div className='Location' >
          <div className="loc">
          <p>Located in INDIA</p>
          </div>
          <div className="globe">
          <BsGlobe2 className='icon'/>
          </div>
        </div>
        <div className='hero' >
        {/* <img  className='picture' src={profilepic} alt="profilepic" style={{ ,height:'200px',border: '1px solid',
  borderRadius: '15%',boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }} /> */}
        <p className="image" > <br />
        Welcome , I am  <p style={{   fontWeight:'bolder' ,alt:'',display:'inline'}} >Sujay.</p>  <br/>
        Your Friendly Neighbourhood  <br /> <span > D<Typewriter 
            words={['eveloper!', 'esigner!']}
            loop={Infinity}
            /> 
             </span>
            </p>
        {/* <p className='placeholder' >I want to fully utilize my skills and make significant contributions to the organization and improve myself <br /> in the meanwhile.</p> */}
        </div>
      <div className='heroimagephoto' >
      <img src={heroimage} alt="" style={{height:'400px',paddingBottom:'50px'}} />
      </div>

    
    </div>
    <div className='quote' >
        <p style={{textAlign:'center'}} >"It is never too late <br /> to be  what you could have been"</p>
        <hr style={{marginTop:'50px',width:'80%'}} />
      </div> 
  </>
  )
}

export default Image