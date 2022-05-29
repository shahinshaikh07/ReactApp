import React from 'react'

export default function Textform() {
const handleLoCLick = () => {}
const handleUpClick = () => {}
const handleClearClick = () => {}
const handleCopy = () => {}
const handleExtraSpace = () => {}

  return (
   <div className='container'>
       <h1 className='mb-4'>Enter the text to analyze below.</h1>
       
<div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleLoCLick}>Convert to Lowercase</button>
<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text </button>
<button type="button" class="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>
   </div>
  )
}
