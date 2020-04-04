import React from "react";
import "./FooterSection.scss";
import Footer from "./Footer";

export default function FooterSection() {
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
        <Footer />
      </div>
    </footer>
  );
}
