import React, { Component } from "react";
import { Link } from "react-router-dom";

class CompanyDetail extends Component {
  constructor(props) {
    super(props);
    this.company = props.location.state.company;
    this.companyID = props.match.params.eventID;
  }

  bannerSpacer() {
    return <div className="bannerSpacer" />;
  }

  render() {
    window.$(document).scrollTop(0);
    let {
      name,
      industry,
      products,
      established,
      hqLocation,
      desc,
      images
    } = this.company;
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

            <div className="event-table ">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>Industry</p>
                    </td>
                    <td>
                      <span>{industry}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Products</td>
                    <td>
                      <ul>
                        {products.map(prod => {
                          return <li key={prod}>{prod}</li>;
                        })}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Founded</p>
                    </td>
                    <td>
                      <span>{established}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Location</p>
                    </td>
                    <td>
                      <span>{hqLocation}</span>
                    </td>
                  </tr>

                  {desc ? (
                    <tr>
                      <td>
                        <p>Description</p>
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
