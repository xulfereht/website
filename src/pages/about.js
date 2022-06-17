// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";
import ReactRoundedImage from "react-rounded-image";
import Photo from "../images/profile_removebg.png";
import { GiSprout } from "react-icons/gi";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <h2>
        {" "}
        <div className="icon">
          <GiSprout />
        </div>
        &nbsp;&nbsp;대표 인사말
      </h2>
      <div className="Blank"></div>

      <Grid cols="12" gap="10px">
        <Col xxl="4" md="6" sm="12">
          <div align="center">
            <ReactRoundedImage
              image={Photo}
              roundedColor="#fff"
              imageWidth="150"
              imageHeight="150"
              roundedSize="2"
              borderRadius="90"
            />
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <p>
            안녕하세요. <b>현직한의사</b>이자 모든마케팅 대표 <b>안상완</b>
            입니다.
          </p>
          <p>
            모든마케팅 임직원은 끊임없이 배우고 익히면서 고객사 분들이 더 많은
            고객과 접점을 만들어 갈 수 있게 노력하고 있습니다.
          </p>
          <p>
            기존에 강점을 가진 부분들을 잘 유지하면서 최근 트렌드인 그로스 /
            애자일 쪽 정보를 업데이트하여 변화해가는 비즈니스 환경에 기민하게
            대응하려 합니다.
          </p>
          <p>
            현실적인 조건하에서 ROI가 높은 선택지를 제시하여 고객사의 합리적인
            마케팅 의사결정을 돕겠습니다.
          </p>
          <p>감사합니다.</p>
          <div className="Blank"></div>
        </Col>
        <Col xxl="4" md="6" sm="12">
          <div>
            <h2>우리가 하는 일</h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div>
            <div className="details">
              <details>
                <summary className="buttontypetext">&nbsp;Automation</summary>
                <p className="subdetails">
                  마케팅 효율을 극대화시키기 위해 마케팅채널 모니터링, 이슈
                  발생시의 즉각적인 대응, 템플릿 기반 컨텐츠 생성을 통한 생산성
                  향상 등 다양한 기술이 활용되고 있습니다. 마케팅자동화 기술을
                  통해 변화를 경험해보세요!
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetext">&nbsp;Consulting</summary>
                <p className="subdetails">
                  마케팅을 시작하고싶은데 방법을 몰라 어려움을 겪고 있는 고객을
                  대상으로 마케팅컨설팅을 진행합니다. 고객의 비지니스모델에 대한
                  이해로부터 고객생애가치 대비 고객획득비용의 최소화를 가능하게
                  합니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetext">
                  &nbsp;Social media Marketing
                </summary>
                <p className="subdetails">
                  페이스북, 인스타그램 등 SNS 채널과 인플루언서마케팅을 결합하여
                  효율을 발휘할 수 있습니다. SNS마케팅에서는 타게팅/리타게팅
                  이후 다양한 채널의 믹스를 통해 효율적으로 광고를 집행할 수
                  있다는 장점이 있습니다. 그러나 모든 업종에 적합한 것은 아니기
                  때문에 비지니스모델에 대한 분석이 선행되어야 합니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetext">&nbsp;SEO/keyword</summary>
                <p className="subdetails">
                  업종과 지역 특성에 따라 각기 다양한 키워드 조합을 통한 마케팅
                  채널 운용을 필요로 합니다. 데이터기반의 키워드 세팅 이후에
                  다양한 채널을 운용하여야 비로소 의미있는 주요지표의 변화를
                  감지할 수 있을 것입니다
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetext">&nbsp;Mobile First</summary>
                <p className="subdetails">
                  궁금한게 생기면 사람들은 바로 모바일을 검색합니다. 모바일은
                  새로운 생활방식입니다. 모바일 검색량 데이터는 피씨검색량의
                  2~3배를 넘어선지 오래입니다. 모바일을 잡지 못하면 고객의 8할을
                  잃어버리는셈입니다. 모바일퍼스트 전략으로 구사하여 마케팅
                  효율을 극대화시킵니다
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetext">
                  &nbsp;Total Package
                </summary>
                <p className="subdetails">
                  하나의 업체가 성장하는데 필요한 모든 홍보 컨설팅과 마케팅을
                  지원해드리는 서비스입니다. 온라인의 다양한 채널들을 효율적으로
                  믹스하여 다양한 마케팅 상황 변화에 대응하여 리스크는
                  최소화하고 모객을 안정화시키는것이 목표입니다.
                </p>
              </details>
            </div>
            <p>
              <b>지역 1등 병원</b>이 되겠다는 마음가짐을 가진 분들을 모십니다.
              그러려면 까놓고 말해 <b>'이 구역 미친놈은 나야'</b> 정신이
              필요합니다. 우리는 클라이언트를 위해 기꺼이 미친놈이 되겠습니다.
              우리와 함께라면&nbsp;
              <span className="HL">지역 1등 병원</span>은 바로 당신입니다.
            </p>
          </div>
          <div className="Blank"></div>
        </Col>
      </Grid>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
