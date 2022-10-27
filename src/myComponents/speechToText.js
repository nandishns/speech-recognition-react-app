import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SpeechToText = () => {

    const [text, setText] = useState('');
    
    const {
      transcript,
      
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    
     
    // setText({transcript});
    
    const handleUpcase=()=>{
        console.log(text)
        let txt = transcript;

        setText(txt.toUpperCase());

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopy = () => {
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value); }


    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  
    return (
        <>
    <section className='container m-1 p-2'>
      
<div class="m-3">
    <h1 className="h1 m-3 text-center p-3">Speech To Text</h1>
  
  <textarea class="form-control m-4  p-3" id="myBox" value={transcript} onChange={handleOnChange} rows="4"></textarea>
</div>



<div className="container text-center m-4">
<button type="button" className="btn btn-warning  m-3"onClick={SpeechRecognition.startListening}>Start</button>
<button type="button" class="btn btn-warning m-3" onClick={SpeechRecognition.stopListening}>Stop</button>
<button type="button" class="btn btn-warning  m-3" onClick={resetTranscript}>Reset</button>
<button type="button" class="btn btn-warning" onClick={handleCopy}>Copy Text</button>
</div>
</section>   
        
        <section className="section mt-5 p-4 ">
          <h1 className="h1 fw-bold text-center p-4">FAQ's</h1>
        <div className="container">
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How does speech-to-text works ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ol>
              <li>Just keep your mic ready for speech and click on Start button above.</li>
              <li> Speak whatever you want to be typed.</li>
              <li>This online speech recognition system will convert your speech into text.</li>
              <li>Your speech will be texted in your language writing system.</li>
              
              <li>You can copy or save typed text for further use.</li>
            </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Instruction for Best Result
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ol>
              <li>Use the high quality mic for input.</li>
              <li>Where you want to use should be a calm place, other background voices may effect the results.</li>
              <li>Speak clearly and slowly, so system can understand what you are speaking.</li>
              <li>Your pronunciations should be accurate. (Remember that computer never produce wrong result, if your input is correct then output also correct.)</li>
            </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What I need to use speech to text ?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p> You need a Microphone and good internet connection for use online speech-to-text service.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Applications of Speech Recognition
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <ol>
        <li>Car systems - Some of the most recent car models offer natural-language speech recognition, allowing the driver to use full sentences and common phrases in controlling car functions. </li>
        <li> Healthcare - In the health care sector, speech recognition can be implemented in front-end or back-end of the medical documentation process.</li>
        <li> Military - Speech recognizers have been operated successfully in fighter aircraft, with applications including setting radio frequencies, commanding an autopilot system, setting steer-point coordinates and weapons release parameters, and controlling flight display.</li>
        <li>Smartphones - Speech is used mostly as a part of a user interface, for creating predefined or custom speech commands.</li>
        <li> Language learning - Speech recognition can be useful for learning language. It can teach proper pronunciation, in addition to helping a person develop fluency with their speaking skills.</li>
       </ol>
      </div>
    </div>
  </div>
</div>
</div>

        </section>
        </>
    );
  };
  export default SpeechToText;