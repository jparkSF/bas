import React, { Component } from "react";
import { Link } from "react-router-dom";
import db from "../db/app_db";
import debounce from "lodash/debounce";
import { isEmpty } from "lodash";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.pathname = window.location.pathname;
    this.db = db;
    this.state = {
      ranks: [
        ["EDS", "EDS-2019"],
        ["National Hardware Show", "National-Hardware-Show-2019"],
        ["SEMICON West", "SEMICON-WEST-2019"],
        ["INTEROP", "INTEROP-2019"],
        ["Lightfair International", "Lightfair International 2019"],
        ["INFOCOMM", "INFOCOMM-2019"],
        ["E3", "E3-2019"]
      ],
      allEvents: [],
      search: "",
      filteredList: []
    };
  }

  componentDidMount() {
    let allEvents = this.db.events;
    let eventKeys = Object.keys(allEvents);
    let events = [];
    eventKeys.forEach(event => {
      events.push([allEvents[event].eventName.en, event]);
    });
    this.setState({ allEvents: events });
  }
  pad(num) {
    var s = String(num);
    while (s.length < 2) {
      s = "0" + s;
    }
    return s;
  }

  filterSearch() {
    let keyword = this.state.search;
    let allEvents = this.state.allEvents;
    let filteredList = [];

    if (keyword.length !== 0) {
      allEvents.forEach(e => {
        let included = e[0].toLowerCase().indexOf(keyword);

        if (included >= 0) {
          filteredList.push(e);
        }
      });
    }

    this.setState({ filteredList });
  }
  handleSearchUpdate = debounce(text => {
    this.setState({ search: text.toLowerCase() });
    this.filterSearch();
  }, 500);

  showSearchResults(list) {
    // let target = window.$(".search-result-list");
    // target.empty();
    // console.log(target);

    if (!isEmpty(list)) {
      window.$(".search-result").css("display", "block");

      return (
        <ul className="search-result-list">
          {list.map((item, idx) => {
            let processedEventName = item[0].split(" ").join("-");
            return (
              <Link to={`/event/${processedEventName}`} key={idx}>
                <li className="result-list-item">
                  <i className="fas fa-search" />
                  <span>{item[0]}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      );
    } else {
      return;
      // window.$(".search-result").css("display", "none");
    }
  }

  moveUp() {
    let list = window.$("#fav-list li");

    if (list.length >= 1) {
      let count = 1;
      setInterval(function() {
        if (count <= list.length) {
          let list = window.$("#fav-list li");
          let item = list[0];
          let length = list.length;
          let itemHeight = window.$(item).height();

          let ul = window.$(list[0]).parent();
          // console.log(length);
          // console.log(count);
          if (count >= length) {
            // console.log("inside");
            ul.animate({ top: "" }, 1000);
            count = 0;
          } else {
            ul.animate({ top: `-=${itemHeight + 1}px` }, 1000);
          }

          // let firstChild = list[0];
          // firstChild.remove();
          // ul.append(firstChild);
        }
        count++;
      }, 3500);
    }
  }

  render() {
    window.onclick = function(event) {
      if (!event.target.matches(".header-search")) {
        window.$(".search-result").css("display", "none");
      }
    };
    let pathname = this.pathname;
    let ranks = this.state.ranks;

    let time = new Date();
    let yr = time.getYear() + 1900;
    let mo = time.getMonth() + 1;
    let date = time.getDate();

    let hr = this.pad(time.getHours());
    let min = this.pad(time.getMinutes());

    let currentTimeString = `${yr}.${mo}.${date}. ${hr}:${min}:00 샌프란시스코 기준`;

    let filteredList = this.state.filteredList;

    this.moveUp();

    return (
      <div className="nav">
        <div className="navbar narrow">
          <div className="nav-left">
            <Link to={"/"}>
              <div className="nav-title space-right" />
            </Link>
            <div className="search-bar">
              <i className="fas fa-search" />
              <input
                type="text"
                placeholder="컨퍼런스를 검색하세요. &nbsp;&nbsp;2019, SEMICON, ... "
                onChange={e => this.handleSearchUpdate(e.target.value)}
              />
              <div className="search-result">
                <div className="search-result-inner">
                  {this.showSearchResults(filteredList)}
                </div>
              </div>
            </div>
          </div>

          <div className="nav-buttons">
            <Link to={"/contact"} className="contact">
              상담문의
            </Link>
          </div>
        </div>
        <header className=" border-bottom-2 border-top">
          <div className="chart">
            <ul className="narrow ">
              <li className={pathname === "/" ? "active" : "highlight"}>
                <Link to={"/"} className="button--link">
                  홈
                </Link>
              </li>
              <li className={pathname === "/info" ? "active" : "highlight"}>
                <Link to={"/info"} className="button--link">
                  회사소개
                </Link>
              </li>

              <li className="favorites-wrapper">
                <div className="favorites-inner">
                  <span id="favorites">인기 컨퍼런스</span>
                  <span className="favorites-list" id="favorites-list">
                    <ul id="fav-list">
                      {this.state.ranks.map((list, idx) => {
                        return (
                          <li key={idx}>
                            {idx + 1}&nbsp;{list[0]}
                          </li>
                        );
                      })}
                    </ul>
                  </span>
                  <i className="fas fa-chevron-down" />

                  <div className="favorites-hover-box">
                    <div className="favorites-hover-inner">
                      <span>인기 컨퍼런스</span>
                      {ranks.map((item, idx) => {
                        return (
                          <Link key={idx} to={`/event/${item[1]}`}>
                            <span id="favorites-full-list">
                              <b>{idx + 1}</b>&nbsp;&nbsp;&nbsp;{item[0]}
                              <i className="fas fa-external-link-alt" />
                              <br />
                            </span>
                          </Link>
                        );
                      })}
                      <hr />
                      <p className="currentTimeString">{currentTimeString}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default Nav;
