import React from 'react'
import Image from 'gatsby-image'

export default function Product ({product})  {
  return (
    <div className='col-10 col-sm-8 col-lg-4 mx-auto my-3'>
      <div className='card' style={{minHeight: '100%'}}>
      <Image fluid={product.image.fluid} className='card-img-top' />
      <div className='card-body text-center'>
      <h6>{product.title}</h6>
      <h6 className='price_color'>£{product.price}</h6>
      <button type='button' className='btn btn-color mt-3 text-capitalize'>add to cart</button>
      </div>
      </div>
    </div>
  )
}

 
