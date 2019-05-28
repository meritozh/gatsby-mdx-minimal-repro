import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { needHighlight, numberfiy } from './utils'
import { LineContainer, CodeContainer, LineNumber, LanguageTag } from './styled'

import 'style/prism-react-dark.scss'

export const Code = ({ codeString, children, language, ...props }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={undefined}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => {
        let lines = numberfiy(props['hl'])
        return (
          <CodeContainer className={className}>
            <code>
              {tokens.map((line, i) => (
                <LineContainer
                  {...getLineProps({ line, key: i })}
                  needPad={props['num'] ? false : true}
                  className={`${
                    needHighlight(i + 1, lines) ? 'line-highlight' : ''
                  }`}
                >
                  <div>
                    {props['num'] ? <LineNumber>{i + 1}</LineNumber> : <></>}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </LineContainer>
              ))}
              {language ? <LanguageTag>{language}</LanguageTag> : <></>}
            </code>
          </CodeContainer>
        )
      }}
    </Highlight>
  )
}

export const InlineCode = ({ children }) => (
  <Highlight
    {...defaultProps}
    code={children.trim()}
    language={'markup'}
    theme={undefined}
  >
    {({ className, tokens, getTokenProps }) => (
      <code className={`${className} inline`}>
        {tokens.map(line =>
          line.map((token, key) => <span {...getTokenProps({ token, key })} />)
        )}
      </code>
    )}
  </Highlight>
)
