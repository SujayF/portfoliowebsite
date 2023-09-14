import {BiLogoMongodb,BiLogoReact,BiLogoNodejs,BiLogoPython} from 'react-icons/bi'
import{SiMysql,SiCss3,SiJavascript,SiAmazonaws} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import{TbBrandCpp} from 'react-icons/tb'
import {BsGit} from 'react-icons/bs'
import {FiFigma} from 'react-icons/fi'


function About() {

  return (
    <>
      <div  id="anchor"  className="abt">
      <hr style={{ color: 'black', width: '60%' }} />
      <span className="box" >
      <p >About Me</p> 
      </span  >
      <hr style={{ color: '#black', width: '10%' }} />
      </div>
      <div   className="text"  >
      <p style={{fontWeight:'normal'}} >Currently A Final Year IT Student Based In <p style={{color:'black',alt:'',display:'inline'}} >PUNE</p> , With a Keen Interest In <br /> Web-Technologies And Problem Solving With a relentless passion for  <br /> coding, an insatiable curiosity for emerging technologies.</p> 
      <h3 className='effect' >Technologies</h3>
      </div>
      <div className="tech">
       <BiLogoMongodb className='tech-stack' />
       <BiLogoReact className='tech-stack'/>
       <BiLogoNodejs className='tech-stack'/>
       <SiMysql className='tech-stack'/>
       <AiFillHtml5 className='tech-stack'/>
       <SiCss3 className='tech-stack'/>
       <SiJavascript className='tech-stack'/>
       <SiAmazonaws className='tech-stack'/>
       <TbBrandCpp className='tech-stack'/>
       <BsGit className='tech-stack'/>
       <FiFigma className='tech-stack'/>
       <BiLogoPython className='tech-stack'/>
      </div>
    </>
    
  );
}

export default About;
