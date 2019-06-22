import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ClientGrid = ({ gridItems }) => (
  <div className="columns is-mobile is-multiline is-centered" style={{
    marginBottom: "2.5em"
  }}>
    {gridItems.map(client => (
      <div className="column is-one-third-mobile is-one-quarter-tablet" key={client.name}>
        <PreviewCompatibleImage 
          imageInfo={{
            image: client.image,
            alt: `${client.name}`,
          }}/>
      </div>
    ))}
  </div>
)

ClientGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
    })
  ),
}

export default ClientGrid
