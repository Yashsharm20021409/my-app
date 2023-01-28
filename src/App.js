import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    // this is the initial position of jsx fragment
    <>
      {/* this is actually we are passing the props to chnage something manully by user */}
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        {/* <TextForm heading="Enter the Text to analyze Below"/> */}
        <About />
      </div>
    </>
    // above closing tag is the final position of jsx fragment
  );
}

export default App;
