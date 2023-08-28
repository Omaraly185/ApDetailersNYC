import React from "react";
import "./NetflixReel.scss";
import car1 from "./carPictures/car1.jpg";
import car2 from "./carPictures/car2.jpg";
import car3 from "./carPictures/car3.jpg";
import car4 from "./carPictures/car4.jpg";
import car5 from "./carPictures/car5.jpg";
import car6 from "./carPictures/car6.jpg";
import car7 from "./carPictures/car7.jpg";
import car8 from "./carPictures/car8.jpg";
import car9 from "./carPictures/car9.jpg";
import car10 from "./carPictures/car10.jpg";
import car11 from "./carPictures/car11.jpg";
import car12 from "./carPictures/car12.jpg";
import car13 from "./carPictures/car13.jpg";
// import car14 from "./carPictures/car14.jpg";
// import car15 from "./carPictures/car15.jpg";
// import car16 from "./carPictures/car16.jpg";
import car17 from "./carPictures/car17.jpg";
import car18 from "./carPictures/car18.jpg";

const NetflixReel = () => {
  return (
    <div>
      <h1>Our Work</h1>
      <div className="wrapper">
        <section id="section1">
          <a href="#section3" className="arrow__btn">
            ‹
          </a>
          <div className="item">
            <img src={car1} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car2} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car3} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car18} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car17} alt="Describe Image" />
          </div>
          <a href="#section2" className="arrow__btn">
            ›
          </a>
        </section>
        <section id="section2">
          <a href="#section1" className="arrow__btn">
            ‹
          </a>
          <div className="item">
            <img src={car4} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car5} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car6} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car7} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car8} alt="Describe Image" />
          </div>
          <a href="#section3" className="arrow__btn">
            ›
          </a>
        </section>
        <section id="section3">
          <a href="#section2" className="arrow__btn">
            ‹
          </a>
          <div className="item">
            <img src={car9} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car10} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car11} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car12} alt="Describe Image" />
          </div>
          <div className="item">
            <img src={car13} alt="Describe Image" />
          </div>
          <a href="#section1" className="arrow__btn">
            ›
          </a>
        </section>
      </div>
    </div>
  );
};

export default NetflixReel;
