import styled from 'styled-components'

export const CodeContainer = styled.pre`
  display: block;
  position: relative;
  margin: 0;
  line-height: initial;
`

export const LineContainer = styled.div.attrs(props => ({
  padSize: props.needPad ? '1rem' : '0',
}))`
  padding-left: ${props => props.padSize};
`

export const LineNumber = styled.span`
  display: inline-block;
  width: 3rem;
  text-align: right;
  user-select: none;
  border-right: 1px solid grey;
  padding-right: 0.8rem;
  margin-right: 0.5rem;
`

export const LanguageTag = styled.span`
  position: absolute;
  display: inline-block;
  top: 0;
  right: 10px;
`
