import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FiShare2, FiStar } from "react-icons/fi"

import Genres from "../components/viz/genres"
import GenresCollab from "../components/viz/collab-genres"
import colors from "../utils/colors"

import artists from "../data/collab-artists.json"

const Page3 = ({ data }) => {
  const Card = ({ name, degree, popularity, genre, image }) => (
    <div
      style={{
        margin: `18px`,
        display: `flex`,
        textAlign: `center`,
        alignItems: `center`,
        flexDirection: `column`,
        justifyContent: `center`,
        backgroundColor: colors[genre],
        height: `150px`,
        width: `200px`,
        borderRadius: `15px`,
        fontSize: `16px`,
        color: `white`,
        boxShadow: `-20px 20px 60px rgba(0,0,0,.4)`,
        padding: `4px`,
      }}
    >
      <img
        src={image}
        style={{ width: `80px`, borderRadius: `50%`, marginTop: `-40px` }}
      />
      <div style={{ fontSize: `20px`, fontWeight: 900 }}>{name}</div>
      <div>{genre}</div>
      <div
        style={{
          display: `flex`,
          marginTop: `20px`,
        }}
      >
        <div>
          <FiShare2 /> {degree}
        </div>
        <div style={{ marginLeft: `20px` }}>
          <FiStar /> {popularity}
        </div>
      </div>
    </div>
  )
  return (
    <Layout
      title="How do artist collaborate?"
      nav={{
        prev: { title: "Network", link: "/network/" },
        next: { title: "Text Analysis", link: "/text-analysis/" },
      }}
    >
      <SEO title="How do artist collaborate?" />

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part1.html }}
      />

      {/* cards */}
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `center`,
          marginTop: `40px`,
          marginBottom: `40px`,
        }}
      >
        {artists.map((item, i) => (
          <Card
            name={item.name}
            degree={item.degree}
            popularity={item.popularity}
            genre={item.genre}
            image={item.image}
            key={i}
          />
        ))}
      </div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part2.html }}
      />
      <GenresCollab />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part3.html }}
      />
      <Genres />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part4.html }}
      />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part5.html }}
      />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part6.html }}
      />
    </Layout>
  )
}

export default Page3

export const pageQuery = graphql`
  query {
    part1: markdownRemark(frontmatter: { id: { eq: 3.1 } }) {
      html
    }
    part2: markdownRemark(frontmatter: { id: { eq: 3.2 } }) {
      html
    }
    part3: markdownRemark(frontmatter: { id: { eq: 3.3 } }) {
      html
    }
    part4: markdownRemark(frontmatter: { id: { eq: 3.4 } }) {
      html
    }
    part5: markdownRemark(frontmatter: { id: { eq: 3.5 } }) {
      html
    }
    part6: markdownRemark(frontmatter: { id: { eq: 3.6 } }) {
      html
    }
  }
`
