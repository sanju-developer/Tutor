import { actionTypes } from '../constants/actionTypeName'

const initialState = {
  userRole: null,
}

export const UserRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      }

    default:
      return { ...state }
  }
}
