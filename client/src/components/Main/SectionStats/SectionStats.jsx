import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link, NavLink } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "./SectionStats.scss";

$.fn.DataTable.ext.pager.numbers_length = 5;

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
    const data = await fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        return data.data;
      })
      .catch((err) => console.log(err));
    $("#dt-table").DataTable({
      data: data,
      sDom: '<"top"i>rt<"bottom"lp><"clear">',
      paging: true,
      search: false,
      ordering: false,
      info: false,
      bLengthChange: false,
      iDisplayLength: 10,
      numbers_length: 5,
      aoColumnDefs: [
        { sClass: "t-col0", aTargets: [0] },
        { sClass: "t-col1", aTargets: [1] },
        { sClass: "t-col2", aTargets: [2] },
        { sClass: "t-col3", aTargets: [3] },
        { sClass: "t-col4", aTargets: [4] },
        { sClass: "t-col5", aTargets: [5] },
        { sClass: "t-col6", aTargets: [6] },
        { sClass: "t-col7", aTargets: [7] },
      ],
      columns: [
        {
          data: "id",
          title: "Id",
        },
        {
          data: "first_name",
          title: "First name",
        },
        {
          data: "last_name",
          title: "Last name",
        },
        {
          data: "email",
          title: "Email",
        },
        {
          data: "gender",
          title: "Gender",
        },
        {
          data: "ip_address",
          title: "IP address",
        },
        {
          data: "clicks",
          title: "Total clicks",
        },
        {
          data: "page_views",
          title: "Total page views",
        },
      ],
      oLanguage: {
        sProcessing: "Подождите...",
        sLengthMenu: "Показать _MENU_ записей",
        sZeroRecords: "Записи отсутствуют.",
        sEmptyTable: "Записи отсутствуют.",
        sInfo: "Записи с _START_ до _END_ из _TOTAL_ ",
        sInfoEmpty: "Записи с 0 до 0 из 0 ",
        sInfoFiltered: "(в _MAX_)",
        sInfoPostFix: "",
        sSearch: "Поиск: ",
        sUrl: "",
        oPaginate: {
          sFirst: "Первая",
          sPrevious: `<span class="material-icons">keyboard_arrow_left</span>`,
          sNext: `<span class="material-icons">keyboard_arrow_right</span>`,
          sLast: "Последняя",
        },
      },
    });
    const historyEdit = (that) => {
      const id = that.target.parentNode.children[0].textContent;
      const test = that.target.parentNode.children[0].nodeName === "TD";
      if (test) {
        console.dir(test);
        const route = `/user/${id}`;
        this.props.route.history.push(route);
      }
    };
    $("#dt-table").click(historyEdit);
  }

  render() {
    return (
      <section className="stats__section">
        <div className="container stats__wrap">
          <div className="stats__head">
            <div className="stats__nav">
              <Link to="/" className="stats__link">
                Main page
              </Link>
              <span className="material-icons stats__link-icon">
                keyboard_arrow_right
              </span>
              <NavLink
                to="/stats"
                className="stats__link"
                activeClassName="stats__link-active"
              >
                User satistics
              </NavLink>
            </div>
            <h3 className="stats__title bold">Users statistics</h3>
          </div>
          <div id="dt-table_wrapper" style={{ width: "100%" }}>
            <table
              id="dt-table"
              role="grid"
              style={{ width: "100%" }}
              //   aria-describedby="dt-table_info"
            >
              <thead></thead>
              <tbody></tbody>
              <tfoot></tfoot>
            </table>
          </div>
          {/* <div id="chart"></div> */}
        </div>
      </section>
    );
  }
}
