import React, { Component } from 'react'
import { Header } from './components/Header'

export class App extends Component {
  render() {
    return (
      <div>
        <Header firstname='Robert' lastname='Teets' age={25} hairColor='Brown' />
        <Header firstname='Amelia' lastname='Troy' age={25} hairColor='Blonde' />
        <Header firstname='Tyler' lastname='Stevenson' age={20} hairColor='Black' />
        <Header firstname='Grace' lastname='Richardson' age={20} hairColor='Brown' />
      </div>
    )
  }
}