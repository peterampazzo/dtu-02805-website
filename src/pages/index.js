import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout
      title="Titolo"
      sub="Sottotitolo"
      nav={{
        next: { title: "About", link: "/about/" },
      }}
    >
      <SEO title="Home" />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { id: { eq: 0 } }) {
      html
    }
  }
`
