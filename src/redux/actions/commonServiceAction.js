import { apiCommonActionType } from 'redux/constants'
import store from 'redux/store'
import { errorStatusCode } from 'utils/errorStatusCode'
import { commonActionCreator } from './commonActionCreator'
import { ErrorReducerName } from 'redux/constants'

export const commonServiceAction = serviceName => async (
  data,
  queryParams,
  urlPathParams
) => {
  const response = await serviceName(data, queryParams, urlPathParams).catch(
    error => {
      if (error.response.status === errorStatusCode.internalServerErrorCode) {
        return store.dispatch(
          commonActionCreator(ErrorReducerName)(
            apiCommonActionType.internalServerError,
            error.response.message
          )
        )
      }
    }
  )
  return response
}
