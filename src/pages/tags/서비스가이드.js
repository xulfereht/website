import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="서비스가이드">
      <Grid cols="12" gap="10px">
        <Col xxl="3" md="6" sm="12">
          <h2>서비스 가이드</h2>
        </Col>
    
        <Col xxl="9" md="6" sm="12">      <p>서비스 이용과 관련된 문서 목록입니다.</p>
            <ul>      
      {data.allMarkdownRemark.nodes.map((node) => (
          <article key={node.id}>
              <Link to={`${node.fields.slug}`}>
                  <li> {node.frontmatter.title}</li></Link>
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
  allMarkdownRemark(filter: {frontmatter: {tags: {eq: "서비스가이드"}}}) {
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

