import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <Grid cols="12" gap="10px">
        <Col xxl="4" md="6" sm="12">
          <h3>{data.mdx.frontmatter.title}</h3>
          <p className="subtext">{data.mdx.frontmatter.date}</p>
        </Col>
        <Col xxl="8" md="6" sm="12">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Col>
        <div className="Blank"></div>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
