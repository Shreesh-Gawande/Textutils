import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import { useState } from 'react';
//import About from './components/About';

function App() {
  const [mode,setMode]=useState("dark");
 const toggleMode = ()=>{
    if(mode==="light"){
      setMode ("dark");
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode ("light");
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
  <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
  {/* <About/> */}
  { <div className="container">
  <TextForm heading="Enter your text"/></div> } 
    </>
  );
}

export default App;
