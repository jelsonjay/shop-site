import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Info from "../components/Home/Info"
import Menu from '../components/Menu'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="the best pizza in the town"
      styleClass="bg"
    />
    <Info />
    <Menu items={data.menu}/>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "bg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    
    menu:allContentfulCoffeeItem{
      edges{
        node{
          id
          title
          description{
            description
          }
          price
          category
          image{
            fixed(width:70,height:60){
            ...GatsbyContentfulFixed_tracedSVG

            }
            
          }
        }
      }
    }


  }
`

export default IndexPage
