const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
      }
    case 'LOGIN_SUCCESS':
      return {
        user: null,
        isFetching: true,
        error: false,
      }
    case 'FAILURE':
      return {
        user: null,
        isFetching: true,
        error: false,
      }
    default:
      return { ...state }
  }
}
