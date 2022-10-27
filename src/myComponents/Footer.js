import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer className="bg-dark text-center text-white">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      
     
      {/* Twitter */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter" />
      </a>
      
      {/* Instagram */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://www.instagram.com/the__nandish"
        target="_blank"
        role="button"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://www.linkedin.com/in/nandish-n-s/"
        target="_blank"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      {/* Github */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://github.com/Nandish2021"
        target="_blank"
        role="button"
      >
        <i className="fab fa-github" />
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
   
    <p className="text-white">
    © 2022 Copyright  ● All rights reserved<br/>Made with ❣️ by Nandish
    </p>
  </div>
  {/* Copyright */}
</footer>

    </>
  );
}