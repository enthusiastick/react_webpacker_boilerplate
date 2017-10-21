import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('react')

  if (reactElement) {
    ReactDOM.render(
      <h1>Boo yaa</h1>,
      reactElement
    )
  }
})
