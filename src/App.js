import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Home from './components/layouts/home'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
