import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const entryLogos = entry.getIn(['data', 'clients', 'logos'])
  const logos = entryLogos ? entryLogos.toJS() : []

  const entryLinks = entry.getIn(['data', 'social', 'links'])
  const links = entryLinks ? entryLinks.toJS() : []


  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'image'])}
      content={widgetFor('body')}
      clients={{logos}}
      social={{links}}
    />
  )
}


AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
