import React from 'react'

import '../Styles/Products.css'

import Navigation from './Navigation'
import ProductsContainer from './ProductsContainer';

const Products = () => {
    return (
        <div className='products'>
            <Navigation sort={true} />
            <hr/>
            <ProductsContainer />
            <Navigation sort={false} />
            <hr/>
        </div>
    )
}

export default Products
