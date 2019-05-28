import React from 'react'
import { preToCodeBlock } from 'mdx-utils'
import { MDXProvider } from '@mdx-js/react'
import { Code, InlineCode } from './components/Code'

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
  inlineCode: InlineCode,
}

const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)

export default wrapRootElement
