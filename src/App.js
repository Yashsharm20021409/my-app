import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      // to change color of background as well
      document.body.style.backgroundColor = '#042743'
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    // this is the initial position of jsx fragment
    <>
      {/* this is actually we are passing the props to chnage something manully by user */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze Below" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
    // above closing tag is the final position of jsx fragment
  );
}

export default App;
