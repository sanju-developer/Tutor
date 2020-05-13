import { commonActionCreator } from './commonActionCreator'
import { commonServiceAction } from './commonServiceAction'
import { apiCommonActionType } from '../constants/actionTypeName'
import { createQueryParams } from 'utils/helperFunction'

export const commonApiAction = service => (
  reducerName,
  data,
  queryParams,
  urlPathParams
) => {
  return async dispatch => {
    dispatch(
      commonActionCreator(reducerName)(apiCommonActionType.isLoading, null)
    )
    const updatedQuerryparams = createQueryParams(queryParams)
    const response = await commonServiceAction(service)(
      reducerName,
      data,
      updatedQuerryparams,
      urlPathParams
    )
    if (response) {
      try {
        dispatch(
          commonActionCreator(reducerName)(
            apiCommonActionType.setData,
            response.data
          )
        )
      } catch (error) {
        dispatch(
          commonActionCreator(reducerName)(
            apiCommonActionType.setError,
            error.response.data
          )
        )
      }
    }
  }
}
