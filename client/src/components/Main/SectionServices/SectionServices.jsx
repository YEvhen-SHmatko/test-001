import React from "react";
import "./SectionServices.scss";
export default function SectionServices() {
  return (
    <section className="container services__section">
      <div className="services__head">
        <h3 className="services__title">
          Why <span className="bold">small business owners love</span> AppCo?
        </h3>
        <p className="services__description">
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
      </div>
      <ul className="services__list">
        <li className="services__item">
          <img
            src="./images/Group13.png"
            alt="Clean Design"
            className="services__item-images"
          />
          <h4 className="services__item-title">Clean Design</h4>
          <p className="services__item-description">
            Increase sales by showing true dynamics of your website.
          </p>
        </li>
        <li className="services__item">
          <img
            src="./images/Group15.png"
            alt="Secure Data"
            className="services__item-images"
          />
          <h4 className="services__item-title">Secure Data</h4>
          <p className="services__item-description">
            Build your online store’s trust using Social Proof &amp; Urgency.
          </p>
        </li>
        <li className="services__item">
          <img
            src="./images/Group14.png"
            alt="Retina Ready"
            className="services__item-images"
          />
          <h4 className="services__item-title">Retina Ready</h4>
          <p className="services__item-description">
            Realize importance of social proof in customer’s purchase decision.
          </p>
        </li>
      </ul>
    </section>
  );
}
