import React, {useState} from 'react'
import PropTypes from 'prop-types'

import RAButton from '../Static/icons/arrow-right.svg'
import LAButton from '../Static/icons/arrow-left.svg'

import { NavigationContext } from '../context/NavigationContext'

import '../Styles/Navigation.css'

import SortingBar from './SortingBar'

const Navigation = props => {
    const [filter, setFilter] = useState(0)

    return (
        <NavigationContext.Consumer>{context => {
            const firstProduct =  context.nOfProducts < context.page * 16 ? (context.page * 16) - context.nOfProducts : 16
            const lastProduct = context.nOfProducts
            console.log(lastProduct)
            return(
                <div className='navigation'>
                <p className="item-counter">{`${firstProduct} of ${lastProduct}`}</p>
                {props.sort && <SortingBar />}
                <div className="button-container">
                    <img src={LAButton} className="nav-btn" alt="" onClick={context.setPage.bind(null, context.page === 1 ? 1 : context.page - 1)}/>
                    <img src={RAButton} className="nav-btn" alt="" onClick={context.setPage.bind(null, context.nOfProducts < (context.page * 16) + 1 ? context.page : context.page + 1)} />
                </div>
                </div>
            )
        }}</NavigationContext.Consumer>
    )
}

Navigation.propTypes = {
    sort: PropTypes.bool.isRequired
}

export default Navigation
