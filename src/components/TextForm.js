import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('UpperCase was Clicked '+text)
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowCase = () =>{
    let newText = text.toLocaleLowerCase();
    setText(newText)
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
  const [text, setText] = useState("");
  //   text = "This is me" wrong way to change
  //   setText("Set Your Text"); //right way
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="emyBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowCase}>Convert To LowerCase</button>

        {/* Exercise anthing you want to create*/}
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear All</button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        {/* text.split ek array dega words ka */}
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        {/* 0.008 sec to read one word*/}
        <p>{0.008 * text.split(" ").length} Minutes to Read </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
