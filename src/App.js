import React from "react";
import "./App.css";
import TextToSpeech from "./myComponents/textToSpeech";
import Footer from "./myComponents/Footer";
import SpeechToText from "./myComponents/speechToText";
import Navbar from "./myComponents/Navbar";
import Contact from "./myComponents/contact";
import VoiceAssistance from "./myComponents/assistance";
import { Home } from "./myComponents/home";
import { Route, Routes } from "react-router-dom";

function app() {
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route exact path="textToSpeech" element={<TextToSpeech />}>
          
        </Route>
        <Route exact path="/contact" element={<Contact />}>
          
        </Route>
        <Route exact path="/assistance" element={<VoiceAssistance />}>
          
        </Route>
        <Route exact path="/speechToText" element={<SpeechToText />}>
          
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default app;
