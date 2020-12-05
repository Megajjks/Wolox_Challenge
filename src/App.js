import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TechnologiesState from './components/context/Technologies/TechnologiesState'
import { AuthProvider } from './components/context/AuthContext'
import PrivateRoute from './components/routes/PrivateRoute'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Home from './components/layouts/Home'
import Register from './components/layouts/Register'
import Technologies from './components/layouts/Technologies'

function App() {
  return (
    <AuthProvider>
      <TechnologiesState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute path="/technologies" component={Technologies} />
          </Switch>
          <Footer />
        </Router>
      </TechnologiesState>
    </AuthProvider>
  )
}

export default App
