import React, { Component } from 'react'

import Home from '../components/Home'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (!this.props.currentUser.id) {
      this.props.getCurrentUser()
    }
  }

  render() {
    return(<Home />)
  }
}

export default HomeContainer
