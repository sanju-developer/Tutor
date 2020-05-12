import { endpoints } from 'api/endpoint'
import { httpMethods, EntryAsOwner } from 'utils/commonConstants'
import { api } from 'api/api'

export const SignInService = (signInAs, data) => {
  return api(
    `${
      signInAs === EntryAsOwner
        ? endpoints.tutor_signup
        : endpoints.student_login
    }`,
    httpMethods.POST,
    data,
    null,
    null
  )
}
