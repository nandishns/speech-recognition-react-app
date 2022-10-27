import React, {useState} from 'react'
import { useSpeechSynthesis } from "react-speech-kit";

export default function TextToSpeech() {
    
    const [text, setText] = useState('');
    
    const { speak } = useSpeechSynthesis();

    const handleUppercase=()=>{
        let txt = text.toUpperCase();
        setText(txt);


    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleLowercase=()=>{
        let txt2 = text.toLowerCase();
        setText(txt2);   
    }
    const clearText=()=>{
        let newtext='';
        setText(newtext);

    }
    const textToSpeech=()=>{
        const utterance = new SpeechSynthesisUtterance(text);
        

       
speechSynthesis.speak(utterance);
        
        
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // showAlert("Extra spaces removed!", "success");
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        // showAlert("Copied to Clipboard!", "success");
    }
   
  return (
    <>
    
    <div class="container mb-3">
    <h1 className="text-center h1 m-3 p-4">Text To Speech</h1>
  
  <textarea class="form-control" id="myBox" value={text} onChange={handleOnChange} rows="5"></textarea>
</div>



<div className="container  text-center p-2  ">
<button type="button" class="btn btn-warning" onClick={textToSpeech}>Read Aloud</button>

<button type="button" className="btn btn-warning m-2  "onClick={handleUppercase}>Convert to Upper Case</button>
<button type="button" class="btn btn-warning m-2 " onClick={handleLowercase}>Convert to lower case</button>
<button type="button" class="btn btn-warning m-2 " onClick={clearText}>Clear Text</button>
<button type="button" class="btn btn-warning m-2" onClick={handleCopy}>Copy</button>
<button type="button" class="btn btn-warning m-2" onClick={handleExtraSpaces}>Remove extra spaces</button>



</div>
<div className="container my-3">
    <h3>Your Text Summary</h3>
    <p> <span className='text-danger fw-semibold'> {text.split(" ").length-1} </span> words ,  <span className='text-danger fw-semibold'>{text.length} </span>characters</p>
    <p>  <span className='text-danger fw-semibold'> {0.008*( text.split(" ").length-1)} </span>minutes read</p>
</div>
<div className="container mb-5 pb-5">
    <h3 className="h3">
        Preview
    </h3>
    <p> <span className='text-primary fw-semibold'>{text.length>0?text:"Enter something in the textbox above to preview it here"}</span></p>
</div>
    
    </>
  )
}
