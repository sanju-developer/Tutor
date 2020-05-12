import { commonActionCreator } from './commonActionCreator'
import { actionTypes } from '../constants/actionTypeName'

export const SetUserRole = role => {
  return dispatch => {
    dispatch(commonActionCreator(actionTypes.USER_ROLE, role))
  }
}
