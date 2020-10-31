import React, { Component } from 'react'
import Title from './title'
import Img from 'gatsby-image'

const getCategory = items =>{
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set (tempItems)
  let categories = Array.from(tempCategories)
  categories = ['all', ...categories]
  return categories;
}

 class Menu extends Component {
   constructor(props) {
     super(props)
     this.state = {
      items: props.items.edges,
      pizzaItems: props.items.edges,
      categories: getCategory(props.items.edges)
     }
   }
   
   handleItems = (category) => {
    let tempItems = [...this.state.items]
    if(category === 'all'){
      this.setState(() => {
        return {pizzaItems:tempItems}
      })
    }
    else{
      let items = tempItems.filter(({node}) => node.category === category)
      this.setState(() => {
        return {pizzaItems:items}
      })
    }
   }
  
  render() {
    if(this.state.items.length > 0){
      return (
        <section className='menu py-5'>
        <div>
        <Title title='our latest deals online now'>Menu</Title>
        {/* category */}
        <div className='row mb-5'>
        <div className='col-10 mx-auto text-center'>
        {this.state.categories.map((category, index) => {
          return (<button type='button' key={index} className='btn btn-color text-capitalize m-3' onClick={()=>{this.handleItems(category)}}>{category}</button>)
        })}
        </div>
        </div>
        {/* items */}
        <div className='row'> 
        {this.state.pizzaItems.map(({node}) => {
        return (
        <div key={node.id} 
        className='col-12 col-md-6 my-3 d-flex mx-auto'>
        <div>
         <Img fixed={node.image.fixed}/>
        </div>
        {/* text here */}
        <div className='flex-grow-1 px-3'>
        <div className='d-flex justify-content-between'>
        <h6 className='mb-0'>
        <small>{node.title}</small>
        </h6>
        <h6 className='mb-0'>
        <small>£{node.price}</small>
        </h6>
        </div>
        <p className='text-muted'>
        <small>{node.description.description}</small>
        </p>
        </div>

        </div> 
          );
        })}
        </div>
        </div>
        </section>
      );
    }
   else{
     return (<section className='menu py-5'>
    <div className='container'>
    <Title title='best of our menu'></Title>
    <div className='row'>
    <div className='col-10 col-sm-6 mx-auto text-center text-capitalize'>
    <h1>there are no items available</h1>
    </div>
    </div>
    </div>
     </section>)
   }
  }
}

export default Menu
