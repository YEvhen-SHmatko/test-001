import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer__section">
      <div className="container footer__wrap ">
        <div className="footer__subscribe">
          <input
            className="footer__subscribe-input"
            type="text"
            placeholder="Enter your email"
          />
          <button className="footer__subscribe-btn">Subscribe</button>
        </div>
        <div className="footer__down">
          <a className="header__head-logo" href="#">
            AppCo
          </a>
          <span>All rights reserved by ThemeTags</span>
          <span>Copyrights © 2019.</span>
        </div>
      </div>
    </footer>
  );
}
