import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('UpperCase was Clicked '+text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase','success')
  };

  const handleLowCase = () =>{
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert('Converted to LowerCase','success')
  }

  const clearText = ()=>{
    setText('');
  }

  //   const handleOnChange = ()=>{
  //     console.log('Handle On Changed ')
  //   }

  // to make textField editable
  const handleOnChange = (event) => {
    // console.log('Handle On Changed ')
    setText(event.target.value);
  };


  // to remove extra space
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Extra Space Removed','success')
}

  // to copy text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    // to select entire text inside the myBox
    text.select();
    // copy(writeText) to clipboard
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copy to Clipboard','success')
}

  const [text, setText] = useState("");
  //   text = "This is me" wrong way to change
  //   setText("Set Your Text"); //right way

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowCase}>Convert To LowerCase</button>

        {/* Exercise anthing you want to create*/}
        <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear All</button>
        {/* to copy  */}
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        {/* to remove extra space */}
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3"style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        {/* text.split ek array dega words ka */}
        <p>{text.split(" ").filter((Element)=>{return Element.length !== 0}).length} Words and {text.length} characters</p>
        {/* 0.008 sec to read one word*/}
        <p>{0.008 * text.split(" ").filter((Element)=>{return Element.length !== 0}).length} Minutes to Read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
