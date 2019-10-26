import React from 'react'
import { Box, Heading } from 'rebass'
import { ThemeProvider } from 'theme-ui'
import { Helmet } from 'react-helmet'

import theme from './theme'
import Playground from './components/playground'

// Tests with freeCodeCamp
const isDev = process.env.NODE_ENV !== 'production'
const fccCdn = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {isDev && (
        <Helmet>
          <script type="text/javascript" src={fccCdn} />
        </Helmet>
      )}
      <Box
        sx={{
          bg: 'background',
          color: 'text',
          height: `100vh`,
          width: `100vw`
        }}
      >
        <Heading textAlign="center" py="6" fontSize="6">
          Markdown previewer
        </Heading>
        <Playground />
      </Box>
    </ThemeProvider>
  )
}

export default App
