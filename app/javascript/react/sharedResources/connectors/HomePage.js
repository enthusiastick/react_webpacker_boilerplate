import React from 'react'
import { connect } from 'react-redux'

import { getCurrentUser } from '../actions/getCurrentUser'

import HomeContainer from '../containers/HomeContainer'

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => { dispatch(getCurrentUser) }
  }
}

const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

export default HomePage
