//import { element } from 'prop-types';
import React, {useState} from 'react'
//import { ReactDOM } from 'react-dom';


export default function TextForm(props) {
    
  
    const handleclick =() =>{
     //   console.log("Uppercase was Clicked!" + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to Uppercase","success");
    }

    const handlechange =(event) =>{
     //   console.log("Event changed!")
        setText(event.target.value)
    }

    const handlelowclick =() =>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showalert("Converted to Lowercase","success");
    }

    const handleclear =() =>{
        let newtext = '';
        setText(newtext)
        props.showalert("Text Cleared","success");
    }

    const copytext =() =>{
        let  copytext = document.getElementById('mybox');
        copytext.select();
        copytext.setSelectionRange(0,9999 );
        navigator.clipboard.writeText(copytext.value)
        document.getSelection().removeAllRanges()
        props.showalert("Copied to Clipboard","success");
        
        
    }


    
     



   
    const  [text,setText] = useState('');
  return (
      <div>
    <div className='container'style={{color:props.mode === 'dark'?'white':'black'}}>  
    <div className='container' >
                  
                    <div className="mb-3">
                        <h1  className="form-label mb-4">{props.heading} </h1>
                        <textarea className="form-control" id="mybox" rows="5" value={text} onChange={handlechange} style={{backgroundColor:props.mode === 'dark'?'gray':'white',color:props.mode === 'dark'?'white':'black'}}></textarea>
                    </div>
                    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleclick}>Change to Uppercase

                    </button>
                    <button disabled={text.length===0} className='btn btn-success mx-2 my-2' onClick={handlelowclick}>Change to Lowercase</button>
                    <button disabled={text.length===0}className='btn btn-danger mx-2 my-2' onClick={handleclear}>Clear Text</button>
                    <button disabled={text.length===0}className='btn btn-info mx-2 my-2' onClick={copytext}>Copy Text to Clipboard</button>
                    {/*<button className='btn btn-info mx-2' onClick={translate}>Translate Text</button>*/}
    </div>
    <div className="container my-2">
            <h1>Your text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</b></p>
            <h2>Preview </h2>
            <p>{text.length>0?text:"Enter Something in the TextBox Area"}</p>
    </div>

    </div>
    </div>
  )
}

