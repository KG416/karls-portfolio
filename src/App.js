import './App.css';
import Nav from './Components/Nav';
import logo from './img/karl-logo-v3.jpg';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
/* import Footer from './Components/Footer'; */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (<>
    <Router>
      <div className="master-wrap">
        <Nav logo={logo} />

        <Switch>
          {/* Klassiska sättet */}
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
    {/* <Footer /> */}
  </>);
}

export default App;







