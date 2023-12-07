import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import PropertyManagement from './components/PropertyManagement'
import About from './components/About'
import LegalServices from './components/LegalServices'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/prop" component={PropertyManagement} />
      <Route exact path="/legal" component={LegalServices} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
