import axios from 'axios'
import ServerConfig from 'config'
import {
  getRefreshToken,
  setAccessToken,
  clearCookies,
  getAccessToken,
} from 'utils/helperFunction'
import { UnauthorizedErrCode } from 'utils/commonConstants'
import { endpoints } from './endpoint'

const { API } = ServerConfig
// ---------------------Setting Interceptor For Request ---------------------------
;(function createAxiosResponseInterceptor() {
  axios.interceptors.response.use(
    response => response,
    error => {
      // Reject promise if api call for signin
      if (
        error.response.config.url.indexOf(endpoints.student_login) ||
        error.response.config.url.indexOf(endpoints.tutor_login) > -1
      ) {
        return Promise.reject(error)
      } else if (error.response.status !== UnauthorizedErrCode) {
        // Reject promise if usual error
        return Promise.reject(error)
      }
      /*
       * When response code is UnauthorizedErrCode, try to refresh the token.
       * Eject the interceptor so it doesn't loop in case
       * token refresh causes the UnauthorizedErrCode response
       */
      const refreshToken = getRefreshToken()
      return axios
        .post(API.BASE_URL + endpoints.refresh_token, {
          refresh: refreshToken,
        })
        .then(response => {
          // saveToken()
          setAccessToken(response.data.accessToken)
          // calling original API'
          error.response.config.headers.Authorization =
            'Bearer ' + response.data.accessToken
          return axios(error.response.config)
        })
        .catch(error => {
          // destroyToken
          clearCookies()
          // move to login section
          window.location.push('/')
          return Promise.reject(error)
        })
    }
  )
})()
// --------------------- Generic API CALL -----------------------
export const api = (
  endpoint,
  apiMethod,
  data,
  queryParams,
  authRequired = true
) => {
  const apiParameter = {
    method: apiMethod,
    url: API.BASE_URL + endpoint,
    // withCredentials: true,
    timeout: 1000 * 120, // Wait for 120 seconds
  }
  // get refreshToken and accessToken in session storage, inorder to prevent sideffect on page reload
  const accessToken = getAccessToken()
  // append headers if required
  if (accessToken) {
    // ---------- headers ----------
    if (authRequired) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      }
      apiParameter.headers = headers
    }
  }
  /**
   * Conditinal check for sending data/queryparams in apiParameter
   */
  if (data !== null) {
    apiParameter.data = data
  }
  if (queryParams !== undefined) {
    apiParameter.params = queryParams
  }
  return axiosApi(apiParameter)
}
function axiosApi(apiParameter) {
  return axios(apiParameter).then(handleResponse)
}
function handleResponse(response) {
  /**
   * Following if statement is added to handle any error
   * occurs in fetching api.
   */
  const type = response.headers['content-type']
  let res
  if (type === 'application/json') {
    res = response
  }
  return res
}
