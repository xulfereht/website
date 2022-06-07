import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { layout, heading, blink } from "./layout.module.css";
import Logo from "../assets/logo.svg";
import Header from "./header";
import Navbar from "./Navbar/Navbar";

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

      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        <p>ⓒ 모든마케팅 2022.</p>
        <p></p>
        <p>
          <span>Email. abc@def.com</span>
          <br />
          <span>Biz License 000-00000-00</span>
          <br />
          <span>강남구 강남대로 21</span>
        </p>
      </footer>
    </>
   
  );
};

export default Layout;
