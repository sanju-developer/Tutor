import { combineReducers } from 'redux'
import { ErrorReducerName } from 'redux/constants/reducerNames'

import commonApiReducer from './commonApiReducer'
import ErrorReducerFunction from './ErrorReducer'
import tutorSignupReducerFunction from './tutorSignupReducer'
import { UserRoleReducer } from './userRoleReducer'
import { TutorSignupReducerName } from '../constants/reducerNames'

const rootReducer = combineReducers({
  error: commonApiReducer(ErrorReducerName, ErrorReducerFunction),
  userRole: UserRoleReducer,
  tutorSignup: commonApiReducer(
    TutorSignupReducerName,
    tutorSignupReducerFunction
  ),
})

export default rootReducer
