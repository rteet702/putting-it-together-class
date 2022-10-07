import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: this.props.age
        }
    }

    clickHandler = () => {
        this.setState({ age: this.state.age + 1 })
    }

    render() {

        const { firstname, lastname, age, hairColor } = this.props

        return (
            <div>
                <h1>{lastname}, {firstname}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.clickHandler}>Click for Birthday!</button>
            </div>
        )
    }
}