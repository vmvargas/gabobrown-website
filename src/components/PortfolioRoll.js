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
            >
              <div className="column is-one-quarter-tablet">   
                <p>
                  {ind.toString().length===1 ? '0'+(parseInt(ind,10)+1) : ind+1}
                </p>
                <Link
                  className="title is-size-4 post-meta"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <div style={{
                  height: '32px',
                }}></div>
                <h4 className="post-meta has-text-weight-bold">
                  {post.frontmatter.company}
                </h4>
                <p className="post-meta">
                  {post.frontmatter.date} - {post.frontmatter.location}
                </p>
                <p>
                  {post.frontmatter.tags.join(' | ')}
                </p>
              </div>
              {post.frontmatter.featuredimage ? (
                <div className="column featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${
                        post.title
                      }`,
                    }}
                  />
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
                date(formatString: "MMM D, YYYY")
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
