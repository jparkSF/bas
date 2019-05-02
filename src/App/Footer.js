import React, { Component } from "react";

class Footer extends Component {
  footer() {
    return (
      <div className="">
        <div className="footer-content">
          {/* <div className="footer-section" /> */}
          <div className="footer-section">
            {/* <div>
                <h1>ABOUT</h1>
              <div className="footer-menu">
                <span>회사소개</span>
              </div>
            </div>
            <div>
              <h1>CONTACT</h1>
              <div className="footer-menu">
                <span>emailaddress@gmail.com</span>
              </div>
            </div> */}
            <div className="footer-menu">
              <h1>LET'S CONNECT</h1>
              <div className="footer-fontawesome">
                <a href="/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="mailto: jpark830@me.com">
                  <i className="far fa-envelope" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-menu">
              <h1>SUBSCRIBE NOW</h1>
              <h2>
                베스트 어메리카 뉴스레터 및 최신의 미국 컨퍼런스
                <br />
                정보를 받아보세요!
              </h2>
              <div className="footer-subscription">
                <input type="text" placeholder="이메일주소를 입렵하세요.." />
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
    return (
      <section className="footer">
        <div className="footer-wrapper">{this.footer()}</div>
      </section>
    );
  }
}
export default Footer;
