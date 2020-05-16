import { combineReducers } from 'redux'
import { ErrorReducerName } from 'redux/constants/reducerNames'

import commonApiReducer from './commonApiReducer'
import ErrorReducerFunction from './ErrorReducer'
import signInReducer from './signInReducer'
import tutorSignupReducerFunction from './tutorSignupReducer'
import studentSignupReducerFunction from './studentSignupReducer'
import { UserRoleReducer } from './userRoleReducer'
import {
  TutorSignupReducerName,
  StudentSignupReducerName,
  SignInReducerName,
} from '../constants/reducerNames'

const rootReducer = combineReducers({
  error: commonApiReducer(ErrorReducerName, ErrorReducerFunction),
  userRole: UserRoleReducer,
  tutorSignup: commonApiReducer(
    TutorSignupReducerName,
    tutorSignupReducerFunction
  ),
  studentSignup: commonApiReducer(
    StudentSignupReducerName,
    studentSignupReducerFunction
  ),
  signIn: commonApiReducer(SignInReducerName, signInReducer),
})

export default rootReducer
