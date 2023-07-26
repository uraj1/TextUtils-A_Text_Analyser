import React , {useState} from "react";

export default function TextForm(props) {

  const handleUpperclick = ()=>{

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLowerclick = ()=>{

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }

  const handleClearclick = ()=>{

    let newText = "";
    setText(newText);
    props.showAlert("The text is cleared!", "success");
  }


  const handleOnchange = (event)=>{
    
    setText(event.target.value);
  }

  const [text , setText] = useState("")
  return (
    <>
    <div className="container" style = {{color : props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" value = {text} onChange={handleOnchange} style = {{backgroundColor : props.mode === 'dark'?'black':'white' , color : props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick ={handleUpperclick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick ={handleLowerclick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick ={handleClearclick}>Clear</button>
    </div>

    <div className="container my-3"  style = {{color : props.mode === 'dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read your text</p>
      <h2>Preview</h2>
      <p>{text.length> 0? text : 'Enter something in the textbox to preview it here'}</p>
    </div>
    </>
  );
}
