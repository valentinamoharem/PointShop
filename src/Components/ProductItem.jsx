import React from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'

import BuyBlue from '../Static/icons/buy-blue.svg'
import BuyWhite from '../Static/icons/buy-white.svg'
import coin from '../Static/icons/coin.svg'

import '../Styles/ProductItem.css'

import { UserContext } from '../context/UserContext'

const ProductItem = props => {

    const imgStyle = { backgroundImage: `url(${props.imgUrl})` }

    // const buyItem = (id) => {
    //     // ---- API REQUEST ----
    //     // This API REQ sends the redeemed product id and returns the amount of points left
    //     // and it adds the product to a redeemed products list.

    //     // Axios({
    //     //     method: 'post',
    //     //     url: 'https://coding-challenge-api.aerolab.co/redeem',
    //     //     headers: {
    //     //         'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRkYmQ0ODM0OGU2OTAwNmM3NTg4ZjMiLCJpYXQiOjE1NjUzNzU4MTd9.P6YXbYbssMG1JVFj1D7ZYa0gG1V0W8jDWg_mEaNDxVE'
    //     //     },
    //     //     data: {
    //     //         "productId": id
    //     //     }
    //     // })
    //     // .then(() => {
    //     //     console.log('You redeemed the product with the following id: ' + id)
    //     // })
    //     // .catch(err => {
    //     //     console.error(err);
    //     // })

    //     // WHEN NOT USING THE API:
    //     // The action is handled in the UserContext.jsx in the src/context/ directory
        
    // }

    return (
        <UserContext.Consumer>{({ points, addPoints, togglePointShop, buyItem }) => (
            <div className="product-item">
                <div className="display-product" style={imgStyle}>
                    {points >= props.cost ? (
                        <img src={BuyBlue} alt="buy-blue" className="buyBlue"/>
                    ) : (
                        <div className="out-of-budget">
                            <p>{`You need ${props.cost - points}`}</p>
                            <img src={coin} alt=""/>
                        </div>
                    )}
                </div>
                <div className="product-info">
                    <p className="product-category">{props.cat}</p>
                    <p className="product-name">{props.name}</p>
                </div>
                {points >= props.cost ? (
                    <div className='modal'>
                        <div className='modal-content'>
                            <div className="modal-buy-white"><img src={BuyWhite} alt="buy-white"/></div>
                            <div className="modal-cost">
                                <p className="cost">{props.cost}</p>
                                <img className='coin' src={coin} alt="coin"/>
                            </div>
                            <div className='redeem-container'>
                                <p className="redeem-btn" onClick={() => {buyItem(props.cost)}}>Redeem now</p>
                            </div>
                            <div className="blank-space"></div>
                        </div>
                    </div>
                ) : (
                    <div className='off-modal'>
                        <div className='off-modal-content'>
                            <div className="off-modal-cost">
                                <p className="off-cost">{`You need ${props.cost - points}`}</p>
                                <img className='coin' src={coin} alt="coin"/>
                            </div>
                            <div className='buy-points-container'>
                                <p className="buy-points-btn" onClick={() => togglePointShop()}>Buy more points</p>
                            </div>
                            <div className="blank-space"></div>
                        </div>
                    </div>
                )}
                
            </div>
        )}</UserContext.Consumer>
    )
}

ProductItem.propTypes = {
    cost: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    isAff: PropTypes.bool
}

export default ProductItem
