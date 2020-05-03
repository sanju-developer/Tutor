import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import rootReducer from './reducers/combineReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const routerMiddlewareWithBrowserRouter = routerMiddleware(BrowserRouter)

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(thunk, logger, routerMiddlewareWithBrowserRouter)
  )
)

export default store
