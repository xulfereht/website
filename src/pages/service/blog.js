// Step 1: Import React
import * as React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";
import { StaticImage } from "gatsby-plugin-image";
import TypeIt from "typeit-react";
import { AiOutlineUnorderedList, AiOutlineComment } from "react-icons/ai";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Example from "../../components/barchart";
import Pricingtable from "../../components/pricingtable";
import { GiPlanetConquest } from "react-icons/gi";

const SuperStrong = ({ children }) => {
  return (
    <strong style={{ fontSize: "45px", fontFamily: "Noto Sans KR" }}>
      {children}
    </strong>
  );
};

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="블로그 마케팅">
      <Link to="/service/betatester" className="cta">
        무료체험 이벤트신청
      </Link>

      <div className="Blank"></div>
      <div className="top">
        <center>
          <h1>
            <TypeIt element={"h1"}>
              나만 알고 싶은 <SuperStrong>블로그마케팅</SuperStrong>
            </TypeIt>
          </h1>
        </center>
      </div>

      <Grid cols="12" gap="10px">
        <Col xxl="4" md="6" sm="12">
          <div>
            <h2>
              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                대표님이 미쳤어요
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              마케팅 대행사의 기본 관행에서 벗어나{" "}
              <span className="HL">파괴적인 가격</span>과 효율로
              도와드리겠습니다. 모든마케팅에서 유일무이, <b>마케팅 효율의 끝</b>
              을 경험해 보세요!
            </p>
          </div>
          <div className="Blank"></div>
        </Col>
        <Col xxl="4" md="6" sm="12">
          <div>
            <h2>
              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                비교불가 절대우위
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div
            className="tablecell"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              <b>지역 1등 병원</b>이 되겠다는 마음가짐을 가진 분들을 모십니다.
              그러려면 까놓고 말해 <b>'이 구역 미친놈은 나야'</b> 정신이
              필요합니다. 우리는 클라이언트를 위해 기꺼이 미친놈이 되겠습니다.
              고퀄리티 포스팅의 대량물량 폭탄 투하로 지역내 마케팅 경쟁에서
              압도적인 우위를 점하는 전략을 완성합니다. 우리와 함께라면&nbsp;
              <span className="HL">지역 1등 병원</span>은 바로 당신입니다.
            </p>

            <div className="details"></div>
            <div className="details">
              <details>
                <summary className="buttontypetext">
                  &nbsp;압도적인 포스팅당 비용
                </summary>
                <p className="subdetails">
                  유례 없는 파격적인 단가에 고퀄리티 포스팅으로 상위노출이
                  가능합니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetext">
                  &nbsp;압도적인 물량
                </summary>
                <p className="subdetails">
                  '이 새끼들 미친새끼들인가' 싶은 물량 폭탄으로 지역내
                  검색수요를 장악합니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetext">
                  &nbsp;압도적인 가성비
                </summary>
                <p className="subdetails">
                  모든마케팅의 서비스는 인하우스 직원 여럿을 두고 직접 운영해도
                  내기 어려운 효율을 자랑합니다. 직원 한명 비용으로 상당한
                  규모의 마케팅팀을 운영하는 효과를 내드립니다.
                </p>
              </details>
            </div>
          </div>
          <div className="Blank"></div>
        </Col>
        <Col xxl="4" md="6" sm="12">
          <div>
            <h2>
              {" "}
              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                트렌드를 만듭니다
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              우리는 스스로 <span className="HL">업계를 선도</span>
              하고 있다고 자부합니다. 트렌드에 민감한 일부 경쟁업체들은
              모든마케팅의 마케팅 기법을 벤치마킹하고 있습니다. 우리는 여기서
              만족하지 않고 지속적인 실험을 통해 마케팅 효율의 극한을 위해
              노력합니다. 마케팅
              <b> 꾼들이 먼저 알아보는</b> 우리와 함께 성장하세요.
            </p>
            <p>
              우리의 마케팅철학과 구체적인 방법론이 궁금하신 분들은 칼럼 글을
              참고해주세요.
            </p>
            <div>
              <Link to="/tags/마케팅칼럼">
                <button className="button">
                  <div className="icon">
                    <AiOutlineUnorderedList />
                  </div>{" "}
                  &nbsp;&nbsp;칼럼 보러가기
                </button>
              </Link>
            </div>
          </div>
          <div className="Blank"></div>
        </Col>
        <Col xxl="4" md="6" sm="12">
          <div>
            <h2>
              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                상황에 따라 골라쓰세요
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div
            className="tablecell"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <div className="details"></div>
            <div className="details">
              <details>
                <summary className="buttontypetext">
                  &nbsp;마케팅 경험이 있다면
                </summary>
                <p className="subdetails">
                  이미 마케팅을 하고 있다면 객관적으로 견적 비교를 해보세요.
                  마케팅에 대한 이해가 어느 정도 있다면 모든마케팅과 함께 하지
                  않을 이유를 찾기 어려울 겁니다. 더 낮은 가격에 더 많은 포스팅,
                  더 나은 효과를 기대할 수 있습니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetext">
                  &nbsp;마케팅 경험이 없다면
                </summary>
                <p className="subdetails">
                  좋은 대행사를 만나는 것이 첫 단추가 됩니다. 마케팅에 대한 전체
                  그림을 그리실 수 있게 마케팅전략부터 구체적인 플랜까지 친절히
                  상담드리겠습니다.
                </p>
              </details>
            </div>
            <div className="details">
              <details>
                <summary className="buttontypetext">
                  &nbsp;프랜차이즈 본사인 경우
                </summary>
                <p className="subdetails">
                  여러 가맹점의 마케팅을 전담해야 하는 프랜차이즈 본사라면,
                  저희가 실행사 레벨에서 서포트를 해드립니다. 체계적인 포스팅
                  리포트 및 노출현황 모니터링을 통해 지점별 관리를 효율적으로
                  진행할 수 있습니다. 기타 특별한 서비스가 필요하다면 역으로
                  제안해주셔도 좋습니다.
                </p>
              </details>
            </div>

            <p>
              마케팅 경험 또는 이해도에 따라{" "}
              <span className="HL">맞춤형 컨설팅</span>을 해드릴 예정이니,
              궁금한 사항은 하단의 상담신청 버튼을 활용해주세요.
            </p>
            <div>
              <AnchorLink to="#contact">
                {" "}
                <button className="button">상담신청하기</button>
              </AnchorLink>
            </div>
          </div>
          <div className="Blank"></div>
        </Col>

        <Col xxl="4" md="6" sm="12">
          <div>
            <h2>
              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                미리 경험하세요
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div
            className="tablecell"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <p>
              모든마케팅의 서비스를 먼저 체험해보고 싶다면 무료체험 이벤트를
              활용하세요.{" "}
            </p>
            <div>
              <Link to="/service/betatester">
                <button className="button">
                  <div className="icon">
                    <AiOutlineUnorderedList />
                  </div>{" "}
                  &nbsp;&nbsp;무료체험신청
                </button>
              </Link>
            </div>
          </div>
          <div className="Blank"></div>
        </Col>
        <Col xxl="4" md="6" sm="12">
          <div>
            <h2>
              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                직접 보여드립니다
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <center>
              <div className="noticeCard">
                {" "}
                <p className="notice">
                  🚧 시스템 업데이트로 인해 더욱 강력해졌습니다! (May,2022.)
                </p>
              </div>
            </center>
            <p>
              {" "}
              경쟁이 치열해서 건바이나 월보장으로 비싸게 사용하던 키워드 포함{" "}
              <b>무엇이든 잡아드립니다!</b>
            </p>
            <div className="details"></div>
            <div className="details">
              <details>
                <summary className="buttontypetext">
                  요청가능 키워드목록
                </summary>
                <ul>
                  <li>지역 + 한의원, 교통사고한의원, 다이어트</li>
                  <li>지역 + 교통사고한의원</li>
                  <li>지역 + 치과, 임플란트</li>
                  <li>지역 + 성형외과, 정형외과, 수술병원</li>
                  <li>지역 + 동물병원</li>
                  <li>지역 + 변호사, 이혼변호사, 형사변호사</li>
                  <li>기타 요청 키워드</li>
                </ul>
              </details>
            </div>
            <center>
              <div className="card">
                <center>
                  <StaticImage src="./images/service_blog_1.png" width={350} />{" "}
                </center>
                <p className="notice">
                  '메인지역' + <b>교통사고한의원</b> 상위노출 사례
                </p>
              </div>
            </center>
          </div>
          <center>
            <div className="card">
              <center>
                <StaticImage src="./images/service_blog_4.png" width={350} />{" "}
              </center>
              <p className="notice">
                '메인지역' + <b>임플란트</b> 상위노출 사례
              </p>
            </div>
          </center>
          <div className="Blank"></div>
        </Col>
        <Col xxl="4" md="6" sm="12">
          <div>
            <h2>
              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                다른 분들의 후기
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div>
            <div
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <p>
                이미 많은 클라이언트분들이 모든마케팅과 함께 성공적인 사업을
                이끌어나가고 계십니다. 클라이언트가 비지니스의 본질적인 가치를
                고객에게 전달하는데 집중할 수 있게 마케팅과 매출 고민은 저희가
                대신 합니다.
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
            <div
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <center>
                <div className="card">
                  <center>
                    <StaticImage
                      src="./images/service_blog_2.png"
                      width={300}
                    />{" "}
                  </center>
                  <p className="notice">
                    서울 ㅇㅇ구 반특화한의원 (1년 이상 이용중)
                  </p>
                </div>
              </center>
              <center>
                <div className="card">
                  <center>
                    <StaticImage
                      src="./images/service_blog_3.png"
                      width={300}
                    />{" "}
                  </center>
                  <p className="notice">
                    지역 광역시 동네한의원 (1년 이상 이용중)
                  </p>
                </div>
              </center>
            </div>
          </div>
          <div className="Blank"></div>
        </Col>

        <Col xxl="12" md="6" sm="12">
          <div>
            <h2>
              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                서비스 비용
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="12" md="6" sm="12">
          <div>
            <Pricingtable />
          </div>
        </Col>
      </Grid>
      <div className="divmargin">
        <div>
          <h2>더 궁금한 점이 있다면?</h2>

          <p>
            먼저 FAQ 페이지에서 해당 내용을 찾아보세요. 그래도 궁금증이 해소되지
            않는다면 문의하기 메뉴를 활용해주세요.
          </p>

          <div>
            <Link to="/service/faq" target="_blank">
              <button className="button">&nbsp;&nbsp;자주 묻는 질문 </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Blank"></div>
      <div>
        <h2 id="contact">
          <div className="icon">
            <GiPlanetConquest />
          </div>{" "}
          Contact Us.
        </h2>
        <div>
          <p>
            효율적인 커뮤니케이션을 위해 비대면 응대를 원칙으로 하고 있습니다.
            궁금한 점이 있으시다면 아래 내용을 남겨주세요. 최대한 빠르게 답변
            드리겠습니다.
          </p>
        </div>
      </div>
      <div id="contact">
        <div>
          <a href="https://form.typeform.com/to/sS9ViGNy" target="_blank">
            <button className="button">문의하기</button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
