// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Contact from "../components/contact";
import { Link } from "gatsby";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";
import ReactRoundedImage from "react-rounded-image";
import Photo from "../images/profile_removebg.png";
import { GiSprout } from "react-icons/gi";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Contact Us">
      <Grid cols="12" gap="10px">
        <Col xxl="2" md="6" sm="12"></Col>
        <Col xxl="8" md="6" sm="12">
          <Contact />
        </Col>
        <Col xxl="2" md="6" sm="12"></Col>
      </Grid>
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
