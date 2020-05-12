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
    dispatch(commonActionCreator(reducerName)(apiCommonActionType.isLoading))
    const updatedQuerryparams = createQueryParams(queryParams)
    const response = await commonServiceAction(service)(
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
          commonActionCreator(reducerName)(apiCommonActionType.setError, error)
        )
      }
    }
  }
}
