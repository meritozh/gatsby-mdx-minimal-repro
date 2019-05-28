import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Header from './header'

export default ({ data }) => (
  <>
    <Header siteTitle={data.site.siteMetadata.title} />
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </>
)

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
    }
  }
`
