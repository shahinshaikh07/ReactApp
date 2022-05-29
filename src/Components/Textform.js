import React, {useState} from 'react'
//import PropTypes from 'prop-types'

export default function Textform(props) {
    const [text, setText] = useState("");
    
const handleLoCLick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
}

const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
     props.showAlert("Converted to UpperCase!", "success");
}

const handleClearClick = () => {
    let newText = "";
    setText(newText);
     props.showAlert("Text Cleared!", "success");
}

const handleCopy = () => {
     navigator.clipboard.writeText(text); 
      props.showAlert("Text, Copied!", "success");
}

const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
props.showAlert("Extra spaces removed!", "success");
}

    


const handleOnChange = (event) => {
    setText(event.target.value) 
}
 let wordCount = text === "" ? "0" : text.trim().split(/\s+/).length;

  return (
   <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
       <h1 className='mb-4'>{props.heading}</h1>
       
<div className="mb-3">
    <textarea value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'#042743'}} placeholder='Enter your text here to analyze it' className="form-control" id="myBox" rows="8"></textarea>
</div>

{/* Buttons providing different functionalities */}

<button disabled={text.length===0} type="button" class="btn btn-primary mx-1 my-1" onClick={handleLoCLick}>Convert to Lowercase</button>
<button disabled={text.length===0} type="button" class="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
<button disabled={text.length===0} type="button" class="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
<button disabled={text.length===0} type="button" class="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text </button>
<button disabled={text.length===0} type="button" class="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>
<div className="container my-4"  style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h3>Preview</h3>
    <p>
        {text.length > 0 ? text : "Type something above to preview it here"}
      </p>
      <p>{wordCount} words and {text.length} characters
        </p>
        
</div>

   </div>
  )
}
