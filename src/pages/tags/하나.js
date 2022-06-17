import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="마케팅 칼럼">
      <Grid cols="12" gap="10px">
        <Col xxl="3" md="6" sm="12">
          <h2>전문가 칼럼</h2>
        </Col>
    
        <Col xxl="9" md="6" sm="12">      <p>칼럼에는 우리의 마케팅철학과 전략을 소개합니다</p>
        {data.allMarkdownRemark.nodes.map((node) => (
          <article key={node.id}>
              <Link to={`${node.fields.slug}`}>
                <div className = 'blogCard'>
                  {node.frontmatter.title}</div></Link>
          </article>
        ))}
</Col>
      </Grid>

      <div className="Blank"></div>
    </Layout>
  );
};

export const query = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {tags: {eq: "하나"}}}) {
    nodes {
      id
      fields {
        slug
      }
      frontmatter {
        title
        date
      }
    }
  }
}
`  
;

export default BlogPage;

