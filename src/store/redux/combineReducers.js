import { combineReducers } from 'redux'
import appReducer from './reducers/appReducer'

const rootReducer = combineReducers({
  main:appReducer,
})

export default rootReducer
