import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import PortfolioRoll from '../components/PortfolioRoll'

export const HomePageTemplate = ({
  title1,
  title2,
  title3,
  description1,
  description2,
  description2Link,
  description3,
  description4,
  description5,
  description5Link,
  description6,
}) => (
<div>
  <section className="hero is-medium">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-desktop">
          <div className="column is-8">
            <h1 className="title is-size-1" style={{
              marginBottom: "0.5rem"
            }}>
              {title1}
            </h1>
            <h1 className="title is-size-1" style={{
              marginBottom: "0.5rem"
            }}>
              {title2}
            </h1>
            <h3 className="has-text-weight-light has-text-grey-dark" style={{
              fontSize: "1.7em",
              fontWeight: "300",
              marginBottom: "1.5rem"
            }}>
              {title3}
            </h3>
            <h5 className="has-text-grey-dark is-size-5">
              {description1}
              <span className="has-text-weight-bold has-text-primary">
                <Link to={description2Link}> {description2} </Link>
              </span>
              {description3}
            </h5>
            <h5 className="has-text-grey-dark is-size-5">
              {description4} 
              <span className="has-text-weight-bold has-text-primary">
                <Link to={description5Link}> {description5} </Link>
              </span>
              {description6}
            </h5>
          </div>
          <div className="column">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section">
    <div className="container">
      <PortfolioRoll />
    </div>
  </section>
</div>
);

HomePageTemplate.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  description2Link: PropTypes.string,
  description3: PropTypes.string,
  description4: PropTypes.string,
  description5: PropTypes.string,
  description5Link: PropTypes.string,
  description6: PropTypes.string,
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        title1={frontmatter.title1}
        title2={frontmatter.title2}
        title3={frontmatter.title3}
        description1={frontmatter.description1}
        description2={frontmatter.description2}
        description2Link={frontmatter.description2Link}
        description3={frontmatter.description3}
        description4={frontmatter.description4}
        description5={frontmatter.description5}
        description5Link={frontmatter.description5Link}
        description6={frontmatter.description6}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title1
        title2
        title3
        description1
        description2
        description2Link
        description3
        description4
        description5
        description5Link
        description6        
      }
    }
  }
`
