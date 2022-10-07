import React, { Component } from 'react'

export class Header extends Component {
    render() {

        const { firstname, lastname, age, hairColor } = this.props

        return (
            <div>
                <h1>{lastname}, {firstname}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}