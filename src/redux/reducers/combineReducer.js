import { combineReducers } from 'redux'
import { ErrorReducerName } from 'redux/constants/reducerNames'

import commonApiReducer from './commonApiReducer'
import ErrorReducerFunction from './ErrorReducer'

const rootReducer = combineReducers({
  error: commonApiReducer(ErrorReducerName, ErrorReducerFunction)
})

export default rootReducer
