import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Info from "../components/Home/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-bg"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-bg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
