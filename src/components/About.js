import React from 'react'

export default function About(props) {
    /*
    const [mystyle,setmystyle] = useState({
        color:'black',
        backgroundColor:'white'
      
    })
*/

    let mystyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
        
    }

    /*const[btntext,setbtntext] = useState("Set Enable Light mode")*/

    /*
    const togglestyle =() =>{
            if(mystyle.color === 'white'){
                setmystyle({
                    color:'black',
                    backgroundColor:'white',
                    border:'2px solid white'
                })
                setbtntext("Enable Dark Mode")
            }else{
                setmystyle({
                    color:'white',
                    backgroundColor:'black'
                })
                setbtntext("Enable Light Mode")
            }
    }

*/
    
  return (
      
    <div className='container' style={mystyle}>
        <h1 className='my-3'>About Us</h1>
                        <div className="accordion" id="accordionExample" style={mystyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                           TextUtils gives you a way to analzye your text and to use different methods on that Text.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            TextUtils is a free to use tool that provides instant character and word count
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Compatible with all Browsers</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                                This Software works in all kinds of Browsers.
                        </div>
                        </div>
                    </div>
                    </div>
                  
                    
                    
     </div>
    
  )
}
