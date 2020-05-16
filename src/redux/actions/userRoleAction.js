import { actionTypes } from '../constants/actionTypeName'

export const SetUserRoleAction = role => {
  return dispatch => {
    dispatch({ type: actionTypes.USER_ROLE, payload: role })
  }
}
