import React from 'react'
import Product from '../Home/Product'
import Title from '../title'
import { graphql, StaticQuery} from 'gatsby'


const getProducts = graphql`
{
  products:allContentfulCoffeeProduct{
    edges{
      node{
        id
        title
        price
        image{
          fluid(maxHeight:426){
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        
      }
    }
  }
}
`
export default function Products() {
  return (
  
      <StaticQuery query={getProducts} render={data => {
        return (<section className='py-5'>
          <div className='container'>
          <Title title='traditional toppings'/>
          <div className='row'>
          {data.products.edges.map(({node:product}) => {
          return <Product key={product.id} product={product}/>
          })}
          </div>
          </div>
        </section>)
      }}/>
   
  )
}

