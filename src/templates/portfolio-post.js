import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import MarkdownContent from "../components/MarkdownContent";

export const PortfolioPostTemplate = ({
  company,
  tags,
  title,
  featuredimage,
  helmet,
  steps,
}) => {
  return (
    <section className="section">
      {helmet || ""}
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12">
            <Link className="has-text-weight-bold" to="/">
              Go Back
            </Link>
            <div
              className="is-hidden-touch"
              style={{
                height: "1em",
              }}
            ></div>
            <h1
              className="is-size-1 has-text-black"
              style={{
                fontWeight: "500",
                lineHeight: "1.25",
                marginBottom: "0.15em",
              }}
            >
              {title}
            </h1>
            <h3
              className="has-text-weight-light has-text-grey-dark"
              style={{
                fontSize: "1.7em",
                fontWeight: "300",
                marginBottom: "0.5rem",
              }}
            >
              {company}
            </h3>
          </div>
          {featuredimage ? (
            <div className="column is-12">
              <div
                style={{
                  backgroundImage: `url(${
                    !!featuredimage.childImageSharp
                      ? featuredimage.childImageSharp.fluid.src
                      : featuredimage
                  })`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  height: `450px`,
                }}
              ></div>
            </div>
          ) : null}

          {steps.row && steps.row.length
            ? steps.row.map((step, ind) => (
                <div className="column is-12" key={ind + `-step`}>
                  <div className="columns">
                    {step.name ? (
                      <div className="column is-4">
                        <h2
                          style={{
                            fontSize: "1.22em",
                            color: "rgba(0,0,0,0.8)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {step.number.toString() > 0
                            ? step.number.toString().length === 1
                              ? "0" + parseInt(step.number, 10)
                              : step.number
                            : null}
                          <span
                            className="has-text-grey-light"
                            style={{
                              width: "5.5em",
                              display: "inline-block",
                              borderBottom: "1px solid #979797",
                              margin: "0 10px",
                            }}
                          ></span>
                          {step.name}
                        </h2>
                      </div>
                    ) : null}
                    {step.name ? (
                      <div className="column" style={{ marginTop: "1.7em" }}>
                        <MarkdownContent content={step.description} />
                      </div>
                    ) : (
                      <div className="column">
                        <MarkdownContent content={step.description} />
                      </div>
                    )}
                  </div>
                </div>
              ))
            : null}
          {tags && tags.length ? (
            <div className="column is-12">
              <div className="tags">
                {tags.map((tag) => (
                  <span className="tag" key={tag + `tag`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
PortfolioPostTemplate.propTypes = {
  description: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.any,
  steps: PropTypes.shape({
    row: PropTypes.array,
  }),
};

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PortfolioPostTemplate
        description={post.frontmatter.description}
        company={post.frontmatter.company}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Portfolio">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        steps={post.frontmatter.steps}
      />
    </Layout>
  );
};

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default PortfolioPost;

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
        description
        company
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 960, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        steps {
          row {
            name
            number
            description
          }
        }
      }
    }
  }
`;
