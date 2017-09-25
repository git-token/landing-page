import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducers/index'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware),
  applyMiddleware(thunk),
)

export {
  store,
  history
}
