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

const SuperStrong = ({ children }) => {
  return (
    <strong style={{ fontSize: "55px", fontFamily: "Pretendard Thin" }}>
      {children}
    </strong>
  );
};

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="블로그 마케팅">
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
          <p>
            마케팅 대행사의 기본 관행에서 벗어나 <span className = "HL">파괴적인 가격</span>과 효율로
            도와드리겠습니다. 모든마케팅에서 유일무이, 마케팅 효율의 끝을 경험해
            보세요!
          </p>
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
                압도적인 물량!
              </TypeIt>{" "}
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <p> 업계 평균 단가 대비 8~13만원 저렴합니다</p>
          <p>업계 평균 포스팅수 대비 4~6배 많습니다</p>
          <p>업계 평균 마케팅비용 대비 28% 이상 낮습니다 </p>
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
          <p>
            모든마케팅의 마케팅 기법은 <span className = "HL">업계를 선도</span>하고 있습니다. 트렌드에 민감한
            일부 경쟁업체들은 모든마케팅의 마케팅 기법을 벤치마킹하고 있습니다.
            업계에서 인정받는 것은 물론이거니와 지속적인 실험을 통해 마케팅
            효율의 극한을 위해 노력합니다. 마케팅을 제법 아는 사람들이 먼저
            알아보는 모든마케팅과 함께 성장하세요..
          </p>
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
                상황에 따라 골라쓰는
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div>
            <details>
              <summary>다른 대행사를 활용중인 경우</summary>
              <p>
                객관적인 견적 비교를 해보세요. 이미 마케팅을 하고 있거 마케팅에
                대한 이해가 어느 정도 있다면 모든마케팅을 안할 이유를 찾기
                어렵습니다.더 낮은 가격에 더 많은 포스팅, 더 나은 효과를 기대할
                수 있습니다
              </p>
            </details>
            <details>
              <summary>마케팅 경험이 없고 이제 시작하려는 경우</summary>
              <p>
                좋은 대행사를 만나는 것이 첫 단추가 됩니다. 마케팅에 대한 전체
                그림을 그리실수 있게 마케팅전략부터 친절히 상담드리겠습니다.
              </p>
            </details>
            <p className = "subtext">
              마케팅 경험 또는 이해도에 따라 <span className = "HL">맞춤식 컨설팅</span>을 해드릴 예정이니,
              하단의 상담신청 파트를 참고 부탁드립니다.
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
              {" "}
              <TypeIt
                options={{
                  waitUntilVisible: true,
                }}
              >
                마케팅 방식이 궁금해요{" "}
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <p>자세한 내용은 칼럼 글을 참고해주세요.</p>
          <div>
            <button className="button">
              <div className="icon">
                <AiOutlineUnorderedList />
              </div>{" "}
              &nbsp;&nbsp;칼럼 보러가기
            </button>
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
                실제 노출 사례
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <p>
            시스템 업데이트로 인해 전반적인 키워드 노출도가 향상 되었습니다!
            (2022.05 기준)
          </p>
          <p>경쟁이 치열한 '메인지역키워드' + '교통사고한의원' 상위노출 사례</p>
          <StaticImage src="./images/service_blog_1.png" width={350} />
          <p>
            {" "}
            경쟁이 치열해서 건바이나 월보장으로 비싸게 사용하던 키워드도
            잡아드립니다
          </p>
          <details>
            <summary> 키워드 예시 </summary>
            <p>지역+한의원, 지역+교통사고한의원, 메인질환, 시술 키워드 등</p>
          </details>
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
                다른 분들의 후기
              </TypeIt>
            </h2>
          </div>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <div>
            <p>서울 ㅇㅇ구 반특화한의원 (1년 이상 이용중)</p>
            <StaticImage src="./images/service_blog_2.png" width={300} />
          </div>
          <div>
            <p>지역 광역시 동네한의원 (1년 이상 이용중)</p>

            <StaticImage src="./images/service_blog_3.png" width={300} />
          </div>
        </Col>
      </Grid>
      <div className="Blank"></div>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
