import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const VoiceAssistance = () => {

    const [text, setText] = useState('');
    const commands = [
        {
          command: "How are you",
          callback: () => setText("I'm good, How are you?")
        },
        {
          command: 'shut up',
          callback: () => setText('I wasn\'t talking.')
        },
        {
          command: 'Who are you',
          callback: () => setText('I am you assistant !')
        },
        {
            command: 'Tell me a Joke',
            callback: () => setText('Hogole!')
          },
          {
            command: 'Hello',
            callback: () => setText('Hi there!')
          },
          {
            command: 'Hello',
            callback: () => setText('Hi there!')
          },
      ]
    const {
      transcript,
      
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition({ commands });

    
     
    // setText({transcript});
    
   
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClear=()=>{
      let res='';
      setText(res);
    }


    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  
    return (
        <>
    
<div class="m-3 container">
    <h1 className="h1 m-3 p-3 text-center">Voice Assistant</h1>
  
  <textarea class="form-control p-3 m-3" id="exampleFormControlTextarea1" value={transcript} onChange={handleOnChange} rows="4"></textarea>
</div>
<div className="container text-center ">
<button type="button" className="btn btn-warning  m-3"onClick={SpeechRecognition.startListening}>Start</button>
<button type="button" class="btn btn-warning m-3" onClick={SpeechRecognition.stopListening}>Stop</button>
<button type="button" class="btn btn-warning  m-3" onClick={resetTranscript}>Reset</button>

</div>

<div className='d-flex justify-center container m-5 '>
<div className="head"><h5 className="h5 m-3">Response</h5></div>
<div className="form-floating">
    
  <textarea className="form-control"  id="exampleFormControlTextarea1" rows="1" value={text}></textarea>
  <label htmlfor="floatingTextarea"></label>
</div>
 <div><button type="button" class="btn btn-warning m-3" onClick={handleClear}>Reset Response</button> </div>
</div>

        
        
        </>




    //   <div>
    //     <p>Microphone: {listening ? 'on' : 'off'}</p>
    //     <button onClick={SpeechRecognition.startListening}>Start</button>
    //     <button onClick={SpeechRecognition.stopListening}>Stop</button>
    //     <button onClick={resetTranscript}>Reset</button>
    //     <p>{transcript}</p>
    //   </div>
    );
  };
  export default VoiceAssistance;