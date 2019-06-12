import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry }) => (
  <BlogPostTemplate
    description={entry.getIn(['data', 'description'])}
    company={entry.getIn(['data', 'company'])}
    location={entry.getIn(['data', 'location'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    steps={entry.getIn(['data', 'steps'])}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default BlogPostPreview
