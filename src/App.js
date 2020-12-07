import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TechnologiesState from './components/context/Technologies/TechnologiesState'
import { AuthProvider } from './components/context/AuthContext'
import PrivateRoute from './components/routes/PrivateRoute'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import SplashScreen from './components/ui/SplashScreen'
// import Technologies from './components/layouts/Technologies'

const Home = lazy(() => import('./components/layouts/Home'))
const Register = lazy(() => import('./components/layouts/Register'))
const Technologies = lazy(() => import('./components/layouts/Technologies'))

function App() {
  return (
    <AuthProvider>
      <TechnologiesState>
        <Suspense fallback={<SplashScreen />}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/register" render={() => <Register />} />
              <PrivateRoute
                path="/technologies"
                render={() => <Technologies />}
              />
            </Switch>
            <Footer />
          </Router>
        </Suspense>
      </TechnologiesState>
    </AuthProvider>
  )
}

export default App
