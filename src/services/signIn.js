import { endpoints } from 'api/endpoint'
import { httpMethods } from 'utils/commonConstants'
import { api } from 'api/api'

export const SignInServiceForStudent = data => {
  return api(`${endpoints.student_login}`, httpMethods.POST, data, null, null)
}

export const SignInServiceForTutor = data => {
  return api(`${endpoints.tutor_login}`, httpMethods.POST, data, null, null)
}
