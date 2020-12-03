import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Home from './components/layouts/Home'
import Register from './components/layouts/Register'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
