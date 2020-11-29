import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Home from './components/layouts/home'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
