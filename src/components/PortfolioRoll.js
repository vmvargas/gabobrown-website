import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div>
        {posts &&
          posts.map(({ node: post }, ind) => (
            <article  key={post.id}
              className={`columns is-tablet ${post.frontmatter.featuredpost ? 'is-featured' : ''}`}
              style={{
                marginBottom: "4.06rem"
              }}
            >
              <div className="column is-one-third-tablet" style={{
                alignSelf: "flex-end",
              }}>   
                <p className="has-text-grey-dark" style={{
                  marginBottom: "10px"
                }}>
                  {ind.toString().length===1 ? '0'+(parseInt(ind,10)+1) : ind+1}
                </p>
                <Link to={post.fields.slug} className="post-meta">
                <h2
                  className="has-text-black"
                  style={{
                    fontSize: "1.7em",
                    fontWeight: "500",
                    lineHeight: "1.1"
                  }}
                >
                  {post.frontmatter.title}
                </h2>
                </Link>
                <div style={{
                  height: '1.8em',
                }}></div>
                <h4 className="post-meta has-text-black" style={{
                  fontSize: "1.22em",
                  fontWeight: "500",
                  marginBottom: "10px"
                }}>
                  {post.frontmatter.company}
                </h4>
                <p className="post-meta has-text-grey-dark">
                  {post.frontmatter.date} - {post.frontmatter.location}
                </p>
                <p className="has-text-grey-dark">
                  {post.frontmatter.tags.join(' | ')}
                </p>
              </div>
              {post.frontmatter.featuredimage ? (
                <div className="column featured-thumbnail">
                  <Link to={post.fields.slug}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${
                          post.title
                        }`,
                      }}
                    />
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
      </div>
    )
  }
}

PortfolioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                company
                location
                tags
                templateKey
                date(formatString: "MMM YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 650, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioRoll data={data} count={count} />}
  />
)
