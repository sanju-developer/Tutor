export const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const UnauthorizedErrCode = 401
export const httpMethods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
}

export const EntryAsOwner = 'owner' || 'teacher'
export const EntryAsStudent = 'Student'

export const LandingPageDrawerItems = [
  { name: 'Home', route: '/' },
  { name: 'Features', route: '/features' },
  { name: 'Support', route: '/support' },
  { name: 'Team', route: '/team' },
  { name: 'Contact', route: '/contact' },
  { name: 'Pricing', route: '/pricing' },
]
