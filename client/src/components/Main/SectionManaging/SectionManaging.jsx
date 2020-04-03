import React from "react";
import "./SectionManaging.scss";

export default function SectionManaging() {
  return (
    <section className="managing__section">
      <div className="container managing__wrap">
        <div className="managing__left">
          <h2 className="managing__left-title bold">
            Start Managing your apps business, more faster
          </h2>
          <p className="managing__left-description">
            Objectively deliver professional value with diverse web-readiness.
            Collaboratively transition wireless customer service without
            goal-oriented catalysts for change. Collaboratively.
          </p>
          <button className="managing__left-btn">Learn more</button>
        </div>
        <div className="managing__right">
          <img
            className="managing__right-images"
            src="./images/macbook.png"
            alt="macbook"
          />
        </div>
      </div>
    </section>
  );
}
