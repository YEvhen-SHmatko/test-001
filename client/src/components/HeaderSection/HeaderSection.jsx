import React from "react";
import "./HeaderSection.scss";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const HeaderSection = () => {
  return (
    <header className="header">
      <div className="container header__wrap ">
        <Header />
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
            <NavLink className="header__left-btn" to="/stats">
              View Stats
            </NavLink>
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
};

export default HeaderSection;
