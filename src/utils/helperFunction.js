import Cookies from 'universal-cookie'

// Create queryparams
export function createQueryParams(queryParamString) {
  let params = {}
  if (typeof queryParamString === 'string') {
    // case when we have queryParams in string format like we used in filter api where we used to send only parmater name without any key
    const queryParams = queryParamString.split('&')
    params = queryParams.reduce((accumulator, currValue) => {
      const keyValue = currValue.split('=')
      accumulator[keyValue[0]] = decodeURIComponent(keyValue[1])
      return accumulator
    }, {})
  } else return queryParamString

  return params
}

export const isLoggedIn = () => {
  if (localStorage.getItem('token')) {
    return true
  } else return false
}

// create cookie instance
const cookies = new Cookies()
// setting securely accessToken
export function setAccessToken(accessToken) {
  cookies.set('accessToken', accessToken, [
    {
      path: '/',
      secure: true,
      sameSite: 'none',
    },
  ])
}
// setting securely refreshToken
export function setRefreshToken(refreshToken) {
  cookies.set('refreshToken', refreshToken, [
    {
      path: '/',
      secure: true,
      sameSite: 'none',
    },
  ])
}
// get accessToken
export function getAccessToken() {
  const accessToken = cookies.get('accessToken')
  return accessToken
}
// get refreshToken
export function getRefreshToken() {
  const refreshToken = cookies.get('refreshToken')
  return refreshToken
}
// clear cookies
export function clearCookies() {
  cookies.remove('accessToken')
  cookies.remove('refreshToken')
}

// set headers name on click of item from sidebar
export function getHeadersName() {
  return localStorage.getItem('headerName')
}
// return headers name wherever required
export function setHeadersName(headerName) {
  localStorage.setItem('headerName', headerName)
}
export function getWindowWidth() {
  return window.innerWidth
}
export function getWindowHeight() {
  return window.innerHeight
}
export function setBackButtonState(status) {
  if (status) {
    localStorage.setItem('backButton', status)
  }
}
export function getBackButtonState() {
  return localStorage.getItem('backButton')
}
export function clearLocalStorage() {
  localStorage.clear()
}
export function getOS() {
  const userAgent = navigator.userAgent,
    platform = navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod']
  let os = null
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS'
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS'
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows'
  } else if (/Android/.test(userAgent)) {
    os = 'Android'
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux'
  }
  return os
}
// give intial from Lastname like: Raj Kumar Rao output= R
export function giveMeLastInitial(data, index) {
  const userNameSplitList = data.users[index].name.split(' ')
  const userLastName = userNameSplitList[userNameSplitList.length - 1]
  return userLastName.charAt(0).toUpperCase()
}
// give intial from Lastname like: Raj Kumar Rao output= R
export function giveMeFirstInitial(data, index) {
  const userNameSplitList = data.users[index].name.split(' ')
  const userFirstName = userNameSplitList[0]
  return userFirstName.charAt(0).toUpperCase()
}
export const getQueryForFilters = ({
  trusted,
  blocked,
  isNew,
  unknown,
  notJustified,
  justified,
  requested,
  totalPermission,
  totalCompliance,
  complianceToggleBtnState,
  ascDescFilterState,
}) => {
  const queryObj = {}
  // application filter
  if (trusted && blocked) {
    queryObj.trusted = 'both'
  } else if (trusted) {
    queryObj.trusted = 'true'
  } else if (blocked) {
    queryObj.trusted = 'false'
  }
  if (isNew) {
    queryObj.new = 'true'
  }
  if (unknown) {
    queryObj.unknown = 'true'
  }
  // justification filter
  if (justified) {
    queryObj.justifications = queryObj.justifications
      ? queryObj.justifications + ',JUSTIFIED'
      : 'JUSTIFIED'
  }
  if (notJustified) {
    queryObj.justifications = queryObj.justifications
      ? queryObj.justifications + ',NOT_JUSTIFIED'
      : 'NOT_JUSTIFIED'
  }
  if (requested) {
    queryObj.justifications = queryObj.justifications
      ? queryObj.justifications + ',REQUESTED'
      : 'REQUESTED'
  }
  // apply filter for permission of security&Compliance filter
  if (totalPermission && totalPermission.length) {
    totalPermission.forEach(item => {
      // add those key in query who have value true
      if (item[item.name]) {
        if (!queryObj.hasOwnProperty('scopes')) {
          queryObj.scopes = item.name
        } else {
          queryObj.scopes += ',' + item.name
        }
      }
    })
  }
  // apply filter for totalCompliance of security&Compliance filter
  if (totalCompliance && totalCompliance.length) {
    if (!complianceToggleBtnState) {
      totalCompliance.forEach(item => {
        // add those key in query who have value true
        if (item[item.name]) {
          if (!queryObj.hasOwnProperty('compliances')) {
            queryObj.compliances = item.name
          } else {
            queryObj.compliances += ',' + item.name
          }
        }
      })
    } else {
      totalCompliance.forEach(item => {
        // add those key in query who have value true
        if (item[item.name]) {
          if (!queryObj.hasOwnProperty('non_compliances')) {
            queryObj.non_compliances = item.name
          } else {
            queryObj.non_compliances += ',' + item.name
          }
        }
      })
    }
  }
  // sorting
  if (ascDescFilterState === 'asc') {
    queryObj.ordering = 'name'
  } else if (ascDescFilterState === 'desc') {
    queryObj.ordering = '-name'
  }
  return queryObj
}
// Create queryparams
export function queryParams(queryParamString) {
  let params = {}
  if (queryParamString) {
    const queryParams = queryParamString.split('&')
    params = queryParams.reduce((accumulator, currValue) => {
      const keyValue = currValue.split('=')
      accumulator[keyValue[0]] = decodeURIComponent(keyValue[1])
      return accumulator
    }, {})
  }
  return params
}

export const removeEmptyKeyFromObject = object => {
  for (const key in object) {
    if (object[key].length === 0) {
      delete object[key]
    }
  }

  return object
}
