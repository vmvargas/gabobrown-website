import React from 'react'
import PropTypes from 'prop-types'
import { PortfolioPostTemplate } from '../../templates/portfolio-post'

const PortfolioPostPreview = ({ entry }) => {
  const entryBlurbs = entry.getIn(['data', 'steps', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return(
    <PortfolioPostTemplate
      description={entry.getIn(['data', 'description'])}
      company={entry.getIn(['data', 'company'])}
      featuredimage={entry.getIn(['data', 'featuredimage'])}
      featuredpost={entry.getIn(['data', 'featuredpost'])}
      location={entry.getIn(['data', 'location'])}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
      date={entry.getIn(['data', 'date'])}
      steps={{
        blurbs: blurbs
      }}
    />
  )
}

PortfolioPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default PortfolioPostPreview
