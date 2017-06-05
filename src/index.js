import riot from 'riot'
const redux = require('redux')

//tag
import './app.tag'

const initialState = {
  title: 'default title'
}

let reducer = (state = initialState, action) => {
  console.log('action =>', action)
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {
        ...state, title: action.payload
      }
    default:
      return state
  }
  return state
}

console.log(redux)
const reduxStore = redux.createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('app', { store: reduxStore })
})
