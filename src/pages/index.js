// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";
import Counter from "../components/elements/counter";
import Example from "../components/barchart";
import TypeIt from "typeit-react";
import { FaUserTie, FaRocket, FaHandsHelping } from "react-icons/fa";
import {
  GiStrong,
  GiArchiveResearch,
  GiPayMoney,
  GiSprout,
} from "react-icons/gi";
import { AiOutlineUnorderedList, AiOutlineComment } from "react-icons/ai";
import Link from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const SuperStrong = ({ children }) => {
  return (
    <strong style={{ fontSize: "55px", fontFamily: "Pretendard Thin" }}>
      {children}
    </strong>
  );
};

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Marketing Is Everything">
      <div className="Blank"></div>

      <div className="top">
        <center>
          <h1>
            <TypeIt element={"h1"}>
              한의사가 직접 하는 <SuperStrong>모든마케팅</SuperStrong>
            </TypeIt>
          </h1>
        </center>
        <br></br>
      </div>
      <div className="Blank"></div>
      <section>
        <h2>
          <div className="icon">
            <FaUserTie />
          </div>
          <TypeIt
            options={{
              waitUntilVisible: true,
            }}
          >
            &nbsp;&nbsp;현직한의삽니다
          </TypeIt>
        </h2>

        <div
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <p>
            <span className="HL">모든마케팅</span>은 현직한의사가 직접 운영하는
            마케팅 대행사입니다. 한의원 고객에서 시작해 현재는 다양한 전문직을
            대상으로 매출 증진을 위한 다양한 마케팅을 진행하고 있습니다.
          </p>
        </div>
      </section>
      <div className="Blank"></div>

      <section>
        <h2>
          <div className="icon">
            <GiArchiveResearch />
          </div>
          <TypeIt
            options={{
              waitUntilVisible: true,
            }}
          >
            &nbsp;&nbsp;안해본 게 없습니다
          </TypeIt>
        </h2>
        <div
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <p className="etc">
            블로그, 파워링크, 네이버플레이스, 브랜드컨텐츠, 페이스북,
            인스타그램, 구글애즈, 키워드광고, 배너광고, 강남언니, 굿닥,
            카카오스토리, 유튜브, 네이버, 다음, 티스토리, 커뮤니티, 맘카페,
            버스광고, 마트광고.........{" "}
          </p>
          <p>
            그야말로 <span className="HL">실전마케팅</span>입니다. 대행사가 아닌
            사업주의 관점을 누구보다 잘 이해하고 있습니다. 실제 사업을
            운영하면서 매출을 늘리기 위해 시도했던 모든 경험을 바탕으로 가장
            효과적인 마케팅 전략을 수립합니다. 각 마케팅채널에 대한 모든마케팅의
            의견은 칼럼을 참고해주세요.
          </p>
          <div>
            <button className="button">
              <div className="icon">
                <AiOutlineUnorderedList />
              </div>{" "}
              &nbsp;&nbsp;칼럼 보러가기
            </button>
          </div>
        </div>
        <br></br>
      </section>
      <div className="Blank"></div>

      <section>
        <h2>
          <div className="icon">
            <AiOutlineComment />
          </div>
          <TypeIt
            options={{
              waitUntilVisible: true,
            }}
          >
            &nbsp;&nbsp;원장님 보건소에서 전화왔는데요
          </TypeIt>
        </h2>
        <div
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <p>
            성형외과, 병원, 한의원, 치과를 비롯해 변호사까지 전문직 광고는
            특수한 광고법에 의해 관리됩니다.{" "}
            <span className="HL">철저하게 검수</span>
            하지 못한 경우에는 광고법위반으로 인한 불상사가 발생하기도 합니다.
            특히 마케팅 경쟁이 치열해질 수록 관련 민원도 증가하는 추세입니다.
            마케팅을 잘 알아야하는 동시에 광고법에 대해서도 알아야하는게 전문직
            광고입니다.
          </p>
        </div>
      </section>
      <div className="Blank"></div>

      <section>
        <h2>
          <div className="icon">
            <GiPayMoney />
          </div>
          <TypeIt
            options={{
              waitUntilVisible: true,
            }}
          >
            &nbsp;&nbsp;혹시 헛돈만 써왔나요?
          </TypeIt>
        </h2>
        <div
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <p>
            큰맘먹고 돈들여 마케팅 대행을 한번이라도 맡겨본 분들이라면
            모든마케팅의 비교불가 <span className="HL">압도적인 퍼포먼스</span>
            에 놀라십니다. 돈은 돈대로 나가고 고객은 늘지 않아, 헛돈만 쓴 그
            기분을 누구보다 잘 알고 있습니다. 누구보다 이 부분을 고민해왔기에
            마케팅비용대비매출을 극대화하기 위해 지속적인 노력했고 지금은
            자신있게 저희의 서비스를 누구에게도 권할 수 있습니다. 아는 사람이 더
            놀라는 모든마케팅의 서비스를 미리 경험해보고 싶다면 무료체험을
            신청해보세요.
          </p>

          <div>
            <AnchorLink to="/#contact">
              {" "}
              <button className="button">무료체험 신청하기</button>
            </AnchorLink>
          </div>
          <br></br>
          <br></br>
        </div>
      </section>
      <div className="Blank"></div>

      <section>
        <Grid cols="12" gap="10px">
          <Col xxl="4" md="6" sm="12">
            <h2>
              <div className="icon">
                <GiStrong />
              </div>

              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                &nbsp;&nbsp; 이런 일을 잘합니다
              </TypeIt>
            </h2>
          </Col>
          <Col xxl="8" md="6" sm="12">
            <div>
              <p className="subtitle">
                <b>비지니스모델</b> 분석
              </p>
              <p className="subtext">
                진료아이템, 입지, 환자구성 등 비지니스모델을 분석해서 마케팅을
                통한 매출 증가분을 추정합니다.
              </p>
              <p>
                효과적인 <b>마케팅전략</b> 수립
              </p>
              <p className="subtext">
                비지니스모델, 마케팅예산 등 요소를 종합적으로 고려하여 가장
                효과적인 마케팅계획을 세웁니다.
              </p>
              <p>
                다양한 마케팅 <b>채널운영</b>
              </p>
              <p className="subtext">
                검색상위노출, SEO, CPC, 퍼포먼스마케팅, 페이스북, 인스타그램,
                유튜브, 언론홍보 등 다양한 채널을 운영합니다.
              </p>
            </div>
          </Col>
        </Grid>
      </section>
      <div className="Blank"></div>

      <section>
        <Grid cols="12" gap="10px">
          <Col xxl="4" md="6" sm="12">
            <div>
              <h2>
                <div className="icon">
                  <FaHandsHelping />
                </div>
                &nbsp;&nbsp;Our Clients.
              </h2>
            </div>
          </Col>
          <Col xxl="8" md="6" sm="12">
            <div data-sal="fade" data-sal-duration="300" data-sal-easing="ease">
              <div>
                <p className="client">
                  가_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_가나다라한의원_가나한의원_나다한의원_가나다라한의원_가나한의원_가나다한의원_가나다한의원_가나다한의원_가나다한의원_가나다한의원_가나다한의원_가나다한의원_가나다한의원_가나다한의원
                </p>
                <h2>
                  <Counter value={132} suffix={"개 클라이언트"} />{" "}
                  <Counter value={87.1} suffix={"% 재계약률"} />
                </h2>

                <p style={{ textAlign: "right" }}>
                  <b>당신</b>을 기다립니다.
                </p>
              </div>
            </div>
          </Col>
        </Grid>
      </section>
      <div className="Blank"></div>

      <section>
        <h2>
          <div className="icon">
            <GiSprout />
          </div>
          <TypeIt
            options={{
              waitUntilVisible: true,
            }}
          >
            &nbsp;&nbsp; 고객과 함께 자라기
          </TypeIt>
        </h2>
        <div
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <p className="quote">
            "혼자 진료하던 병원에 부원장님이 두명이나 생겼어요"
          </p>
          <p className="quote">
            "대표님만 믿고 시작했는데 결과가 만족스러워요"
          </p>
          <p className="quote">
            "무엇보다 고객에게만 집중 할 수 있어 너무 좋아요"
          </p>

          <p>
            이미 많은 클라이언트분들이 모든마케팅과 함께 성공적인 사업을
            이끌어나가고 계십니다. 클라이언트가 비지니스의 본질적인 가치를
            고객에게 전달하는데 집중할 수 있게 마케팅과 매출 고민은 저희가 대신
            합니다.
          </p>
          <div>
            <center>
              <Example />
              <p className="etc">
                경기 A업체 3월 광고집행 시작(매출 2.5배 상승)
              </p>
            </center>
          </div>
        </div>
        <br></br>
      </section>
      <div className="Blank"></div>

      <section>
        <h2>
          <div className="icon">
            <FaRocket />
          </div>
          <TypeIt
            options={{
              waitUntilVisible: true,
            }}
          >
            &nbsp;&nbsp;직접 체험해보세요
          </TypeIt>
        </h2>
        <div
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <p>
            매출로 이어지지 않는 마케팅에 시간낭비, 돈낭비 하고 계시지는 않나요?
            해도그만 안해도그만이라 마케팅을 어떻게 해야할지 고민이신가요?
            모든마케팅의 서비스는 무료체험만으로도 매출이 오르는 걸 체감할 수
            있습니다. 이제 그만 매출 걱정, 마케팅 걱정은 내려놓고 전문직 본연의
            업무에 더 집중하실 수 있게 도와드립니다.
          </p>
          <div>
            <AnchorLink to="/#contact">
              {" "}
              <button className="button">무료체험 신청하기</button>
            </AnchorLink>
          </div>
          <br></br>

          <div>
            <button className="button">광고상품제안서 받기</button>
          </div>
          <br></br>

          <div>
            <button className="button">서비스 보러가기</button>
          </div>
        </div>
        <div className="Blank"></div>
      </section>
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
