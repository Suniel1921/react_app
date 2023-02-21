import React, {useState} from "react";

const TextForm = (props) => {

    const handleUpClick = ()=>{
        // console.log("UPPERCASE was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = ()=>{
        let LowerText = text.toLowerCase();
        setText(LowerText)
    }

    const handleOnChange = (event)=>{
        // console.log("onChange was clicked !!!");
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    
  return (
    <>
      <div className="container my-5">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-4 my-3" onClick={handleUpClick}>Conver to UpperCase</button>
        <button className="btn btn-secondary mx-4 my-3" onClick={handleLowerClick}>Conver to LowerCase</button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p> In {0.008 * text.split(" ").length} Minutes You Can Read This All Text </p>
        <h4>Preview of Your Text</h4>
        <p>{text}</p>
      </div>

    </>
  );
};

export default TextForm;
