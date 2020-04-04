import React from "react";
import "./FooterSection.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer__down">
      <Link className="header__head-logo" to="/">
        AppCo
      </Link>
      <span>All rights reserved by ThemeTags</span>
      <span>Copyrights © 2019.</span>
    </div>
  );
}
