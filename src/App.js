import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { Helmet } from 'react-helmet'

import theme from './theme'
import Playground from './playground'

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
      <Playground />
    </ThemeProvider>
  )
}

export default App
