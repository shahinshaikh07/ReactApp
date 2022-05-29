import React, {useState} from 'react'
//import PropTypes from 'prop-types'

export default function Textform(props) {
const [text, setText] = useState("");
    
const handleLoCLick = () => {
    let newText = text.toLowerCase();
    setText(newText);
}

const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
}

const handleClearClick = () => {
    let newText = "";
    setText(newText);
}

const handleCopy = () => {}
const handleExtraSpace = () => {}
const handleOnChange = (event) => {
    setText(event.target.value) 
}

  return (
   <div className='container'>
       <h1 className='mb-4'>{props.heading}</h1>
       
<div className="mb-3">
    <textarea value={text} onChange={handleOnChange} placeholder='Enter your text here to analyze it' className="form-control" id="myBox" rows="8"></textarea>
</div>

{/* Buttons providing different functionalities */}

<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleLoCLick}>Convert to Lowercase</button>
<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text </button>
<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>
<div className="container my-4">
    <h3>Preview</h3>
    <p>
        {text.length > 0 ? text : "Type something above to preview it here"}
      </p>
</div>

   </div>
  )
}
