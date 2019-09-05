import React from 'react'

import TopBar from './TopBar'
import Banner from './Banner'
import Products from './Products'
import PointShop from './PointShop'

import NavigationContextProvider from '../context/NavigationContext'
import UserContextProvider, { UserContext } from '../context/UserContext'

function MainContent() {
    return (
        <div>
            <NavigationContextProvider>
                <UserContextProvider>
                    <TopBar />
                    <Banner />
                    <Products />
                    <UserContext.Consumer>{context => (
                        context.isBuyingPoints && <PointShop isOpened={context.isBuyingPoints} togglePointShop={context.togglePointShop} points={context.points} addPoints={context.addPoints}/>
                    )}</UserContext.Consumer>

                </UserContextProvider>
            </NavigationContextProvider>
            
        </div>
    )
}

export default MainContent
