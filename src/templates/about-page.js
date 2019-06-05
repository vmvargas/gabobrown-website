import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns is-multiline">
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
          <div className="column is-4">
            <img src="https://via.placeholder.com/600x700" alt="asd"></img>
          </div>
          <div className="column is-8">
            <PageContent className="content" content={content} />
          </div>
          <div className="column is-12">
            <h2 className="title">
              Some squares here
            </h2>
          </div>
          <div className="column is-3">
            <img src="https://via.placeholder.com/500x300" alt="asd"></img> 
          </div>
          <div className="column is-3">
            <img src="https://via.placeholder.com/500x300" alt="asd"></img> 
          </div>
          <div className="column is-3">
            <img src="https://via.placeholder.com/500x300" alt="asd"></img> 
          </div>
          <div className="column is-3">
            <img src="https://via.placeholder.com/500x300" alt="asd"></img> 
          </div>
          <div className="column is-12">
            <h2 className="title">
              Feel free
            </h2>
          </div>
          <div className="column is-12">
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">      
                  <Link
                    className="navbar-item has-text-weight-bold"
                    to="/">
                    Lorem
                  </Link>
                  <Link
                    className="navbar-item has-text-weight-bold"
                    to="/">
                    Lorem
                  </Link>
                </div>
              </div>
            </nav>

          </div>
          
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
