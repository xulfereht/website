// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";
import ReactRoundedImage from "react-rounded-image";
import Photo from "../images/profile.png";
import { GiSprout } from 'react-icons/gi';



// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
     
      <h2> <div className = "icon">< GiSprout /></div>&nbsp;&nbsp;대표 인사말</h2>
<div className="Blank"></div>


<Grid cols="12" gap="10px">
 
          <Col xxl="4" md="6" sm="12">
      <div align= "center">   
      <ReactRoundedImage

          image={Photo}
          roundedColor="#000"
          imageWidth="150"
          imageHeight="150"
          roundedSize="2"
          borderRadius="90"
        /></div>
      </Col>
    <Col xxl="8" md="6" sm="12">
       
      <p>
        안녕하세요. <b>현직한의사</b>이자 모든마케팅 대표 안상완입니다.
      </p>
      </Col>
      </Grid>
<div className="Blank"></div>

    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
