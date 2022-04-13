
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
import About from './components/About';
//import About from './components/About';


import{
  BrowserRouter as Router,
  Switch,
  Route
  

}from "react-router-dom";

//let name="Pranesh";
function App() {

  const [mode,setmode] = useState('light');
  const[alert,setalert] = useState(null);

  /*
  const removebdyclasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-info')

  }*/
  const togglemode =() =>{
  //  removebdyclasses();
 //   document.body.classList.add('bg-'+cls)
      if(mode === 'light'){
        setmode('dark')
        document.body.style.backgroundColor = '#042743';
        showalert("Dark mode has been enabled","success");
       // document.title = "Text Utils - Dark  Mode"
      }else{
        setmode('light')
        document.body.style.backgroundColor = "white";
        showalert("Light mode has been enabled","success");
        //document.title = "Text Utils - Light Mode"
      }

      if(mode === 'about'){
        document.title = "Text Utils - About";
      }
    }

      const showalert =(message, type) =>{
          setalert({
            msg:message,
            type:type
          })

          setTimeout(() =>{
            setalert(null);

          },1500)
      }
  
  return (
    <>
          <Router>
          <Navbar title="TextUtility" abouttext = "About us!" mode={mode} toggle={togglemode} />
          < Alert alert = {alert}/>
       
          <div className="container my-3">
                
                <Switch>
                            <Route exact path='/about'>
                            
                            <About mode ={mode}/>
                            </Route>
                            <Route Route exact path='/'>
                            {<TextForm heading = "Enter Text to Change" mode={mode} showalert={showalert}/>}
                            </Route>
                </Switch>
        </div>
 
     </Router>
    </>
    
  );
  
  }
export default App;
