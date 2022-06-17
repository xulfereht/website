import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { layout, heading, blink } from "./layout.module.css";
import Logo from "../assets/logo.svg";
import Header from "./header";
import Navbar from "./Navbar/Navbar";
import Part from "../components/particles";
import { GiPlanetConquest } from "react-icons/gi";
import { Helmet } from "react-helmet";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="naver-site-verification"
          content="f434ac47dc8b12e02f6996c1dfbec8defa6bf923"
        />
        <link rel="canonical" href="https://www.moden.marketing/" />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>

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
        <main>
          {children}

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
