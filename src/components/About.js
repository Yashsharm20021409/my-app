import React, { useState } from "react";

export default function About() {
  // it is basically a object used to add style(css)

  //   const myTheme = {
  //     color:'white',
  //     backgroundColor:'black'
  //   }

  const [myTheme, setMyTheme] = useState({
    color: "black",
    backgroundColor:'white'
    // backgroundColor: "#6674cc",
  });

  // to check initially color of Theme
//   let newData;
//   if(myTheme.color === 'white'){
//       newData = 'Enable light Mode'
//     }
//     else{
//         newData = 'Enable Dark Mode'
//     }
//   const [btnText,setBtnText] = useState(newData);
  const [btnText,setBtnText] = useState("Enable Dark Mode");
    
    // toggle button text with theme
  const toggleStyle = ()=>{
    if(myTheme.color === 'black'){
        setMyTheme({
            color: "white",
            backgroundColor: "black",
            border:'1px solid white'
        })
        setBtnText("Enable Light Mode")
    }else{
        setMyTheme({
            color: "black",
            backgroundColor:'white'
            // backgroundColor: "#6674cc",
        })
        setBtnText("Enable Dark Mode")
    }
  }



  return (
    <div className="container" style={myTheme}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myTheme}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myTheme}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myTheme}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myTheme}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myTheme}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myTheme}
          >
            <div className="accordion-body" style={myTheme}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myTheme}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myTheme}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myTheme}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>
        {btnText}
      </button>
    </div>
  );
}
