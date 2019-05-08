import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }
  targetPopup(form) {
    // window.open("", "formpopup", "width=400,height=400,resizeable,scrollbars");
    // form.target = "formpopup";
  }
  handleChange(e) {
    console.log(this.state.email);
    this.setState({ email: e.target.value });
  }
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
                <a href="mailto: jpark@siliconvalleytour.info">
                  <i className="far fa-envelope" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-menu">
              <h1>SUBSCRIBE NOW</h1>
              <h2>
                베스트 아메리카 뉴스레터 및 최신의 미국 컨퍼런스
                <br />
                정보를 받아보세요!
              </h2>

              <div className="footer-subscription">
                <form
                  action="https://me.us20.list-manage.com/subscribe/post?u=63acc2fb2b97ce7b1af230f2e&amp;id=f809f1b884"
                  method="post"
                  onSubmit={e => this.targetPopup(this)}
                  className="validate"
                >
                  <input
                    placeholder="이메일주소를 입렵하세요.."
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    onChange={e => this.handleChange(e)}
                  />
                  <input type="submit" value="SEND" />
                </form>
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
