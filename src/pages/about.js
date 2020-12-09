import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Part1 = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <Layout
      title="About"
      nav={{
        prev: { title: "Introduction", link: "/" },
        next: { title: "Introduction to the Network", link: "/network/" },
      }}
    >
      <SEO title="About" />

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export default Part1

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { id: { eq: 1 } }) {
      html
    }
  }
`
