import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Image from './Components/Image';
import Work from './Components/Work';
import Contact from './Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <link href="https://api.fontshare.com/v2/css?f[]=general-sans@500,601,600,400,700&display=swap" rel="stylesheet"/> 
      <Navbar/>
      <Image/>
      <About/>
      <Work/> 
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
