import React from "react";
import video1 from "./HomeVideo.mp4";
import "./home.scss";
import Button from "../../Components/Button";

function homeForm() {
  return (
    <div>
      <section className="content">
        <video autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
        <div className="parent">
          <div className="title">
            <h2>Applying</h2>
            <h1>Pressure</h1>
            <div className="tagline">
              <p>We wash and wax while you sit and relax!</p>
            </div>
            <Button />
          </div>
        </div>
      </section>
    </div>
  );
}

export default homeForm;
