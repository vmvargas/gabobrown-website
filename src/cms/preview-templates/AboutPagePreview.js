import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        title={data.title}
        image={data.image}
        content={widgetFor('body')}
        clients={data.clients || { blurbs: [] }}
        social={data.social || { blurbs: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}


AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
