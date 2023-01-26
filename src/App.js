import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    // this is the initial position of jsx fragment
    <>
      {/* this is actually we are passing the props to chnage something manully by user */}
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
    </>
    // above closing tag is the final position of jsx fragment
  );
}

export default App;
