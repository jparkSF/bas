import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-page">
        <section className="about-page-content-1 narrow">
          <div>
            <div>
              <div className="info-text-wrapper">
                <div className="info-text">
                  <p>
                    미국 현지의 전문기술과
                    <br />
                    시스템을 갖춘 팀이
                    <br />
                    신속하고 정확한 정보로
                    <br />
                    차별화된 서비스를
                    <br />
                    제공합니다
                  </p>
                </div>
                <div className="info-picture" />
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-content-2">
          <div className="info-cards-wrapper narrow">
            <h1>베스트 아메리카와 함께 하세요!</h1>

            <div className="info-cards-container">
              <div className="info-card">
                <div>
                  <div className="info-card-conference" />
                  <div className="info-card-desc">
                    <h1>컨퍼런스 참관</h1>
                    <span>
                      IT, 방송, 하드웨어, 에너지, 전기, 컴퓨터 등 맞춤형
                      컨퍼런스 정보 제공
                    </span>
                  </div>
                </div>
              </div>
              <div className="info-card">
                <div>
                  <div className="info-card-enterprise" />
                  <div className="info-card-desc">
                    <h1>기업방문</h1>
                    <span>
                      고객의 필요에 따라 분야별 추천회사와의 미팅, 기업 탐방에
                      필요한 컨설팅을 해드립니다.
                    </span>
                  </div>
                </div>
              </div>
              <div className="info-card">
                <div>
                  <div className="info-card-languages" />
                  <div className="info-card-desc">
                    <h1>비지니스 통역</h1>
                    <span>
                      비지니스 미팅, 컨퍼런스 중 정확하고 편안한 통역서비스를
                      제공합니다
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Info;
