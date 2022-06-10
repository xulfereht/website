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
    <Layout pageTitle="About Me">
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
            안녕하세요. <b>현직한의사</b>이자 모든마케팅 대표 <b>안상완</b>입니다.
          </p>
          <p>
            모든마케팅 임직원은 끊임없이 배우고 익히면서 고객사 분들이
            더 많은 고객과 접점을 만들어 갈 수 있게 노력하고 있습니다.
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
        </Col>
      </Grid>
      <div className="Blank"></div>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
