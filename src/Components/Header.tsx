import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import $ from "jquery";

function Header() {
  $(document).ready(function () {
    $("li").slideDown();
    $(".menu")
      .off("click")
      .on("click", function () {
        if (window.innerWidth < 750) {
          $("li").slideToggle("50");
        }
      });
  });

  $(window)
    .off("resize")
    .on("resize", function () {
      if (window.innerWidth > 750) {
        $(document).ready(function () {
          $("li").slideDown();
        });
      }
    });
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          AP
        </Link>
        <div
          className={
            "active"
            // `${isOpen ? 'toggle':'active'}`
          }
        >
          <ul className="defaultFont">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Book_Now">Book</Link>
            </li>
            <li>
              <a href="/Monthly">Monthly</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="/ContactUS">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <button
        className="menu"
        id="toggleButton"
        // onClick={() => {
        //       setIsOpen(!isOpen);
        //     }}
      >
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </button>
    </>
  );
}

export default Header;
