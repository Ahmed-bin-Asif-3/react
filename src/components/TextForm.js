import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState('Enter The Text ');
  // setText("text2");
  const handleUpClick = ()=>{
    // console.log("handle  clicks" + text);
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLowClick = ()=>{
    // console.log("handle  clicks" + text);
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleClearClick = ()=>{
    // console.log("handle  clicks" + text);
    let clearText = "";
    setText(clearText);
    props.showAlert("Text Cleared", "success");
  }
  // const handleCopyClick = () => {
  //   // Assuming `textToCopy` is the text you want to copy. You might need to get this from somewhere.
  //   let textToCopy = text;
  
  //   navigator.clipboard.writeText(textToCopy)
  //     .then(() => {
  //       console.log('Text copied to clipboard');
  //       props.showAlert("Text Copied", "success");
  //     })
  //     .catch(err => {
  //       console.error('Failed to copy text: ', err);
  //       props.showAlert("Failed to copy text", "error");
  //     });
  // }
  // const handlePasteClick = () => {
  //   navigator.clipboard.readText()
  //       setText(prevText => text + prevText);
  //       console.log('Pasted text:', text);
  // }
  
  const handleOnChange = (event)=>{
    // console.log("handle  clicks");
    setText(event.target.value);
  }
  const handleExtraSpaces = ()=>{
    // console.log("handle  clicks");
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Extra Spaces Removed ", "success");
  }
  return (
     <>
     <div className="row justify-content-center">
       <div className="col-8">
           <div className="mb-3">
             <h1 style={{color: props.mode==='light'?'#000':'#fff'}}>{props.heading}</h1>
           </div>
           <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" 
             style={{backgroundColor: props.mode==='light'?'#fff':'#000', color: props.mode==='light'?'#000':'#fff'} } rows="5"></textarea>
           </div>
           <div className="mb-3">
             <button type="submit" onClick={handleUpClick} className="btn btn-primary mb-3">
               To Uppercase 
             </button>
             <button type="submit" onClick={handleLowClick} className="btn btn-primary ms-3 mb-3">
               To Lowercase
             </button>
             <button type="submit" onClick={handleExtraSpaces} className="btn btn-primary ms-3 mb-3">
               Remove Spaces
             </button>
             {/* <button type="submit" onClick={handleCopyClick} className="btn btn-primary ms-3 mb-3">
               Copy
             </button>
             <button type="submit" onClick={handlePasteClick} className="btn btn-primary ms-3 mb-3">
               Paste
             </button> */}
             <button type="submit" onClick={handleClearClick} className="btn btn-primary ms-3 mb-3">
               ClearAll
             </button>
           </div>
       </div>
     </div>
     <div className="row justify-content-center mt-4">
       <div className="col-8">
         <h2>Text Suumary</h2>
         <p>{text.split(" ").length} words, {text.length} charters</p>
         <p>{0.008 * text.split(" ").length}minutes read</p>
         <h3 className="mt-4">Preview</h3>
         <p>{text}</p>
       </div>
     </div>
     </>
  );
}
