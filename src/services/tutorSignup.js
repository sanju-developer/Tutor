import { endpoints } from 'api/endpoint'
import { httpMethods } from 'utils/commonConstants'
import { api } from 'api/api'

export const SignupServiceForTutor = data => {
  return api(`${endpoints.tutor_signup}`, httpMethods.POST, data, null, null)
}
