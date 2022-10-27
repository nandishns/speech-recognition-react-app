import React from "react";

export default function Contact() {
  return (
    <>
      <section
        className="contact-us"
        id="contact-us"
        style={{ backgroundColor: "rgb(7 25 47)" }}
      >
        <div className="container ">
          <h1 className="h1 fw-bold p-5 text-info text-center">Contact Me</h1>
        </div>
        <div
          className="container d-flex justify-content-around p-2"
          id="contact"
        >
          <div className="container mt-1 pt-2">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_in4cufsz.json"
              background="transparent"
              speed={1}
              style={{ width: 300, height: 300 }}
              loop=""
              autoPlay=""
            />
          </div>
          {/* form */}
          <div className="container">
            <form
              action="https://formspree.io/f/moqbloye"
              id="contact_form"
              className="mb-5"
              style={{
                boxShadow: "rgb(246, 246, 246, 0.35) 0px 5px 15px",
                margin: 10,
                padding: 20,
                borderRadius: 10,
              }}
              method="POST"
            >
              <div className="">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-info"
                >
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  required=""
                  placeholder=""
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-info"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  required=""
                  placeholder="name@example.com"
                />
              </div>
              <label htmlFor="exampleDataList" className="form-label text-info">
                Subject
              </label>
              <input
                className="form-control"
                name="subject"
                list="datalistOptions"
                id="exampleDataList"
                required=""
                placeholder=""
              />
              <datalist id="datalistOptions">
                <option value="Suggestion/Feedback/others"></option>
              </datalist>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label text-info"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <input type="submit" className="btn btn-info " />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
