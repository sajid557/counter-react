import React, { useRef } from "react";
import { TweenMax } from "gsap";

import "./landingpage.css";

export default function Landing() {
  const item = useRef();
  return (
    <div className="landingpage">
      <div className="header">
        <div className="wrap">
          <div className="logo" id="logo">
            <a href="#" className="nav-link">
              logo
            </a>
          </div>
          <ul className="navbar" id="navbar">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                about us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                contact us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link login">
                login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="wrap">
          <div className="title-container" id="title-container">
            <div className="title">
              <h1>thor</h1>
              <p> prince of asgard, the god of thunder.</p>
              <a href="#" className="c2a">
                meet now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="wrap">
          <ul className="media" id="media">
            <li className="media-item">
              <a href="#" className="media-link">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="media-item">
              <a href="#" className="media-link">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="media-item">
              <a href="#" className="media-link">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="media-item">
              <a href="#" className="media-link">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
