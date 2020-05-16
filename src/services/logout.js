import { endpoints } from 'api/endpoint'
import { httpMethods } from 'utils/commonConstants'
import { api } from 'api/api'

export const logoutService = refreshToken => {
  return api(
    `${endpoints.logout}`,
    httpMethods.DELETE,
    refreshToken,
    null,
    null
  )
}
