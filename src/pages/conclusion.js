import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Network from "../components/viz/our-network"

const Page5 = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <Layout
      title="Conclusion"
      nav={{
        prev: { title: "Text Analysis", link: "/text-analysis/" },
        next: { title: "Explainer Notebook", link: "/network/" },
      }}
    >
      <SEO title="Conclusion" />

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <h2 style={{ textAlign: `center` }}>Our favourite artists</h2>
      <Network />
    </Layout>
  )
}

export default Page5

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { id: { eq: 5 } }) {
      html
    }
  }
`
