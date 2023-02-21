import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title="Anil sharma" aboutText="About Us" />
    <TextForm heading="Enter the text to analyze"/>
    {/* <About/> */}



    </>
  );
}

export default App;
