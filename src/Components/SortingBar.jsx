import React, { useState, useEffect } from 'react'

import '../Styles/SortingBar.css'

import { NavigationContext } from '../context/NavigationContext'

const SortingBar = () => {
    const [selected, setSelected] = useState(0)


    const makeSelected = (i) => {
        setSelected(i)
        console.log(i)
    }

    return (
        <NavigationContext.Consumer>{context =>{
            return(
                <div className='sorting-bar'>
                    <p className="sort-text">Sort by:</p>
                    <p className={selected === 0 ? 'sort-button-selected sort-button' : 'sort-button'} onClick={() => {makeSelected(0); context.setSorting(0)}}>Most recent</p>
                    <p className={selected === 1 ? 'sort-button-selected sort-button' : 'sort-button'} onClick={() => {makeSelected(1); context.setSorting(1)}}>Lowest price</p>
                    <p className={selected === 2 ? 'sort-button-selected sort-button' : 'sort-button'} onClick={() => {makeSelected(2); context.setSorting(2)}}>Highest price</p>
                </div>
            )
        }}</NavigationContext.Consumer>
    )
}

export default SortingBar
