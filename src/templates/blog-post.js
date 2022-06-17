import * as React from "react";
import { Link, graphql } from "gatsby";
import { Grid, Row, Col, Cell } from "react-styled-grid-layout";

import Layout from "../components/layout";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <Grid cols="12" gap="10px">
        <Col xxl="1" md="6" sm="12"></Col>

        <Col xxl="10" md="6" sm="12">
          <h1 className="blogTitle">{post.frontmatter.title}</h1>
          <p className="subtext">
            <span className="blogSub">
              <b>모든마케팅</b>
            </span>{" "}
            · {post.frontmatter.date}
          </p>
          {post.frontmatter.tags.map((tag) => (
            <Link to={`/tags/${tag}`} className="tagbtn">
              {tag}
            </Link>
          ))}
          <div className="topBlank"></div>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <div className="topBlank"></div>

          <div>
            {next ? (
              <div className="blogNav">
                <Link to={next.fields.slug}>
                  Next : {next.frontmatter.title}
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            {previous ? (
              <div className="blogNav">
                <Link to={previous.fields.slug}>
                  Prev : {previous.frontmatter.title}
                </Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </Col>
        <Col xxl="1" md="6" sm="12"></Col>

        <div className="Blank"></div>
      </Grid>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
