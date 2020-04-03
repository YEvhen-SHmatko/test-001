import React from "react";
import "./SectionPricing.scss";
export default function SectionPricing() {
  return (
    <section className="pricing__section">
      <div className="container pricing__wrap">
        <div className=" pricing__head">
          <h3 className="pricing__title">
            <span className="bold">Afforadble Pricing and Packages</span> choose
            your best one
          </h3>
          <p className="pricing__title-desc">
            Monotonectally grow strategic process improvements vis-a-vis
            integrated resources.
          </p>
        </div>
        <ul className=" pricing__list">
          <li className="pricing__item">
            <h4 className="pricing__item-title">Basic</h4>
            <img
              src="./images/undraw_online_test_gba7.png"
              alt="Clean Design"
              className="pricing__item-images"
            />
            <div className="bold pricing__item-price">$29</div>
            <div className="pricing__line" />
            <ul className="pricing__description-list">
              <li className="pricing__description-item">Push Notifications</li>
              <li className="pricing__description-item">Data Transfer</li>
              <li className="pricing__description-item">SQL Database</li>
              <li className="pricing__description-item">
                Search & SEO Analytics
              </li>
              <li className="pricing__description-item">24/7 Phone Support</li>
              <li className="pricing__description-item">
                2 months technical support
              </li>
              <li className="pricing__description-item">
                2+ profitable keyword
              </li>
            </ul>
            <button className="pricing__btn">Purchase now</button>
          </li>
          <li className="pricing__item">
            <h4 className="pricing__item-title">Standard</h4>
            <img
              src="./images/undraw_file_sync_ot38.png"
              alt="Clean Design"
              className="pricing__item-images"
            />
            <div className="bold pricing__item-price">$149</div>
            <div className="pricing__line" />
            <ul className="pricing__description-list">
              <li className="pricing__description-item">Push Notifications</li>
              <li className="pricing__description-item">Data Transfer</li>
              <li className="pricing__description-item">SQL Database</li>
              <li className="pricing__description-item">
                Search & SEO Analytics
              </li>
              <li className="pricing__description-item">24/7 Phone Support</li>
              <li className="pricing__description-item">
                2 months technical support
              </li>
              <li className="pricing__description-item">
                2+ profitable keyword
              </li>
            </ul>
            <button className="pricing__btn">Purchase now</button>
          </li>
          <li className="pricing__item">
            <h4 className="pricing__item-title">Unlimited</h4>
            <img
              src="./images/undraw_quiz_nlyh.png"
              alt="Clean Design"
              className="pricing__item-images"
            />
            <div className="bold pricing__item-price">$39</div>
            <div className="pricing__line" />
            <ul className="pricing__description-list">
              <li className="pricing__description-item">Push Notifications</li>
              <li className="pricing__description-item">Data Transfer</li>
              <li className="pricing__description-item">SQL Database</li>
              <li className="pricing__description-item">
                Search & SEO Analytics
              </li>
              <li className="pricing__description-item">24/7 Phone Support</li>
              <li className="pricing__description-item">
                2 months technical support
              </li>
              <li className="pricing__description-item">
                2+ profitable keyword
              </li>
            </ul>
            <button className="pricing__btn">Purchase now</button>
          </li>
        </ul>
        <div className=" pricing__redirect">
          If you need custom services or Need more?
          <a href="#" className="bold pricing__link">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
