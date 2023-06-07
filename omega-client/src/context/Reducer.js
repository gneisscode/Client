const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
      }

    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: true,
      }

    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true,
      }
    case 'UPDATE_START':
      return {
        ...state,
        isFetching: true,
      }

    case 'UPDATE_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: true,
      }

    case 'UPDATE_FAILURE':
      return {
        user: state.user,
        isFetching: false,
        error: true,
      }

    case 'LOGOUT':
      return {
        user: null,
        isFetching: false,
        error: false,
        userPhotoURL: null,
      }

    case 'PROFILE-PIC_UPDATED':
      return {
        ...state,
        photoURLUpdated: true,
      }

    case 'UPDATE_PROFILE-PIC':
      return {
        ...state,
        photoURLUpdated: false,
        userPhotoURL: action.payload,
      }

    default:
      return state
  }
}

export default Reducer
