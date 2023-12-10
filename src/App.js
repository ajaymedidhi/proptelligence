import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import PropertyManagement from './components/PropertyManagement'
import About from './components/About'
import Contact from './components/Contact'
import Technology from './components/Technology'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/prop" component={PropertyManagement} />
      <Route exact path="/technology" component={Technology} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
)

export default App
