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
            {post.frontmatter.tags[0] === "유저매뉴얼" ? (
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
                <div className="blogNav">
                  <Link to="/tags/유저매뉴얼/">매뉴얼 목록으로</Link>
                </div>
              </div>
            ) : (
              <div className="blogNav">
                <Link to="/tags/마케팅칼럼/">마케팅칼럼 목록으로</Link>
              </div>
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
    previous: markdownRemark(
      id: { eq: $previousPostId }
      frontmatter: { tags: { eq: "유저매뉴얼" } }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(
      id: { eq: $nextPostId }
      frontmatter: { tags: { eq: "유저매뉴얼" } }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
