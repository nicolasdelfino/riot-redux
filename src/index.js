import riot from 'riot'
//tag
import './app.tag'
//redux
import { createStore as createReduxStore, applyMiddleware } from 'redux'
import rootReducer from './store/redux/combineReducers'
import { createLogger } from 'redux-logger';
//dedux
import { createStore as createDeduxStore, createActions, combineModifiers } from 'dedux';
import actions from './store/dedux/actions';
import modifiers from './store/dedux/modifiers';
//initial state
import { initialAppState } from './store/init'

const getStore = () => {
  let _store = null
  if(initialAppState.stateLib === 'dedux') {
    _store = createDeduxStore(modifiers, actions, {main:initialAppState})
  }
  else if(initialAppState.stateLib === 'redux'){
    const logger = createLogger()
    _store = createReduxStore(
      rootReducer,
      applyMiddleware(logger)
    )
  }
  return _store
}

//mount
document.addEventListener('DOMContentLoaded', () => {
  riot.mount('app', { store: getStore() })
})



