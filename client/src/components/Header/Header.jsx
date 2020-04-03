import React from "react";
import "./Header.scss";

export default function header() {
  return (
    <header className="header">
      <div className="container header__wrap ">
        <div className="header__head">
          <a className="header__head-logo" href="#">
            AppCo
          </a>
        </div>
        <div className="header__main">
          <div className="header__main-left">
            <h2 className="header__left-title">
              <span className="bold">Brainstorming</span> for desired perfect
              Usability
            </h2>
            <p className="header__left-description">
              Our design projects are fresh and simple and will benefit your
              business greatly. Learn more about our work!
            </p>
            <button className="header__left-btn">View Stats</button>
          </div>
          <div className="header__main-right">
            <img
              className="header__right-images"
              src="./images/mobile.png"
              alt="mobile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
