import React, { Component, createContext } from 'react'
import Axios from 'axios'

export const UserContext = createContext()

export default class UserContextProvider extends Component {
    state = {
        username: 'Jane Doe',
        points: 0,
        redeemHistory: [],
        isBuyingPoints: false
    }

    setPoints = async (n, callback) => {
        await this.setState({...this.state, points: n})
        if(callback){callback()}
    }
    setUsername = (str) => {
        this.setState({...this.state, username: str})
        console.log('changed' + str)
    }
    
    addPoints = (points) => {
        // ---- API REQUEST ----
        // ---- Add points to the user ----
        // Axios.post('https://coding-challenge-api.aerolab.co/user/points', {
        //     data: {
        //         'amount': points
        //     },
        //     header: {
        //         'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRkYmQ0ODM0OGU2OTAwNmM3NTg4ZjMiLCJpYXQiOjE1NjUzNzU4MTd9.P6YXbYbssMG1JVFj1D7ZYa0gG1V0W8jDWg_mEaNDxVE'
        //     }
        // })
        // .then(() => {
        //     this.setPoints(this.state.points + points)
        // })
        // .catch(err => console.error(err))

        // ---- WHEN NOT USING THE API:
        // The points update is local(Changes will not persist after refreshing the page)
        this.setPoints(this.state.points + points, () => this.togglePointShop())
    }

    buyItem = (points) => { //---- WHEN NOT USING THE API ONLY ----
        // This method replaces the API REQ when buying new items. 
        // Here we rest points based on the product you buy.
        this.setPoints(this.state.points - points)

    }

    togglePointShop = () => {
        this.setState({...this.state, isBuyingPoints: !this.state.isBuyingPoints})
        document.body.classList.toggle('no-scroll')
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }

    render() {
        return (
            <UserContext.Provider value={{...this.state, setPoints: this.setPoints, setUsername: this.setUsername, addPoints: this.addPoints, togglePointShop: this.togglePointShop, buyItem: this.buyItem}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
