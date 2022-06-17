import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="유저매뉴얼 목록">
      <Grid cols="12" gap="10px">
        <Col xxl="3" md="6" sm="12">
          <h2>유저매뉴얼 목록</h2>
        </Col>
    
        <Col xxl="9" md="6" sm="12">      <p>서비스 이용과 관련된 문서 목록입니다. 목록은 지속적으로 추가 및 갱신됩니다.</p>
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
  allMarkdownRemark(filter: {frontmatter: {tags: {eq: "유저매뉴얼"}}}) {
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

