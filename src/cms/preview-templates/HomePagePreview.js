import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <HomePageTemplate
        title1={data.title1}
        title2={data.title2}
        title3={data.title3}
        description1={data.description1}
        description2={data.description2}
        description3={data.description3}
        description4={data.description4}
        description5={data.description5}
        description6={data.description6}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
