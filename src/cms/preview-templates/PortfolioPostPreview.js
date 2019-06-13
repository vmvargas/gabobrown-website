import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioPostTemplate } from '../../templates/portfolio-post'

const PortfolioPostPreview = ({ entry }) => (
  <PortfolioPostTemplate
    description={entry.getIn(['data', 'description'])}
    company={entry.getIn(['data', 'company'])}
    location={entry.getIn(['data', 'location'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    steps={entry.getIn(['data', 'steps'])}
  />
)

PortfolioPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default PortfolioPostPreview
