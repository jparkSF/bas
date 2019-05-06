import React, { Component } from "react";
import db from "../../db/app_db";
import { Link } from "react-router-dom";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.db = db;
    this.eventID = props.match.params.eventID;
    this.state = { event: {} };
  }

  componentWillMount() {
    let event = this.props.location.state;
    let parsedEventID = this.eventID.split("-").join(" ");
    if (!event) {
      let filter = Object.keys(this.db.events).filter(event => {
        // eslint-disable-next-line
        return this.db.events[event].eventName.en == parsedEventID;
      });

      event = filter[0];
      this.setState({ event: this.db.events[event] });
    } else {
      event = this.props.location.state.event;
      this.setState({ event });
    }
  }

  bannerSpacer() {
    return <div className="bannerSpacer" />;
  }

  render() {
    window.$(document).scrollTop(0);
    let event = this.state.event;

    if (event) {
      let {
        date,
        description,
        eventName,
        exhibition,
        exhibitor,
        expectedVisitor,
        images,
        location,
        website
      } = event;
      let eventBanner = images.banner;

      let style = {
        height: "360px",
        background: `url(${eventBanner})`,
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        overflow: "hidden",
        width: "auto",
        marginTop: "40px"
      };
      return (
        <div className="content-mobile">
          <div className="narrow banner-mobile" style={style} />
          <div className="event-detail-wrapper narrow">
            <div className="detail-content">
              <h1>{eventName.ko}</h1>
              <h2>{eventName.en}</h2>

              <div className="event-table">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>전시회명</p>
                      </td>
                      <td>
                        <span>
                          {eventName.ko} ({eventName.en})
                        </span>
                      </td>
                    </tr>
                    {description ? (
                      <tr>
                        <td>
                          <p>전시분야/설명</p>
                        </td>
                        <td>
                          <span>{description}</span>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    <tr>
                      <td>개최기간</td>
                      <td>
                        {date.start.split("-").join("/")} ~{" "}
                        {date.end.split("-").join("/")}
                      </td>
                    </tr>
                    <tr>
                      <td>전시장소</td>
                      <td>{location.en.name}</td>
                    </tr>
                    <tr>
                      <td>개최규모</td>
                      <td>약 {exhibitor} 여개사</td>
                    </tr>
                    <tr>
                      <td>참관객수</td>
                      <td>약 {expectedVisitor} 여명 참가</td>
                    </tr>
                    <tr>
                      <td>웹사이트</td>
                      <td>
                        <a
                          href={website}
                          style={{ color: "blue", textDecoration: "underline" }}
                        >
                          {website}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>전시품목</td>
                      <td>
                        <ul>
                          {exhibition.map((item, idx) => {
                            return <li key={idx}>{item}</li>;
                          })}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="space-top-bottom">
                  <Link
                    to={{
                      pathname: `/contact`,
                      state: {
                        eventName: eventName.en
                      }
                    }}
                    className="contact"
                  >
                    문의하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default EventDetail;
