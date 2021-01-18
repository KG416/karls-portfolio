import './App.css';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Portfolio from './Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="master-wrap">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
      </Router>
  );
}

export default App;







