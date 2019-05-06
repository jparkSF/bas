import React, { Component } from "react";
import { Link } from "react-router-dom";

class CompanyDetail extends Component {
  constructor(props) {
    super(props);
    this.colleges = props.location.state.colleges;
    this.schoolID = props.match.params.eventID;
  }

  bannerSpacer() {
    return <div className="bannerSpacer" />;
  }

  render() {
    window.$(document).scrollTop(0);
    let {
      name,
      favMajor,
      established,
      location,
      desc,
      website,
      images
    } = this.colleges;
    let companyImage = images.thumbnail;

    let style = {
      height: "360px",
      background: `url(${companyImage})`,
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "67% auto",
      overflow: "hidden",
      marginTop: "40px",
      width: "100%"
    };

    return (
      <div className="content-mobile">
        <div
          className="narrow banner-mobile company-detail-mobile"
          style={style}
        />
        <div className="eventDetailWrapper">
          <div className="detail-content">
            <h1>{name.ko}</h1>
            <h2>{name.en}</h2>

            <div className="event-table">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>설립년도</p>
                    </td>
                    <td>
                      <span>{established}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>유명전공, 대학</td>
                    <td>
                      <ul>
                        {favMajor.map(major => {
                          return <li key={major}>{major}</li>;
                        })}
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>위치</p>
                    </td>
                    <td>
                      <span>{location}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>웹사이트</p>
                    </td>
                    <td>
                      <a
                        href={website}
                        style={{ color: "blue", textDecoration: "underline" }}
                      >
                        <span>{website}</span>
                      </a>
                    </td>
                  </tr>

                  {desc ? (
                    <tr>
                      <td>
                        <p>설명</p>
                      </td>
                      <td style={{ textAlign: "left" }}>
                        <span dangerouslySetInnerHTML={{ __html: desc }} />
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}
                </tbody>
              </table>
              <div className="space-top-bottom">
                <Link
                  to={{
                    pathname: `/contact`,
                    state: {
                      eventName: name.en
                    }
                  }}
                  className="contact "
                >
                  문의하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyDetail;
