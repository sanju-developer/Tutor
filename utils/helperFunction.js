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
