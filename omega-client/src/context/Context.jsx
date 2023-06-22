import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reducer'
import axios from 'axios'

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
  photoURLUpdated: false,
  userPhotoURL: null,
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
    const getUserPhotoURL = async () => {
      try {
        const response = await axios.get(
          `/admins/${state.user?.adminId}/profile-picture`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Bearer ${state.user.access_token}`,
            },
          }
        )
        const data = response.data.data
        dispatch({ type: 'UPDATE_PROFILE-PIC', payload: data.imageUrl })
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getUserPhotoURL()
  }, [state.user, state.photoURLUpdated])

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        userPhotoURL: state.userPhotoURL,
      }}
    >
      {children}
    </Context.Provider>
  )
}
