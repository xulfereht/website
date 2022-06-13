// Step 1: Import React
import * as React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";
import Photo from "../../images/profile_removebg.png";
import { GiSprout } from "react-icons/gi";
import { StaticImage } from "gatsby-plugin-image";
import TypeIt from "typeit-react";
import { AiOutlineUnorderedList, AiOutlineComment } from "react-icons/ai";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Example from "../../components/barchart";

const SuperStrong = ({ children }) => {
  return (
    <strong style={{ fontSize: "45px", fontFamily: "Pretendard Thin" }}>
      {children}
    </strong>
  );
};

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="서비스 사용가이드">
      <h2>서비스 사용가이드</h2>
      <p>
        저희 서비스를 이용하신다면 아마 이 페이지에 자주 접속하실 거에요.
        <b>즐겨찾기</b>에 추가해두시면 좋을 거에요.
      </p>

      <div className="divmargin">
        <div>
          <h3>인트라넷 사용안내</h3>

          <p>
            마케팅 실행 현황을 확인하려면 인트라넷에 접속하세요. 인트라넷에서는
            다음과 같은 정보를 확인할 수 있습니다. (아이디, 비번 별도고지)
          </p>
          <ul className="subdetails">
            <li>광고소재 시안 확인</li>
            <li>포스팅 현황 확인</li>
            <li>키워드 검색노출 현황확인</li>
          </ul>

          <div>
            <a href="http://15.165.166.27/" target="_blank">
              <button className="button">&nbsp;&nbsp;인트라넷 접속</button>
            </a>
          </div>
        </div>
      </div>
      <div className="Blank"></div>

      <div className="divmargin">
        <div>
          <h3>궁금한 점이 있다면?</h3>

          <p>
            먼저 FAQ 페이지에서 해당 내용을 찾아보세요. 그래도 궁금증이 해소되지 않는다면 문의하기 메뉴를 활용해주세요.
          </p>
          

          <div>
            <Link to="/service/faq" target="_blank">
              <button className="button">&nbsp;&nbsp;자주 묻는 질문 </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Blank"></div>

      <div className="divmargin">
        <div>
          <h3> 요청사항이 있는 경우</h3>
          <p>마케팅을 집행하다 보면 다양한 요청사항이 발생하게 됩니다.</p>
          <ul className="subdetails">
            <li>컨텐츠 내용의 변경</li>
            <li>키워드의 변경</li>
            <li>아이디의 추가</li>
            <li>추가물량 요청</li>
            <li>기타 돌발상황 처리</li>
          </ul>
          <p>
            요청사항이 있는 경우 아래 버튼을 활용해서 문의를 남겨주세요.
            가급적이면 정해진 형식에 따라 요청을 남겨주시면 보다 빠른 처리가
            가능합니다.
          </p>
          <p className="quote">
            예시) <br></br>
            상호명: 모든한의원<br></br>
            요청항목: 키워드 변경<br></br>
            상세: 지역 키워드 강남역 제거 후 신논현역으로 변경 요청합니다.
            <br></br>
          </p>
        </div>
        <div>
          <a href="https://3x4wy.channel.io" target="_blank">
            <button className="button">&nbsp;&nbsp;요청사항 남기기</button>
          </a>
        </div>
      </div>

      <div className="Blank"></div>
      <div className="Blank"></div>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
