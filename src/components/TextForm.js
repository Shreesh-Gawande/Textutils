import React,{useState} from 'react'

export default function TextForm(props) {
   const handleOnChange = (event)=>{
    console.log("To uppercase");
    setText(event.target.value);
  }
  const handleToUpercase = ()=>{
    console.log("The text has been converted to uppercase");
    let newText=Text.toUpperCase();
    setText(newText);
  }
  const handleClear= ()=>{
    setText("");
  }
  const [Text, setText] = useState("Enter Text here");
  
  return (
    <>
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3" >
    <textarea className="form-control"  value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'greay':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <div className="button btn btn-primary my-3" onClick={handleToUpercase}>Change to Uppercase</div>
  </div>
  <div className="button btn btn-primary my-3" onClick={handleClear}>Clear</div>
  
  <div className="container my-3">
    <h2>Your text summary is</h2>
    <p> {Text.split(" ").length} words and {Text.length} characters</p>
  </div>
  </>
  )
}
