import React, { useState } from 'react'
import { Box, Flex } from 'rebass'
import PropTypes from 'prop-types'

import Preview from './preview'
import Editor from './editor'

function Playground({ defaultContent }) {
  const [content, setContent] = useState(defaultContent)
  return (
    <Flex>
      <Box width={[1, 1 / 2]} p={3}>
        <Editor handleChange={val => setContent(val)} />
      </Box>
      <Box width={[1, 1 / 2]} p={3}>
        <Preview content={content} />
      </Box>
    </Flex>
  )
}

Playground.propTypes = {
  defaultContent: PropTypes.string
}

Playground.defaultProps = {
  defaultContent: 'Lorem ipsum...'
}

export default Playground
