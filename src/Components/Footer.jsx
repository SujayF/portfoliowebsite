import React from 'react'
import linkedin from '../Components/linkedin_3536505.png'
import insticn from '../Components/instagram_5968776.png'
import ytb from '../Components/youtube_2111748.png'



function Footer() {
  return (
    <>
    <div className='footer' >
        <p>Version <br />1.0 </p>
        <p  > <a href="https://storyset.com/work" style={{color:'white'}} >Work illustrations by Storyset</a> </p> 
      <div>
        <p>Socials</p>
      <div className="scl-btns">
      <a href="https://www.instagram.com/sujay_f/">
      <img src={insticn}  alt=""  style={{ width: '30px' }} />
      </a>

      <a href="https://www.linkedin.com/in/sujayfarkade/">
        <img src={linkedin} alt="" style={{ width: '30px' }} />
      </a>

      <a href="https://www.youtube.com/@sujaytunes">
        <img src={ytb} alt="" style={{ width: '35px' }}  />
      </a> 
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer


// SAJYm1ElrNbw1u8R