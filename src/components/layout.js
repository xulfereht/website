import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { layout, heading, blink } from "./layout.module.css";
import Logo from "../assets/logo.svg";
import Header from "./header";
import Navbar from "./Navbar/Navbar";
import Part from "../components/particles";
import Widget from "../components/typeform"
import { GiPlanetConquest } from 'react-icons/gi';


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Part />
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}
      <h2 id = "contact"><div className = "icon"><GiPlanetConquest /></div> Contact Us.</h2>
      <div><p>궁금한 점이 있으시다면 아래 내용을 남겨주세요. 최대한 빠르게 답변 드리겠습니다.</p></div>
      <center><Widget /></center>
</main>
            </div>

      <footer>
        <p>ⓒ 모든마케팅 2022.</p>
        <p></p>
        <p>
         <span>Email. contact@thebareuncs.com</span>
          <br />
          <span>Biz License. 176-01-01166</span>
          <br />
          <span> 서울특별시 강남구 선릉로 529 2F,2128</span>
      <br />
            <span>대표자 : 안상완</span>
       

        </p>
      </footer>
    </>
   
  );
};

export default Layout;
