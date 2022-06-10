import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <Grid cols="12" gap="10px">
        <Col xxl="4" md="6" sm="12">
          <h2>전문가 칼럼</h2>
        </Col>
    
        <Col xxl="8" md="6" sm="12">      <p>칼럼에는 우리의 마케팅철학과 전략을 소개합니다</p>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
              <Link to={`/blog/${node.slug}`}>
                <div className = "blogCard">{node.frontmatter.title}</div>
              </Link>
          </article>
        ))}
      </ul>
</Col>
      </Grid>

      <div className="Blank"></div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;
export default BlogPage;
