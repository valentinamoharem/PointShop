import React from 'react'

import Background from '../Static/header-x2.png'
import '../Styles/Banner.css'

const Banner = () => {
    const img = { backgroundImage: `url(${Background})` }
    return (
        <div className='banner' style={img}>
            <h1 className='banner-text'>Electronics</h1>
        </div>
    )
}

export default Banner

