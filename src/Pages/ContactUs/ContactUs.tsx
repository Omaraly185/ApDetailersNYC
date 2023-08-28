import React from "react";
import "./ContactUs.scss";
import { useState } from "react";
import AP from "./AP.png";
import ny from "./ny.png";
import Instgram from "./Instagram.svg";
import FaceBook from "./Facebook.svg";
import Tiktok from "./Tiktok.svg";
import Reddit from "./Reddit.svg";
import Twitter from "./Twitter.svg";
import { NavigationType } from "react-router-dom";
import Header from "../../Components/Header";

function ContactUs() {
  const imgStyle = {
    marginTop: -25,
  };
  const imgeStyle = {
    maxWidth: 25,
  };
  return (
    <>
      <div className="myCustomHeight backGround-Img">
        <Header />
        <div className="Section2">
          <div className="controller-img">
            <img src={AP} className="ContactImg" />
          </div>
          <div className="Bro">Find Us On Social Media</div>
        </div>
        <div className="Section2">
          <div className="games">
            <a
              href="https://www.instagram.com/applyingpressurenyc/"
              className="game-link instagram"
            >
              <div className="svgLogo">
                <img style={imgeStyle} src={Instgram} />
              </div>
              <div style={imgStyle}>Instagram</div>
            </a>
            <a
              href="https://www.facebook.com/Applyingpressurenyc"
              className="game-link facebook"
            >
              <div className="svgLogo">
                <img max-width="25px" src={FaceBook} />
              </div>
              <div style={imgStyle}>Facebook</div>
            </a>
            <a
              style={{ minWidth: "292px" }}
              href="https://www.tiktok.com/@applyingpressurenyc"
              className="game-link tiktok"
            >
              <div className="svgLogo noboxing">
                <img max-width="25px" src={Tiktok} />
              </div>
              <div className="boxing" style={imgStyle}>
                TikTok
              </div>
            </a>
            <a
              href="https://twitter.com/APpressurenyc"
              className="game-link twitter"
            >
              <div className="svgLogo">
                <img max-width="25px" src={Twitter} />
              </div>
              <div style={imgStyle}>Twitter</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
