import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Clients from '../components/Clients'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const AboutPageTemplate = ({ 
  title,
  content,
  contentComponent,
  image,
  clients,
  social,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <Link
              className="has-text-weight-bold"
              to="/">
              Go Back
            </Link>
            <h2 className="title">
              {title}
            </h2>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <PreviewCompatibleImage imageInfo={image} />
          </div>
          <div className="column is-8">
            <PageContent className="content" content={content} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <h2 className="title">
              {clients.heading}
            </h2>
          </div>
        </div>
        <Clients gridItems={clients.blurbs} />
        <div className="columns">
          <div className="column is-12">
            <h2 className="title">
              {social.heading}
            </h2>
          </div>
        </div>
        <div className="columns">
          {social.blurbs.map((link, ind) => (
            <div className="column">
              <a
                className="is-link has-text-weight-bold"
                target="_blank"
                href={link.url}
                rel="noopener noreferrer">
                {link.name}
              </a>
            </div>
          ))}
          <div className={`column is-${12-social.blurbs.length}`}></div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  clients: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  social: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
        clients={post.frontmatter.clients}
        social={post.frontmatter.social}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        clients {
          heading
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        social {
          heading
          blurbs {
            name
            url
          }
        }
      }
    }
  }
`
