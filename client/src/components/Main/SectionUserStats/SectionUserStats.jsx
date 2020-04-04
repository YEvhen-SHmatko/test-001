import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link, NavLink } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import Users from "../../../server/users.json";
import "./SectionUserStats.scss";

$.fn.DataTable.ext.pager.numbers_length = 5;

export default class SectionStats extends Component {
  static propTypes = {
    route: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired,
      location: PropTypes.shape({
        search: PropTypes.string.isRequired
      }).isRequired,
      match: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.string
        })
      }).isRequired
    })
  };
  state = {
    user: {
      id: 4,
      first_name: "Samuel",
      last_name: "Frost",
      email: "aosullivan6@sphinn.com",
      gender: "Male",
      ip_address: "218.183.185.92"
    }
  };
  componentDidMount() {
    console.log("mount");
  }

  render() {
    const { id, first_name, last_name } = this.state.user;
    return (
      <section className="userStats__section">
        <div className="container userStats__wrap">
          <div className="userStats__head">
            <div className="userStats__nav">
              <Link to="/" className="userStats__link">
                Main page
              </Link>
              <span className="material-icons userStats__link-icon">
                keyboard_arrow_right
              </span>
              <NavLink
                to={`/user/${id}`}
                className="userStats__link"
                activeClassName="userStats__link-active"
              >
                {first_name} {last_name}
              </NavLink>
            </div>
            <h3 className="userStats__title bold">
              {first_name} {last_name}
            </h3>
          </div>
          <div className="userStats__schedule-wrap">table</div>
        </div>
      </section>
    );
  }
}
