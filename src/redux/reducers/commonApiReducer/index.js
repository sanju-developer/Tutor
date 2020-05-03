import { apiCommonActionType } from 'redux/constants/actionTypeName'

const initialState = {
  isApiLoading: false,
  apiData: null,
  isApiFailed: false,
  apiError: null
}

const commonApiReducer = (reducerName, respectiveReducer) => (
  state = initialState,
  action
) => {
  switch (action.type) {
    case `${reducerName}_${apiCommonActionType.isLoading}`:
      return {
        ...state,
        isApiLoading: true
      }
    case `${reducerName}_${apiCommonActionType.setData}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload
      }
    case `${reducerName}_${apiCommonActionType.setError}`:
      return {
        ...state,
        isApiFailed: true,
        isApiLoading: false,
        apiError: action.payload
      }

    default:
      return respectiveReducer(state, action)
  }
}

export default commonApiReducer
