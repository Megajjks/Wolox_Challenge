import { createContext, useContext, useState } from 'react'
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = (props) => {
  const [authToken, setAuthToken] = useState()
  const setToken = (data) => {
    localStorage.setItem('token', JSON.stringify(data.token))
    setAuthToken(data)
  }
  return (
    <AuthContext.Provider value={{ authToken, setToken }}>
      {props.children}
    </AuthContext.Provider>
  )
}
