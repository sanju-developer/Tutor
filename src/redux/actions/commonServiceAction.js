import store from 'redux/store'
import { commonActionCreator } from './commonActionCreator'
import { apiCommonActionType } from '../constants/actionTypeName'
import { ErrorReducerName } from '../constants/reducerNames'
import { errorStatusCode } from 'utils/errorStatusCodes'

export const commonServiceAction = serviceName => async (
  reducerName,
  data,
  queryParams,
  urlPathParams
) => {
  const response = await serviceName(data, queryParams, urlPathParams).catch(
    error => {
      if (error?.response?.status === errorStatusCode.internalServerErrorCode) {
        return store.dispatch(
          commonActionCreator(ErrorReducerName)(
            apiCommonActionType.internalServerError,
            error.response.message
          )
        )
      } else {
        store.dispatch(
          commonActionCreator(reducerName)(
            apiCommonActionType.setError,
            error.response
          )
        )
      }
    }
  )
  return response
}
