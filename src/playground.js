/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, Box, Flex } from 'theme-ui'
import marked from 'marked'

import defaultMarkdown from './defaultMarkdown'
import 'github-markdown-css'

const sideCSS = {
  width: ['100%', '50%'],
  height: ['50%', '100%']
}

const cardCSS = {
  p: 3,
  pt: 4,
  m: 0,
  flex: 1
}

function Playground() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  return (
    <Flex
      className="markdown-body"
      sx={{
        flexWrap: 'wrap',
        bg: 'muted',
        color: 'text',
        height: `100vh`,
        width: `100vw`
      }}
    >
      <Flex sx={{ ...sideCSS }}>
        <textarea
          id="editor"
          onChange={e => setMarkdown(e.target.value)}
          sx={{
            ...cardCSS,
            bg: 'text',
            color: 'background',
            border: 'none',
            outline: 'none'
          }}
        >
          {markdown}
        </textarea>
      </Flex>

      <Flex sx={{ ...sideCSS }}>
        <Box
          id="preview"
          sx={{
            ...cardCSS,
            overflow: 'scroll',
            bg: 'white',
            cursor: 'not-allowed'
          }}
          dangerouslySetInnerHTML={{
            __html: marked(markdown, { breaks: true })
          }}
        />
      </Flex>
    </Flex>
  )
}

export default Playground
