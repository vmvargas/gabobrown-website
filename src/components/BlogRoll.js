import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }, ind) => (
            
            <div className="column is-12" key={post.id}>
              <article
                className={`${post.frontmatter.featuredpost ? 'is-featured' : ''}`}
              >
                <header className="columns">
                  <div className="column">   
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
                    <div className="column is-7 featured-thumbnail">
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
                </header>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
