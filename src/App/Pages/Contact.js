import React, { Component } from "react";

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      phoneNumber: "",
      message: ""
    };
    this.initialState = {};
  }

  componentDidMount() {
    let state = this.props.location.state;
    let subject;

    if (state) {
      subject = this.props.location.state.eventName;
      this.setState({ subject });
    }
  }

  componentWillMount() {
    this.initialState = this.state;
  }
  handleChange(e, type) {
    this.setState({ [type]: e.target.value });
  }

  handleCancel(e) {
    e.preventDefault();
    let res = window.confirm(
      "정말 취소 하시겠습니까? (입력된 정보가 모두 지워집니다)"
    );
    if (res) {
      window.location = "/";
    }
  }

  handleSubmit(e) {
    let { name, email, subject, phoneNumber, message } = this.state;
    let res = window.confirm("메시지를 보내시겠습니까?");

    if (res) {
      window.$("#contact-form").submit(function(e) {
        e.preventDefault();

        var data = {
          service_id: "gmail",
          template_id: "template_dPBszLzJ",
          user_id: "user_9JA1Gvmkhd6YXkkQUY7vq",

          template_params: {
            from_name: name,
            subject: subject,
            message_html: message,
            reply_to: email,
            phoneNumber,
            to_name: "Best America Services",
            "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd..."
          }
        };

        let successMessage = `
        <div class="contact-form-inner">
          <div class="message text-success">
            <span>메세지가 성공적으로 전송되었습니다.<br />Best America Services팀에서 메세지 확인후 24시간 내에 연락드립니다.</span>
            <a href="/" id="cancel" class="button" style="height:auto; padding:0 35px; float: right;">홈으로 돌아가기</a>  
          </div>
        </div>
      `;

        let errorMessage = `
        <div class="contact-form-inner">
          <div class="message text-danger">
            <span>문제가 생겨 메세지가 전송되지 않았습니다.<br />잠시후 다시 이용해주세요.</span>
            <a href="/" id="cancel" class="button" style="height:auto; padding:0 35px; float: right;">홈으로 돌아가기</a>  
          </div>
        </div>
      `;

        //change send to sending...
        let target = window.$("#send");
        target.empty().html("보내는 중...");

        //ajax request to EmailJS api endpoint
        window.$.ajax("https://api.emailjs.com/api/v1.0/email/send", {
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
          success: function(res) {
            window.$(".contact-form-inner:last-child").remove();
            window.$(".contact-form").append(successMessage);
          },
          error: function(err) {
            if (err) {
              window.$(".contact-form-inner:last-child").remove();
              window.$(".contact-form").append(errorMessage);
            }
          }
        });
      });
    }
  }

  render() {
    let subject = this.state.subject;
    return (
      <div>
        <div className="contact-image" />
        <div className="contact-wrapper">
          <div>
            <h1>상담 문의</h1>
          </div>
          <form id="contact-form">
            <div className="contact-form">
              <div className="contact-form-inner">
                <label htmlFor="name">성함*</label>
                <input
                  id="name"
                  type="text"
                  placeholder="문의자분의 성함을 입력해주세요"
                  onChange={e => {
                    this.handleChange(e, "name");
                  }}
                  required
                />
              </div>
              <div className="contact-form-inner">
                <label htmlFor="email">이메일 주소*</label>
                <input
                  id="email"
                  type="text"
                  placeholder="문의자분의 이메일 주소를 입력해주세요"
                  onChange={e => {
                    this.handleChange(e, "email");
                  }}
                  required
                />
              </div>
              <div className="contact-form-inner">
                <label htmlFor="subject">제목*</label>
                <input
                  id="subject"
                  type="text"
                  defaultValue={subject ? `RE: ${subject}` : ""}
                  onChange={e => {
                    this.handleChange(e, "subject");
                  }}
                  required
                />
              </div>
              <div className="contact-form-inner">
                <label htmlFor="number">전화 번호</label>
                <input
                  id="number"
                  type="text"
                  onChange={e => {
                    this.handleChange(e, "phoneNumber");
                  }}
                />
              </div>

              <div className="contact-form-inner">
                <label htmlFor="message">문의 내용*</label>
                <textarea
                  id="message"
                  type="text"
                  onChange={e => {
                    this.handleChange(e, "message");
                  }}
                  required
                />
              </div>
              <div className="contact-form-inner">
                <label htmlFor="" />
                {/* <button type="button" id="cancel" name="button" onClick={e => { this.handleCancel(e) }} className="button">취소</button> */}
                <button
                  id="cancel"
                  type="button"
                  className="button"
                  onClick={e => this.handleCancel(e)}
                >
                  취소
                </button>
                <button
                  id="send"
                  type="submit"
                  className="button"
                  onClick={e => this.handleSubmit(e)}
                >
                  보내기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Journal;
