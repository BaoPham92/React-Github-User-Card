import React, { Component } from 'react';
import axios from 'axios';

// * IMPORT COMPONENTS HERE
import { UserCard } from './UserCard';

export default class Users extends Component {

    state = {
        user: undefined
    }

    componentDidMount() {

        // * FETCH USER DATA FOR GITHUB CARD
        axios.get(`https://api.github.com/users/BaoPham92`)
        .then(res => this.setState({user: res.data}))

        console.log(`THIS IS COMPONENT DID MOUNT!!`);
    }

    componentDidUpdate() {
        
        console.log(`THIS IS COMPONENT DID UPDATE!!`)
        console.log(this.state.user)
    }

    render() {

        return (
            <div>
                <h1>SOMETHING HERE</h1>

                <UserCard />
            </div>
        )
    }
}