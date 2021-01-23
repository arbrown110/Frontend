import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/Home'
import AdventureContainer from './component/AdventureContainer'
import About from './component/About'
import Contact from './component/Contact'
import Link from './component/Link'
import './App.css';
import NavBar from './component/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/adventures" component={AdventureContainer}/>
         <Route exact path="about" component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/link" component={Link}/>
        </Switch>
        {/* <AdventuresContainer /> */}
      </div>
    </Router>
  )
}


export default App;
