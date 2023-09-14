import React from 'react'
import "../App.css"
import logo from '../Components/Frame 2.jpg'
import { Link } from 'react-scroll'

function Navbar() {
 
  return (
    <div className='Header' >
         <span className='Name' >
         <img src={logo} alt="" style={{width: '120px'}}  />
         
         </span>
    <span className='List' >
      <ul>
      <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>About</Link></li>

         <li><Link activeClass="active" className="test6" to="work" spy={true} smooth={true} duration={500}>Work</Link></li>
         <li><Link activeClass="active" className="test6" to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
      </ul>
      </span>
    </div>
  )
}

export default Navbar
