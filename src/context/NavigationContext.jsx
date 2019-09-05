import React, { Component, createContext } from 'react'

export const NavigationContext = createContext();

export default class NavigationContextProvider extends Component {
    state = {
        page: 1,
        sortingMethod: 0,
        nOfProducts: 0,
    }

    setSorting = (n) => {
        this.setState({sortingMethod: n}) 
    }

    setPage = (n) => {
        this.setState({page: n})
    }

    setNumberOfProducts = (n) => {
        this.setState({nOfProducts: n})
    }




    render() {
        return (
            <NavigationContext.Provider value={{...this.state, setSorting: this.setSorting, setPage: this.setPage, setNumberOfProducts: this.setNumberOfProducts}}>
                { this.props.children }
            </NavigationContext.Provider>
        )
    }
}
