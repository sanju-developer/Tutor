import { combineReducers } from 'redux'
import { ErrorReducerName } from 'redux/constants/reducerNames'

import commonApiReducer from './commonApiReducer'
import ErrorReducerFunction from './ErrorReducer'
import { UserRoleReducer } from './userRoleReducer'

const rootReducer = combineReducers({
  error: commonApiReducer(ErrorReducerName, ErrorReducerFunction),
  userRole: UserRoleReducer,
})

export default rootReducer
