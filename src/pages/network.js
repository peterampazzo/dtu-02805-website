import React, { useState } from "react"
import Img from "gatsby-image"

import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Network from "../components/viz/network"

const Part2 = ({ data }) => {
  const [wordCloud, setWordCloud] = useState("Hip-Hop")

  const genres = [
    "Alternative",
    "Country",
    "Funk Soul",
    "Hip-Hop",
    "Pop",
    "Punk",
    "Reggae",
    "Rock",
    "Latin",
  ]

  return (
    <Layout
      title="Introduction to the Network"
      nav={{
        prev: { title: "About", link: "/about/" },
        next: {
          title: "How do artist collaborate?",
          link: "/how-do-artist-collaborate/",
        },
      }}
    >
      <SEO title="Introduction to the Network" />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part1.html }}
      />
      <h3
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          flexWrap: `wrap`,
        }}
      >
        Detected main genre by community
        <Select
          id="genre-select"
          value={wordCloud}
          onChange={e => setWordCloud(e.target.value)}
          variant="outlined"
          style={{ marginLeft: `20px`, marginRight: `20px` }}
        >
          {genres.map((item, i) => (
            <MenuItem value={item} key={i}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </h3>
      <div style={{ margin: `auto`, width: `650px`,  marginBottom: `20px` }}>
        {wordCloud === "Alternative" && (
          <Img alt="" fluid={data.alternative.childImageSharp.fluid} />
        )}
        {wordCloud === "Country" && (
          <Img alt="" fluid={data.country.childImageSharp.fluid} />
        )}
        {wordCloud === "Funk Soul" && (
          <Img alt="" fluid={data.funkSoul.childImageSharp.fluid} />
        )}
        {wordCloud === "Hip-Hop" && (
          <Img alt="" fluid={data.hipHop.childImageSharp.fluid} />
        )}
        {wordCloud === "Pop" && (
          <Img alt="" fluid={data.pop.childImageSharp.fluid} />
        )}
        {wordCloud === "Punk" && (
          <Img alt="" fluid={data.punk.childImageSharp.fluid} />
        )}
        {wordCloud === "Reggae" && (
          <Img alt="" fluid={data.reggae.childImageSharp.fluid} />
        )}
        {wordCloud === "Rock" && (
          <Img alt="" fluid={data.rock.childImageSharp.fluid} />
        )}
        {wordCloud === "Latin" && (
          <Img alt="" fluid={data.latin.childImageSharp.fluid} />
        )}
      </div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part2.html }}
      />
      <Network />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part3.html }}
      />
    </Layout>
  )
}

export default Part2

export const pageQuery = graphql`
  query {
    part1: markdownRemark(frontmatter: { id: { eq: 2.1 } }) {
      html
    }
    part2: markdownRemark(frontmatter: { id: { eq: 2.2 } }) {
      html
    }
    part3: markdownRemark(frontmatter: { id: { eq: 2.3 } }) {
      html
    }
    alternative: file(relativePath: { eq: "wc_gen_3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    country: file(relativePath: { eq: "wc_gen_5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    funkSoul: file(relativePath: { eq: "wc_gen_4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hipHop: file(relativePath: { eq: "wc_gen_1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pop: file(relativePath: { eq: "wc_gen_2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    punk: file(relativePath: { eq: "wc_gen_7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reggae: file(relativePath: { eq: "wc_gen_8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rock: file(relativePath: { eq: "wc_gen_0.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    latin: file(relativePath: { eq: "wc_gen_6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
