import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  company,
  tags,
  title,
  featuredimage,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
    <section className="section">
      {helmet || ''}
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-12">
            <Link
              className="has-text-weight-bold	"
              to="/"
            >
              Go Back
            </Link>
            <h1 className="title">
              {title}
            </h1>
            <h3 className="subtitle">
              {company}
            </h3>
          </div>
          {featuredimage ? (
          <div className="column is-12">
            <div
              style={{
                backgroundImage: `url(${
                  !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
                })`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                height: `450px`,
              }}
            >
            </div>
          </div>
          ) : null}
          <div className="column is-12">
            {/* <p>{description}</p> */}
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.any,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        company={post.frontmatter.company}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
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
      }
    }
  }
`
