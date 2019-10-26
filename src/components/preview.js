import React from 'react'
import { Box } from 'rebass'
import PropTypes from 'prop-types'

function Preview({ content }) {
  return (
    <>
      <Box id="preview">{content}</Box>
    </>
  )
}

Preview.propTypes = {
  content: PropTypes.string
}

Preview.defaultProps = {
  content: 'preview outputed here'
}

export default Preview
