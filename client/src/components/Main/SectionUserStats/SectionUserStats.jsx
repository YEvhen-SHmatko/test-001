import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";
import Chart from "chart.js";
import "./SectionUserStats.scss";
// {"user_id":119,"date":"2019-10-02","page_views":724,"clicks":505}

const renderChart = async (domElement, data) => {
  const sort = data.map((element) => element.x).sort();
  console.log(sort);
  new Chart(domElement, {
    type: "line",
    responsive: false,
    data: {
      datasets: [
        {
          data: data,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          lineTension: 0.2,
          pointRadius: 0,
        },
      ],
    },
    options: {
      scales: {
        responsive: true,
        xAxes: [
          {
            ticks: {
              display: true,
            },
            type: "time",
            time: {
              min: sort[0],
              max: sort[-1],
              unit: "month",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "black",
            },
            ticks: {
              display: true,
              min: 0,
              max: 1000,
              stepSize: 200,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
};

export default class SectionStats extends Component {
  static propTypes = {
    route: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
      }).isRequired,
      location: PropTypes.shape({
        search: PropTypes.string.isRequired,
      }).isRequired,
      match: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.string,
        }),
      }).isRequired,
    }),
  };
  state = {
    user: {
      first_name: "Samuel",
      last_name: "Frost",
      views: [
        { x: "2018-01-21", y: 100 },
        { x: "2018-01-23", y: 100 },
        { x: "2018-02-05", y: 40 },
        { x: "2018-03-08", y: 300 },
        { x: "2018-03-16", y: 300 },
        { x: "2018-03-28", y: 300 },
        { x: "2018-04-16", y: 10 },
        { x: "2018-05-17", y: 900 },
      ],
      clicks: [
        { x: "2018-01-21", y: 100 },
        { x: "2018-01-23", y: 200 },
        { x: "2018-02-05", y: 550 },
        { x: "2018-03-08", y: 200 },
        { x: "2018-03-08", y: 850 },
        { x: "2018-03-16", y: 123 },
        { x: "2018-03-28", y: 654 },
        { x: "2018-04-16", y: 10 },
      ],
    },
  };
  componentDidMount() {
    // fetch("/user/:id")
    //   .then((res) => res.json())
    //   .then((users) => this.setState({ users }));
    const clicksChart = $("#clicksChart");
    const viewsChart = $("#viewsChart");
    renderChart(clicksChart, this.state.user.clicks);
    renderChart(viewsChart, this.state.user.views);
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
          <div className="userStats__schedule-wrap">
            <div className="userStats__chart">
              <h4>Clicks</h4>
              <canvas id="clicksChart"></canvas>
            </div>
            <div className="userStats__chart">
              <h4>Vievs</h4>
              <div className="chart-container">
                <canvas id="viewsChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
