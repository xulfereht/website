// NavbarLinks.js

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #ff0266;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #ff0266;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">홈</NavItem>

      <NavItem to="/about">회사소개</NavItem>
      <NavItem to="/service/blog">서비스</NavItem>
      <NavItem to="/blog">칼럼</NavItem>
      <NavItem to="#contact">문의하기</NavItem>
    </>
  );
};

export default NavbarLinks;
