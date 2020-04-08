import React from "react";
import "./HeaderSection.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header__head">
      <Link className="header__head-logo" to="/">
        AppCo
      </Link>
    </div>
  );
}
