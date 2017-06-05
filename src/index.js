import riot from 'riot'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/combineReducers'
import { createLogger } from 'redux-logger';

//tag
import './app.tag'

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

//mount
document.addEventListener('DOMContentLoaded', () => {
  riot.mount('app', { store: store })
})
