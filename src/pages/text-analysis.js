import React, { useState } from "react"
import Img from "gatsby-image"

import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sentiment from "../components/viz/sentiment"

const Page3 = ({ data }) => {
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
  ]
  return (
    <Layout
      title="Text Analysis"
      nav={{
        prev: {
          title: "How do artist collaborate?",
          link: "/how-do-artist-collaborate/",
        },
        next: { title: "Conclusion", link: "/conclusion/" },
      }}
    >
      <SEO title="Text Analysis" />
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
        Choose genre for word cloud
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
      <div style={{ margin: `auto`, width: `650px`, marginBottom: `20px` }}>
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
      </div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part2.html }}
      />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part3.html }}
      />
      <Sentiment />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.part4.html }}
      />
    </Layout>
  )
}

export default Page3

export const pageQuery = graphql`
  query {
    part1: markdownRemark(frontmatter: { id: { eq: 4.1 } }) {
      html
    }
    part2: markdownRemark(frontmatter: { id: { eq: 4.2 } }) {
      html
    }
    part3: markdownRemark(frontmatter: { id: { eq: 4.3 } }) {
      html
    }
    part4: markdownRemark(frontmatter: { id: { eq: 4.4 } }) {
      html
    }
    alternative: file(relativePath: { eq: "wc_TF_IDF_alternative.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    country: file(relativePath: { eq: "wc_TF_IDF_country.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    funkSoul: file(relativePath: { eq: "wc_TF_IDF_funk-soul.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hipHop: file(relativePath: { eq: "wc_TF_IDF_hip-pop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pop: file(relativePath: { eq: "wc_TF_IDF_pop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    punk: file(relativePath: { eq: "wc_TF_IDF_punk.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reggae: file(relativePath: { eq: "wc_TF_IDF_reggae.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rock: file(relativePath: { eq: "wc_TF_IDF_rock.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
