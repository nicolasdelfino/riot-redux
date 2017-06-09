import { initialAppState } from '../../init'
import { CHANGE_TITLE } from '../../actionTypes'

let reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state, title: action.payload
      }
    default:
      return state
  }
  return state
}

export default reducer
