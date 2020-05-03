export const commonActionCreator = reducerName => (actionType, payload) => {
  return {
    type: `${reducerName}_${actionType}`,
    payload
  }
}
