import React, { Component } from "react";

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = { eventName: "" };
  }

  componentDidMount() {
    let state = this.props.location.state;
    let eventName;
    if (state) {
      eventName = this.props.location.state.eventName;
      this.setState({ eventName });
    }
  }

  render() {
    let eventName = this.state.eventName;
    return (
      <div>
        <div className="contact-image" />
        <div className="contact-wrapper">
          <div>
            <h1>상담 문의</h1>
          </div>
          <div className="contact-form">
            <div className="contact-form-inner">
              <label htmlFor="name">성함*</label>
              <input
                id="name"
                type="text"
                placeholder="문의자분의 성함을 입력해주세요"
              />
            </div>
            <div className="contact-form-inner">
              <label htmlFor="email">이메일 주소*</label>
              <input
                id="email"
                type="text"
                placeholder="문의자분의 이메일 주소를 입력해주세요"
              />
            </div>
            <div className="contact-form-inner">
              <label htmlFor="title">제목*</label>
              <input
                id="title"
                type="text"
                defaultValue={eventName ? `RE: ${eventName}` : ""}
              />
            </div>
            <div className="contact-form-inner">
              <label htmlFor="number">전화 번호</label>
              <input id="number" type="text" />
            </div>
            <div className="contact-form-inner">
              <label htmlFor="email">이메일 주소*</label>
              <input id="email" type="text" />
            </div>
            <div className="contact-form-inner">
              <label htmlFor="message">문의 내용*</label>
              <textarea id="message" type="text" />
            </div>
            <div className="contact-form-inner">
              <label htmlFor="" />
              <input
                id="cancel"
                type="button"
                className="button"
                value="취소"
              />
              <input
                id="send"
                type="button"
                className="button"
                value="보내기"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Journal;
