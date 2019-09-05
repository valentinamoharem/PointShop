import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ProductItem from './ProductItem';

import { NavigationContext } from '../context/NavigationContext'

import '../Styles/ProductsContainer.css'

const ProductsContainer = () => {
    const [products, setProducts] = useState([])
    let setNumberOfProducts

    useEffect(() => {
        Axios.get('https://coding-challenge-api.aerolab.co/products', {
            headers: {
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRkYmQ0ODM0OGU2OTAwNmM3NTg4ZjMiLCJpYXQiOjE1NjUzNzU4MTd9.P6YXbYbssMG1JVFj1D7ZYa0gG1V0W8jDWg_mEaNDxVE'
            }
        })
        .then(res => {
            console.log({...res.data})
            setProducts(res.data)
        })
        .catch(err => console.error(err))
    }, [])

    useEffect(() =>{
        setNumberOfProducts(products.length)
    }, [products])

    const sorted = (array, method) => {
        if(method === 0){
            return array
        } else if (method === 1) {
            return array.sort((a, b) => {return a.cost - b.cost})
        } else if (method === 2) {
            return array.sort((a, b) => {return b.cost - a.cost})
        }
    }

    const sliced = (array, page) => {
        return array.slice((page * 16) - 16, (page * 16))
    }

    


    return (
       <NavigationContext.Consumer>{(context) =>{

           setNumberOfProducts = context.setNumberOfProducts
           const sortedArray = sorted(products, context.sortingMethod)
           const slicedArray = sliced(sortedArray, context.page)
           
           return(
            <div className='products-container'>
            {slicedArray.map(p => (
                <ProductItem id={p._id} key={p._id} imgUrl={p.img.url} name={p.name} cat={p.category} cost={p.cost} />
            ))}
         </div>
           )
       }}</NavigationContext.Consumer>
    )
}

export default ProductsContainer
