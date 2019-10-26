/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

function Editor({ placeholder = 'Lorem ipsum...', handleChange }) {
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

export default Editor
