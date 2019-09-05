import React from 'react'
import '../Styles/TopBar.css'

import logo from '../Static/aerolab-logo.svg'

import UserData from './UserData'

import { UserContext } from '../context/UserContext'

const topBar = () => {
    return (
        <UserContext.Consumer>{context => (
            <div className='top-bar'>
                <img className='aerolab-logo' src={logo} alt="logo"/>
                <UserData setUsername={context.setUsername} setPoints={context.setPoints} username={context.username} points={context.points} togglePointShop={context.togglePointShop} />
            </div>
        )}</UserContext.Consumer>
    )
}

export default topBar
