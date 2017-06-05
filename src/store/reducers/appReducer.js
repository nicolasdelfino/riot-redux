const initialState = {
  title: 'default title'
}

let reducer = (state = initialState, action) => {
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

export default reducer
