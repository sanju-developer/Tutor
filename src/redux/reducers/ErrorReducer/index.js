import { ErrorReducerName } from 'redux/constants/reducerNames'
import { apiCommonActionType } from 'redux/constants/actionTypeName'

const ErrorReducer = (state, action) => {
  switch (action.type) {
    case `${ErrorReducerName}_${apiCommonActionType.internalServerError}`:
      return {
        ...state,
        internalServerError: action.payload
      }

    case `${ErrorReducerName}_${apiCommonActionType.clearInternalServerError}`:
      return {
        ...state,
        internalServerError: null
      }

    default:
      return { ...state }
  }
}

export default ErrorReducer
