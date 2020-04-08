import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";
import Chart from "chart.js";
import "./SectionUserStats.scss";
// {"user_id":119,"date":"2019-10-02","page_views":724,"clicks":505}

const renderChart = async (domElement, data) => {
  const sort = data.map((element) => element.x).sort();
  new Chart(domElement, {
    type: "line",
    responsive: false,
    data: {
      datasets: [
        {
          data: data,
          fill: false,
          borderColor: "#3A80BA",
          lineTension: 0.2,
          pointRadius: 3,
        },
      ],
    },
    options: {
      scales: {
        responsive: true,
        xAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              fontSize: 16,
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
              color: "#F1F1F1",
              drawBorder: false,
            },
            ticks: {
              fontSize: 16,
              display: true,
              min: 0,
              max: 1000,
              stepSize: 200,
            },
          },
        ],
      },
      tooltips: {
        titleFontSize: 20,
        bodyFontSize: 16,
        footerFontSize: 12,
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
  state = {};
  async componentDidMount() {
    const id = +this.props.route.match.params.id;
    //   "proxy": "http://localhost:3001",
    const data = await fetch(`/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        return data.data;
      })
      .catch((err) => console.log(err));
    const mapper = (data) => {
      return data.reduce(
        (acc, item) => {
          if (!acc.first_name && !acc.last_name) {
            acc.id = item.id;
            acc.first_name = item.first_name;
            acc.last_name = item.last_name;
          }
          acc.clicks.push({ x: item.date, y: item.clicks });
          acc.page_views.push({ x: item.date, y: item.page_views });
          return acc;
        },
        {
          id: "",
          first_name: "",
          last_name: "",
          clicks: [],
          page_views: [],
        }
      );
    };
    this.setState({ ...this.state, ...mapper(data) });
    console.log(this.state);
    const clicksChart = $("#clicksChart");
    const viewsChart = $("#viewsChart");
    renderChart(clicksChart, this.state.clicks);
    renderChart(viewsChart, this.state.page_views);
  }

  render() {
    const { id, first_name, last_name } = this.state;
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
                to="/stats"
                className="userStats__link"
                activeClassName="userStats__link-active"
              >
                User satistics
              </NavLink>
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
              <h4 className="userStats__subTitle bold">Clicks</h4>
              <canvas id="clicksChart"></canvas>
            </div>
            <div className="userStats__chart">
              <h4 className="userStats__subTitle bold">Views</h4>
              <canvas id="viewsChart"></canvas>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
