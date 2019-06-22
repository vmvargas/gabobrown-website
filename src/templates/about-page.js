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
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <Link
              className="has-text-weight-bold"
              to="/">
              Go Back
            </Link>
            <div className="is-hidden-touch" style={{
              height: '1em',
            }}></div>
            <h1 className="is-size-1 has-text-black" style={{
              fontWeight: "500",
              lineHeight: "1.25",
              marginBottom: "0.4em",
            }}>
              {title}
            </h1>
          </div>
        </div>
        <div className="columns" style={{
          marginBottom: "2.5em"
        }}>
          <div className="column is-4">
            <PreviewCompatibleImage
              imageInfo={{
                image: image,
                alt: `Gabriel Brown Profile Picture`,
              }}
            />
          </div>
          <div className="column is-8">
            <PageContent className="content" content={content} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <h2 className="is-size-1 is-size-3-mobile has-text-black" style={{
              fontWeight: "500",
              lineHeight: "1.25",
              marginBottom: "0.4em",
            }}>
              {clients.heading}
            </h2>
          </div>
        </div>
        <Clients gridItems={clients.logos} />
        <div className="columns" style={{
          marginBottom: "2em"
        }}>
          <div className="column is-12">
            <h2 className="is-size-1 is-size-3-mobile has-text-black" style={{
              fontWeight: "500",
              lineHeight: "1.25",
            }}>
              {social.heading1}
            </h2>
            <h2 className="is-size-1 is-size-3-mobile has-text-black" style={{
              fontWeight: "500",
              lineHeight: "1.25",
            }}>
              {social.heading2}
            </h2>
            <h2 className="is-size-1 is-size-3-mobile has-text-black" style={{
              fontWeight: "500",
              lineHeight: "1.25",
            }}>
              {social.heading3}
            </h2>
          </div>
        </div>
        <div className="columns" style={{
          marginBottom: "1em"
        }}>
          {social.links && social.links.length ?
            (social.links.map(link => (
            <div key={link.name} style={{
              margin: "0 1em 0",
            }}>
              <a
                className="is-link has-text-weight-bold"
                target="_blank"
                href={link.url}
                rel="noopener noreferrer">
                {link.name}
              </a>
            </div>
          ))) : null }
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.any,
  contentComponent: PropTypes.func,
  clients: PropTypes.shape({
    heading: PropTypes.string,
    logos: PropTypes.array,
  }),
  social: PropTypes.shape({
    heading1: PropTypes.string,
    heading2: PropTypes.string,
    heading3: PropTypes.string,
    links: PropTypes.array,
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
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
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
          logos {
            name
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
          heading1
          heading2
          heading3
          links {
            name
            url
          }
        }
      }
    }
  }
`
