import { actionTypes } from '../constants/actionTypeName'

export const SetUserRole = role => {
  return dispatch => {
    dispatch({ type: actionTypes.USER_ROLE, payload: role })
  }
}
