import React, { Component } from 'react'

class UserGreetingClass extends Component {
    constructor(props) {
        super(props)
        this.data = props
    }

    render() {
        return (
            <div>
                <h2>Hello, {this.data.userName}!</h2>
            </div>
        )
    }
}

export default UserGreetingClass
