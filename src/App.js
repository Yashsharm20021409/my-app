import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // state
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // to change color of background as well
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };

  // state
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    // this is the initial position of jsx fragment
    <>
    {/* <Router> */}
      {/* this is actually we are passing the props to chnage something manully by user */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <TextForm heading="Enter the Text to analyze Below" mode={mode} showAlert={showAlert}/>
        <About /> */}
        {/* <Routes> */}
          {/* exact path jise react exact match kre na ki partial matching */}
          {/* <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/" */}
            {/* // element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
              />
            {/* } */}
          {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
    // above closing tag is the final position of jsx fragment
  );
}

export default App;
