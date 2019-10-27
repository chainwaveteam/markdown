/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, Box, Flex } from 'theme-ui'
import marked from 'marked'
import { UnControlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/markdown/markdown'
import 'github-markdown-css'

import defaultMarkdown from './defaultMarkdown'

const sideCSS = {
  width: ['100%', '50%'],
  height: ['50%', '100%']
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
        width: `100vw`,
        overflow: 'hidden'
      }}
    >
      <Flex sx={{ ...sideCSS }}>
        <CodeMirror
          id="editor"
          value={defaultMarkdown}
          options={{
            mode: 'markdown',
            theme: 'dracula',
            lineNumbers: true,
            lineWrapping: true
          }}
          sx={{
            width: `100%`,
            height: `100%`,
            '.CodeMirror': {
              height: `100%`,
              width: `100%`,
              overflow: 'hidden'
            }
          }}
          onChange={(editor, data, value) => setMarkdown(value)}
        />
      </Flex>

      <Flex sx={{ ...sideCSS }}>
        <Box
          id="preview"
          sx={{
            p: 3,
            pt: 4,
            m: 0,
            flex: 1,
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
