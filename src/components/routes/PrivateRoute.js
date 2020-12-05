import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth()

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('user') && isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}

export default PrivateRoute
