/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

function Editor({ placeholder, handleChange }) {
  return (
    <>
      <textarea
        id="editor"
        rows="4"
        sx={{ width: `100%` }}
        placeholder={placeholder}
        onChange={e => handleChange(e.target.value)}
      />
    </>
  )
}

Editor.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

Editor.defaultProps = {
  placeholder: 'Lorem ipsum...'
}

export default Editor
