import React from "react";
import { Link } from "react-router-dom";

export function Home(props) {
      
  
  return (
    <>
      <section
        style={{ backgroundColor: "#19447D", fontFamily: '"Lato", sans-serif' }} 
      >
        <center>
          {" "}
          <div className="p-0 m-0 ">
            <lottie-player
              src="https://assets2.lottiefiles.com/private_files/lf30_icgp2hvb.json"
              background="transparent"
              speed={1}
              style={{ width: 150, height: 150 }}
              loop=""
              autoPlay=""
            />
          </div>
        </center>
        <div className=" d-flex p-5" id="content">
          <div className="container " id="hide">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_M9p23l.json"
              background="transparent"
              speed={1}
              style={{ width: 300, height: 300 }}
              loop=""
              autoPlay=""
            />
          </div>
          <div
            className="container mt-4"
            style={{
              boxShadow: "rgba(246, 246, 246, 0.35) 0px 5px 15px",
              margin: 10,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h1 className="h1 text-info text-center">Welcome to &pi;hub</h1>
            <p className="text-warning p-4 m-4">
              This is React based app which converts Speech-to-text and
              Text-to-Speech.
              <br /> The speech to text system works with a speech recognition
              system; which recognizes your voice and convert it into text. It's
              much faster than conventional keyboard typing.
              <br /> <br /> Now, you can just plug in your microphone, start
              speaking and the speech texter will convert it into text. We bring
              this facility 100% free for you.
            </p>
          </div>
        </div>
        <div className="d-flex " id="flex-box">
          <div
            className="container"
            style={{
              boxShadow: "rgba(246, 246, 246, 0.35) 0px 5px 15px",
              margin: 10,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_yZN2SD.json"
              background="transparent"
              speed={2}
              style={{ width: 300, height: 300 }}
              loop=""
              autoPlay=""
            />
            <Link style={{ textDecoration: "none" }} to="/speechToText">
              <h4 className="text-white m-3 text-center p-2">Speech to text</h4>
            </Link>
          </div>
          <div
            className="container "
            style={{
              boxShadow: "rgba(246, 246, 246, 0.35) 0px 5px 15px",
              margin: 10,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <lottie-player
              src="https://assets2.lottiefiles.com/temp/lf20_25leAp.json"
              background="transparent"
              speed={1}
              style={{ width: 300, height: 300 }}
              loop=""
              autoPlay=""
            />

            <Link style={{ textDecoration: "none" }} to="/textToSpeech">
              <h4 className="text-white m-3 text-center p-2">Text to Speech</h4>
            </Link>
          </div>
          <div
            className="container"
            style={{
              boxShadow: "rgba(246, 246, 246, 0.35) 0px 5px 15px",
              margin: 10,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_5izMVu.json"
              background="transparent"
              speed={1}
              style={{ width: 300, height: 300 }}
              loop=""
              autoPlay=""
            />
            <Link style={{ textDecoration: "none" }} to="/assistance">
              <h4 className="text-white m-3 text-center p-2">
                Voice assistance
              </h4>
            </Link>
          </div>
        </div>
      </section>

      <center>
        <div className="container">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_uhzlqf6i.json"
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }}
            loop=""
            autoPlay=""
          />
        </div>
      </center>
    </>
  );
}
