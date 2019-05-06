import React, { Component } from "react";
import { connect } from "react-redux";
import db from "../../db/app_db";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: 0,
      upcomingMonths: [],
      db
    };
  }

  componentDidMount() {
    const today = new Date();
    const numberOfMonths = 6;
    let months = [];
    let currentMonth = today.getMonth() + 1;
    let counter = currentMonth;
    while (months.length < numberOfMonths) {
      months.push(counter);
      counter++;
      if (counter > 12) {
        counter = 1;
      }
    }

    this.setState({ upcomingMonths: months, selectedMonth: months[0] });
  }

  mainBanner() {
    return <div />;
  }

  upcomingEvents() {
    const selectedMonth = this.state.selectedMonth;
    let months = this.state.upcomingMonths;

    return (
      <ul className="narrow name">
        {months.map((month, idx) => {
          return (
            <p key={idx} onClick={e => this.setState({ selectedMonth: month })}>
              <li className={month === selectedMonth ? "active" : ""}>
                {month}월
              </li>
            </p>
          );
        })}
      </ul>
    );
  }
  listEventCards() {
    const selectedMonth = this.state.selectedMonth;
    const events = this.state.db.events;

    let eventKeys = Object.keys(this.state.db.events);

    let eventsDatesInMonth = eventKeys.filter(event => {
      // eslint-disable-next-line
      return event.slice(5, 7) == selectedMonth;
    });
    let eventsInMonth = [];
    eventsDatesInMonth.forEach(eventDate => {
      eventsInMonth.push(events[eventDate]);
    });

    let sortedEventsInMonth = eventsInMonth.sort((b, a) => {
      return b.date.start - a.date.start;
    });

    return (
      <div className="main-card-container narrow">
        {sortedEventsInMonth.map((event, idx) => {
          let imageUrl = event.images.thumbnail;
          let style = {
            height: 170,
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            overflow: "hidden",
            boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.16)"
          };

          let parsedEventName = event.eventName.en.split(" ").join("-");

          return (
            <div key={idx} className="main-card">
              <Link
                to={{
                  pathname: `event/${parsedEventName}`,
                  state: {
                    event: event
                  }
                }}
              >
                <div id="top" style={style} />
                <div id="bottom">
                  <div className="conf-desc">
                    <div id="location">
                      {event.location.ko.city}&nbsp;•&nbsp;
                      {event.location.en.city}
                    </div>
                    <div id="name">
                      <span id="eventName">
                        {event.eventName.ko}
                        <br />
                        {event.eventName.en}
                      </span>
                    </div>
                    <div id="date">
                      {event.date.start.replace(/-/g, "/")}
                      &nbsp;~&nbsp;
                      {event.date.end.replace(/-/g, "/")}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  shuffle(arr) {
    // return arr.sort(() => Math.random() - 0.5);
    return arr;
  }

  listCompanies() {
    let companies = this.state.db.companies;
    let shuffledCompanies = this.shuffle(Object.keys(companies));
    const numberOfCompanies = 9;
    return (
      <div className="main-card-container narrow">
        {shuffledCompanies.slice(0, numberOfCompanies).map(com => {
          let imageUrl = companies[com].images.thumbnail;
          let style = {
            height: 170,
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            overflow: "hidden",
            // boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.16)",
            border: "1px solid #dee2e6"
          };

          return (
            <div key={com} className="main-card-companies">
              <Link
                to={{
                  pathname: `/company-info/${com}`,
                  state: { company: companies[com] }
                }}
              >
                <div style={style} />
              </Link>
              <div>
                <div className="conf-desc com-desc block">
                  {/* <div id="location">&nbsp;•&nbsp;</div> */}
                  <div id="name">
                    <span>{companies[com].name.ko}&nbsp;•&nbsp;</span>
                  </div>
                  <div id="date">{companies[com].name.en}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  listUniversities() {
    let colleges = this.state.db.colleges;
    let shuffledColleges = this.shuffle(Object.keys(colleges));
    const numberOfColleges = 3;
    return (
      <div className="main-card-container narrow">
        {shuffledColleges.slice(0, numberOfColleges).map(coll => {
          let imageUrl = colleges[coll].images.thumbnail;
          let style = {
            height: 170,
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            overflow: "hidden",
            // boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.16)",
            border: "1px solid #dee2e6"
          };

          return (
            <div key={coll} className="main-card-companies">
              <Link
                to={{
                  pathname: `/university/${coll}`,
                  state: { colleges: colleges[coll] }
                }}
              >
                <div style={style} />
              </Link>
              <div>
                <div className="conf-desc com-desc block">
                  {/* <div id="location">&nbsp;•&nbsp;</div> */}
                  <div id="name">
                    <span>{colleges[coll].name.ko}&nbsp;•&nbsp;</span>
                  </div>
                  <div id="date">{colleges[coll].name.en}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  footer() {
    return (
      <div className="">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-menu">
              <h1>LET'S CONNECT</h1>
              <div className="footer-fontawesome">
                <i class="fab fa-instagram" />
                <i class="far fa-envelope" />
              </div>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-menu">
              <h1>SUBSCRIBE NOW</h1>
              <div className="footer-subscription">
                <input type="text" placeholder="Enter your email address.." />
                <input type="button" value="SEND" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span>&copy; 2019 Best America Services. All rights reserved.</span>
        </div>
      </div>
    );
  }
  render() {
    // window.onclick = function(event) {
    //   // if (!event.target.matches(".header-search")) {
    //   //   window.$(".search-result").css("display", "none");
    //   // }
    //   // if (
    //   //   !event.target.matches("#mySidenav") &&
    //   //   !event.target.matches(".hamburger")
    //   // ) {
    //   //   window.$(".sidenav").css("width", "0");
    //   // }

    //   if (event.target.matches("#closeBtn")) {
    //     window.$(".sidenav").css("width", "0");
    //     window.$("button.hamburger").removeClass("is-active");
    //   }
    // };

    return (
      <div className="content">
        {/* <SideMenuBar /> */}
        <main>
          <Link to={"/contact"} className="button--link">
            <section className="main-banner-1">{this.mainBanner()}</section>
          </Link>

          {/* =================================== */}
          <section className="space-top-bottom">
            <div className="narrow">
              <h2>다가오는 컨퍼런스</h2>
            </div>

            <div className="underline-1 chart">{this.upcomingEvents()}</div>

            {this.listEventCards()}
          </section>
          {/* =================================== */}
          <section className="space-top-bottom">
            <div className="narrow">
              <h2>실리콘밸리의 기업/기관들</h2>
            </div>

            <div className="underline-1 chart">{this.listCompanies()}</div>
          </section>
          {/* =================================== */}
          <section className="space-top-bottom">
            <div className="narrow">
              <h2>실리콘밸리지역 대학</h2>
            </div>

            <div className="underline-1 chart">{this.listUniversities()}</div>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
